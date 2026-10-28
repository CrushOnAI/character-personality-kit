# AI Character Card JSON Field Checker

Check selected Character Card V1 and V2 JSON fields before reviewing an import in [CrushOn AI](https://crushon.ai/character/create) or another character editor. This local JavaScript tool distinguishes structural errors from authoring and mapping warnings. It does not modify files, upload data, or call a model.

Published by CrushOn AI. This is a brand-authored development tool, not an independent compatibility certification.

## Run

Requires Node.js 20 or later; the test run used Node.js 24.8.0. No dependencies or API key.

```bash
node validate-character-card.mjs fixtures/iris-original-v2.json
node validate-character-card.mjs fixtures/iris-original-v2.json --strict
node --test validate-character-card.test.mjs
```

The original Iris fixture produces zero errors and two warnings: `CREATOR_NOTES_REVIEW` and `PERSONALITY_ONLY_REVIEW`. Its personality contains 696 Unicode code points. These counts are not token counts.

Normal CLI exit codes: `0` means no selected-field errors (warnings may remain); `1` means an error; `2` means usage/read failure. With `--strict`, any warning also returns `1`.

## Scope

- Recognizes unversioned V1 core fields and V2 `spec: chara_card_v2`, `spec_version: "2.0"`, nested `data`.
- Checks six core strings plus required V2 metadata strings, string arrays and the extensions object.
- Flags empty names/greetings, absent behavior text, personality-only placement, conflicting root/nested copies and prompt metadata that requires destination review.
- Reports character-book and extension content as unexamined; it is not a complete card schema validator.
- Rejects unsupported formats rather than silently applying V1 rules. Does not extract PNG metadata or support V3.
- Does not verify saved application fields, privacy settings, model behavior, transcript migration, long-term memory or cross-app compatibility.

The checker does not repeat source values in its report. Field names, states and lengths can still reveal metadata; review reports before sharing them.

## Fixtures and evidence

- [Original Iris V2 JSON](fixtures/iris-original-v2.json): exact original SFW authored input used in the separately recorded draft observation.
- [Complete V1 example](fixtures/complete-v1.json): derived authored example with a nonempty description.
- [Broken V2 example](fixtures/broken-v2.json): intentionally changed field types, missing scenario and conflicting root name.
- [Draft import observation](draft-import-observation.json): reviewed October 21, 2026 (PDT), one unsaved draft. No character saved and no reply generated.
- [Source references](sources.json): specification and product guide links.

All fixture characters and participants are adults; examples are SFW. The fixtures contain authored inputs, not private user conversations. The checker suite contains 30 tests. Local code-test results must be kept distinct from the one application-screen observation.

## Review the destination

After a clean field check, review the import in a private draft. Confirm Name, Greeting, Personality and Scenario; keep reader-facing creator notes separate from behavior instructions. Save privately, reopen and compare the fields before testing a short conversation. A successful JSON parse or import notification does not complete that review.

Use the [CrushOn character creation guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide) for field purposes and the [creation screen](https://crushon.ai/character/create) for the current interface. Keep the original card and any conversation archive separately.
