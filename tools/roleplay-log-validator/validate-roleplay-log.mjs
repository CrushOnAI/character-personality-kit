#!/usr/bin/env node
// Local structural checks only. No network, model calls, or quality scoring.
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const text = (value) => typeof value === 'string' && value.trim().length > 0;
const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
export const fingerprint = (value) => createHash('sha256').update(value, 'utf8').digest('hex');

export function validate(manifest, log) {
  const issues = [];
  let expectedTurns = 0;
  let recordedTurns = 0;
  const add = (code, path, message) => issues.push({ code, path, message });
  const result = () => ({
    valid: issues.length === 0,
    expectedTurns,
    recordedTurns,
    issues,
  });
  const uniqueRows = (rows, path) => {
    if (!Array.isArray(rows) || rows.length === 0) {
      add('INVALID_SCHEMA', path, 'Expected a nonempty array.');
      return null;
    }
    const map = new Map();
    rows.forEach((row, index) => {
      if (!object(row) || !text(row.id)) {
        add('INVALID_SCHEMA', `${path}[${index}]`, 'Expected an object with a nonempty id.');
      } else if (map.has(row.id)) {
        add('DUPLICATE_ID', `${path}[${index}].id`, `Duplicate id: ${row.id}`);
      } else {
        map.set(row.id, row);
      }
    });
    return map;
  };

  if (!object(manifest) || !object(log)) {
    add('INVALID_SCHEMA', '$', 'Manifest and log must be JSON objects.');
    return result();
  }
  if (manifest.schemaVersion !== 1 || log.schemaVersion !== 1) {
    add('INVALID_SCHEMA', 'schemaVersion', 'Both schema versions must be 1.');
  }
  if (!text(manifest.protocolVersion)) {
    add('INVALID_SCHEMA', 'manifest.protocolVersion', 'A protocol version is required.');
  }
  if (log.protocolVersion !== manifest.protocolVersion) {
    add('PROTOCOL_VERSION_MISMATCH', 'log.protocolVersion', 'Log does not match the manifest protocol version.');
  }
  if (!['synthetic-fixture', 'observed-chat'].includes(log.dataKind)) {
    add('INVALID_SCHEMA', 'log.dataKind', 'Use synthetic-fixture or observed-chat.');
  }

  const prompts = uniqueRows(manifest.prompts, 'manifest.prompts');
  const conditions = uniqueRows(manifest.conditions, 'manifest.conditions');
  const planned = uniqueRows(manifest.plannedRuns, 'manifest.plannedRuns');
  if (prompts) for (const [id, prompt] of prompts) {
    if (!text(prompt.text)) add('INVALID_SCHEMA', `manifest.prompts.${id}`, 'Prompt text is required.');
  }
  if (conditions) for (const [id, condition] of conditions) {
    if (!text(condition.inputVersion) || !text(condition.inputText)) {
      add('INVALID_SCHEMA', `manifest.conditions.${id}`, 'inputVersion and inputText are required.');
    }
  }
  if (planned && conditions) for (const [id, run] of planned) {
    if (!conditions.has(run.condition)) add('INVALID_SCHEMA', `manifest.plannedRuns.${id}`, 'Unknown condition.');
    if (!['new', 'continued'].includes(run.historyMode)) add('INVALID_SCHEMA', `manifest.plannedRuns.${id}`, 'Specify new or continued historyMode.');
  }
  if (!Array.isArray(log.runs)) add('INVALID_SCHEMA', 'log.runs', 'Expected an array.');
  // Do not compare captures against an invalid or ambiguous protocol.
  if (issues.some(({ code }) => code === 'INVALID_SCHEMA' || code === 'DUPLICATE_ID')) return result();

  expectedTurns = planned.size * prompts.size;
  const runs = new Map();
  log.runs.forEach((run, index) => {
    const path = `log.runs[${index}]`;
    if (!object(run) || !text(run.id)) {
      add('INVALID_SCHEMA', path, 'Expected an object with a nonempty id.');
      return;
    }
    if (runs.has(run.id)) {
      add('DUPLICATE_RUN', path, `Duplicate run: ${run.id}`);
      return;
    }
    runs.set(run.id, run);
    if (!planned.has(run.id)) add('UNEXPECTED_RUN', path, `Run ${run.id} is not in the manifest.`);
  });

  for (const [id, expected] of planned) {
    const run = runs.get(id);
    const path = `log.runs.${id}`;
    if (!run) {
      add('MISSING_RUN', path, 'Planned run has no record.');
      continue;
    }
    const condition = conditions.get(expected.condition);
    if (run.condition !== expected.condition) add('CONDITION_MISMATCH', path, 'Condition differs from plan.');
    if (run.inputVersion !== condition.inputVersion) add('INPUT_VERSION_MISMATCH', path, 'Input version differs from plan.');
    if (!text(run.inputText) || fingerprint(run.inputText) !== fingerprint(condition.inputText)) {
      add('INPUT_TEXT_MISMATCH', path, 'Exact input snapshot differs from the manifest.');
    }
    if (run.historyMode !== expected.historyMode) add('HISTORY_MODE_MISMATCH', path, 'New versus continued history differs from plan.');
    if (!text(run.modelLabel)) add('MISSING_MODEL_LABEL', path, 'Record the visible model label, or explicitly say unknown.');
    if (!Array.isArray(run.turns)) {
      add('INVALID_SCHEMA', `${path}.turns`, 'Expected an array.');
      continue;
    }
    const seen = new Set();
    const actualOrder = [];
    for (const [index, turn] of run.turns.entries()) {
      const turnPath = `${path}.turns[${index}]`;
      if (!object(turn) || !text(turn.promptId)) {
        add('INVALID_SCHEMA', turnPath, 'Expected an object with promptId.');
        continue;
      }
      if (seen.has(turn.promptId)) {
        add('DUPLICATE_TURN', turnPath, `Duplicate prompt: ${turn.promptId}`);
        continue;
      }
      seen.add(turn.promptId);
      const prompt = prompts.get(turn.promptId);
      if (!prompt) {
        add('UNEXPECTED_TURN', turnPath, 'Prompt is not in the manifest.');
        continue;
      }
      actualOrder.push(turn.promptId);
      if (turn.promptText !== prompt.text) add('PROMPT_TEXT_MISMATCH', turnPath, 'Exact test question differs from the manifest.');
      if (turn.status === 'not-run' || turn.status === 'capture-missing') {
        add(turn.status === 'not-run' ? 'UNEXECUTED_TURN' : 'MISSING_CAPTURE', turnPath, 'Accounted for, but not a recorded reply.');
        if (!text(turn.note)) add('MISSING_NOTE', turnPath, 'Explain why the turn has no capture.');
      } else if (turn.status !== 'recorded') {
        add('INVALID_STATUS', turnPath, 'Use recorded, not-run, or capture-missing.');
      } else if (!text(turn.reply)) {
        add('EMPTY_REPLY', turnPath, 'A recorded reply must contain non-whitespace text.');
      } else {
        recordedTurns += 1;
        if (turn.generation !== 'first') add('NONFIRST_GENERATION', turnPath, 'This protocol requires the first generation. Keep retries separately.');
      }
    }
    for (const promptId of prompts.keys()) {
      if (!seen.has(promptId)) add('MISSING_TURN', path, `No entry for ${promptId}.`);
    }
    // Compare relative order even when one turn is missing; absence has its own error.
    const expectedOrder = [...prompts.keys()].filter((promptId) => seen.has(promptId));
    if (JSON.stringify(actualOrder) !== JSON.stringify(expectedOrder)) add('TURN_ORDER_MISMATCH', path, 'Recorded prompts are not in the planned order.');
  }
  return result();
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (isMain) {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error('Usage: node validate-roleplay-log.mjs manifest.json log.json');
    process.exitCode = 2;
  } else {
    try {
      const report = validate(...args.map((path) => JSON.parse(readFileSync(path, 'utf8'))));
      console.log(JSON.stringify(report, null, 2));
      process.exitCode = report.valid ? 0 : 1;
    } catch (error) {
      console.error(`Cannot read input: ${error.message}`);
      process.exitCode = 2;
    }
  }
}
