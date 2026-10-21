import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { validate } from './validate-roleplay-log.mjs';

const load = (name) => JSON.parse(readFileSync(new URL(`./fixtures/${name}.json`, import.meta.url), 'utf8'));
const sample = () => ({ manifest: load('manifest'), log: load('pass') });
const codes = (result) => result.issues.map(({ code }) => code);
const check = (name, mutation, expectedCode) => test(name, () => {
  const { manifest, log } = sample();
  mutation(manifest, log);
  assert.ok(codes(validate(manifest, log)).includes(expectedCode));
});

test('a complete log passes even when replies contain behavioral failures', () => {
  assert.deepEqual(validate(load('manifest'), load('pass')), { valid: true, expectedTurns: 4, recordedTurns: 4, issues: [] });
});
test('the failure fixture exposes three distinct defects', () => {
  assert.deepEqual(codes(validate(load('manifest'), load('fail'))), ['MISSING_TURN', 'INPUT_VERSION_MISMATCH', 'INPUT_TEXT_MISMATCH']);
});
check('missing runs fail', (_, log) => log.runs.pop(), 'MISSING_RUN');
check('duplicate runs fail', (_, log) => log.runs.push(structuredClone(log.runs[0])), 'DUPLICATE_RUN');
check('unexpected runs fail', (_, log) => log.runs.push({ ...log.runs[0], id: 'A3' }), 'UNEXPECTED_RUN');
check('duplicate turns fail', (_, log) => log.runs[0].turns.push(structuredClone(log.runs[0].turns[0])), 'DUPLICATE_TURN');
check('unexpected prompts fail', (_, log) => log.runs[0].turns.push({ promptId: 'Q3' }), 'UNEXPECTED_TURN');
check('changed question text fails', (_, log) => { log.runs[0].turns[0].promptText += ' Guess.'; }, 'PROMPT_TEXT_MISMATCH');
check('changed protocol version fails', (_, log) => { log.protocolVersion = 'v2'; }, 'PROTOCOL_VERSION_MISMATCH');
check('changed condition fails', (_, log) => { log.runs[0].condition = 'B'; }, 'CONDITION_MISMATCH');
check('changed text with an unchanged version fails', (_, log) => { log.runs[0].inputText += ' Be reckless.'; }, 'INPUT_TEXT_MISMATCH');
check('empty replies fail', (_, log) => { log.runs[0].turns[0].reply = ' \n '; }, 'EMPTY_REPLY');
check('accounted for but unexecuted turns fail completion', (_, log) => {
  log.runs[0].turns[0] = { ...log.runs[0].turns[0], status: 'not-run', note: 'Run interrupted.' };
}, 'UNEXECUTED_TURN');
check('missing capture requires a note', (_, log) => { log.runs[0].turns[0].status = 'capture-missing'; }, 'MISSING_NOTE');
check('regenerated replies fail this first-generation protocol', (_, log) => { log.runs[0].turns[0].generation = 'regenerated'; }, 'NONFIRST_GENERATION');
check('out-of-order turns fail', (_, log) => log.runs[0].turns.reverse(), 'TURN_ORDER_MISMATCH');
check('continued history cannot silently substitute for a new chat', (_, log) => { log.runs[0].historyMode = 'continued'; }, 'HISTORY_MODE_MISMATCH');
check('missing model metadata fails', (_, log) => { delete log.runs[0].modelLabel; }, 'MISSING_MODEL_LABEL');
check('null turns produce a schema error rather than a crash', (_, log) => { log.runs[0].turns[0] = null; }, 'INVALID_SCHEMA');
check('ambiguous manifests fail before capture comparison', (manifest) => manifest.prompts.push(structuredClone(manifest.prompts[0])), 'DUPLICATE_ID');
test('non-object inputs return a schema error', () => assert.ok(codes(validate(null, [])).includes('INVALID_SCHEMA')));
test('CLI returns 0 for pass and 1 for fail', () => {
  const directory = fileURLToPath(new URL('.', import.meta.url));
  for (const [fixture, expected] of [['pass', 0], ['fail', 1]]) {
    const run = spawnSync(process.execPath, ['validate-roleplay-log.mjs', 'fixtures/manifest.json', `fixtures/${fixture}.json`], { cwd: directory, encoding: 'utf8' });
    assert.equal(run.status, expected);
    assert.equal(JSON.parse(run.stdout).valid, expected === 0);
  }
});
test('CLI returns 2 for usage or unreadable input', () => {
  const script = fileURLToPath(new URL('./validate-roleplay-log.mjs', import.meta.url));
  assert.equal(spawnSync(process.execPath, [script]).status, 2);
  assert.equal(spawnSync(process.execPath, [script, 'missing-manifest.json', 'missing-log.json']).status, 2);
});
