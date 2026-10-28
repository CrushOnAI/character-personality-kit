#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const CORE = ['name', 'description', 'personality', 'scenario', 'first_mes', 'mes_example'];
const V2_TEXT = ['creator_notes', 'system_prompt', 'post_history_instructions', 'creator', 'character_version'];
const own = (o, k) => Object.hasOwn(o, k);
const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const filled = x => typeof x === 'string' && x.trim().length > 0;

// Checks selected fields without modifying or returning the source card text.
// This is a preflight checker, not a complete Character Card schema validator.
export function inspectCard(card) {
  const report = {format: 'unknown', scope: 'selected-fields-only', errors: [], warnings: [], fields: []};
  const issue = (level, code, path, message) => report[level].push({code, path, message});
  const error = (code, path, message) => issue('errors', code, path, message);
  const warn = (code, path, message) => issue('warnings', code, path, message);
  if (!object(card)) {
    error('ROOT_TYPE', '$', 'Expected a JSON object.');
    return report;
  }
  let data, prefix;
  if (own(card, 'spec')) {
    if (card.spec !== 'chara_card_v2') {
      error('UNSUPPORTED_SPEC', 'spec', 'Only an unversioned V1 layout or chara_card_v2 is supported.');
      return report;
    }
    report.format = 'v2';
    if (card.spec_version !== '2.0') error('SPEC_VERSION', 'spec_version', 'Expected the string 2.0.');
    if (!object(card.data)) {
      error('DATA_TYPE', 'data', 'V2 requires a data object; no root-field fallback is performed.');
      return report;
    }
    data = card.data;
    prefix = 'data.';
  } else {
    if (own(card, 'data') || own(card, 'spec_version')) {
      error('AMBIGUOUS_LAYOUT', '$', 'Version metadata or data exists without spec. Identify the format before checking.');
      return report;
    }
    report.format = 'v1';
    data = card;
    prefix = '';
  }
  const textField = key => {
    const path = prefix + key;
    if (!own(data, key)) {
      error('MISSING_FIELD', path, 'Expected a string field; missing and empty are different.');
      report.fields.push({path, state: 'missing'});
    } else if (typeof data[key] !== 'string') {
      error('FIELD_TYPE', path, 'Expected a string; null, numbers and arrays are not converted.');
      report.fields.push({path, state: 'wrong-type'});
    } else {
      report.fields.push({path, state: filled(data[key]) ? 'populated' : 'empty',
        unicodeCodePoints: Array.from(data[key]).length});
    }
  };
  CORE.forEach(textField);
  if (report.format === 'v2') {
    V2_TEXT.forEach(textField);
    for (const key of ['alternate_greetings', 'tags']) {
      if (!own(data, key)) error('MISSING_FIELD', prefix + key, 'Expected an array of strings.');
      else if (!Array.isArray(data[key]) || data[key].some(x => typeof x !== 'string')) {
        error('ARRAY_TYPE', prefix + key, 'Expected an array containing only strings.');
      }
    }
    if (!own(data, 'extensions')) error('MISSING_FIELD', 'data.extensions', 'Expected an object, normally {}.');
    else if (!object(data.extensions)) error('EXTENSIONS_TYPE', 'data.extensions', 'Expected an object.');
    for (const key of CORE) if (own(card, key) && own(data, key) && card[key] !== data[key]) {
      warn('DUPLICATE_CONFLICT', key, 'Root and data values differ; this report checks data. Review the destination mapping.');
    }
    if (own(data, 'character_book')) {
      if (!object(data.character_book)) error('BOOK_TYPE', 'data.character_book', 'Expected an object when present.');
      else warn('BOOK_UNCHECKED', 'data.character_book', 'Lorebook entries, triggers and import behavior are not validated.');
    }
    if (object(data.extensions) && Object.keys(data.extensions).length) {
      warn('EXTENSIONS_UNCHECKED', 'data.extensions', 'Extension values are preserved in the input but not interpreted.');
    }
    if (filled(data.creator_notes)) warn('CREATOR_NOTES_REVIEW', 'data.creator_notes',
      'Creator notes are reader-facing metadata in the V2 specification. Check their destination separately from behavior rules.');
    for (const key of ['system_prompt', 'post_history_instructions']) if (filled(data[key])) {
      warn('PROMPT_POSITION_REVIEW', prefix + key, 'A string does not verify destination support or prompt priority.');
    }
  }
  for (const key of ['name', 'first_mes']) if (typeof data[key] === 'string' && !filled(data[key])) {
    warn('EMPTY_AUTHORING_FIELD', prefix + key, 'A blank string is a valid field type, but review this before starting a chat.');
  }
  if (typeof data.description === 'string' && typeof data.personality === 'string') {
    if (!filled(data.description) && !filled(data.personality)) {
      warn('NO_BEHAVIOR_TEXT', prefix + 'description', 'Both description and personality are blank. Check where the character rules are stored.');
    } else if (!filled(data.description) && filled(data.personality)) {
      warn('PERSONALITY_ONLY_REVIEW', prefix + 'personality',
        'Behavior text exists only in personality. Verify that the destination imports it; this is not proof of an import bug.');
    }
  }
  return report;
}

export function inspectJSON(text) {
  try { return inspectCard(JSON.parse(text)); }
  catch (err) {
    if (!(err instanceof SyntaxError)) throw err;
    return {format: 'unknown', scope: 'selected-fields-only', fields: [], warnings: [],
      errors: [{code: 'INVALID_JSON', path: '$', message: 'Cannot parse this input as JSON. No source excerpt is included.'}]};
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const strict = args.includes('--strict');
  const paths = args.filter(x => x !== '--strict');
  if (paths.length !== 1 || paths[0].startsWith('--')) {
    console.error('Usage: node validate-character-card.mjs path/to/card.json [--strict]');
    process.exitCode = 2;
  } else {
    try {
      const report = inspectJSON(readFileSync(paths[0], 'utf8'));
      console.log(JSON.stringify(report, null, 2));
      process.exitCode = report.errors.length || (strict && report.warnings.length) ? 1 : 0;
    } catch {
      console.error('Could not read the requested file.');
      process.exitCode = 2;
    }
  }
}
