# AI roleplay log validator

Check that a character prompt experiment contains the planned runs and replies before reviewing its writing. This local JavaScript utility catches missing or duplicate records, changed questions, mismatched character inputs and versions, changed history declarations, and replies that do not follow a first-generation policy.

Maintained for the [CrushOn AI](https://crushon.ai/) brand account with AI assistance. CrushOn's character editor provides a hosted place to run a private SFW character test; this utility keeps the capture checks separate. It is platform-neutral, makes no network or model calls, and does not grade replies or authenticate transcripts.

## Run the examples

Use Node.js 22 or later. The supplied package was executed with Node.js 24.8.0. No dependency installation or API key is required.

From the repository root:

```sh
cd tools/roleplay-log-validator
node --test validate-roleplay-log.test.mjs
node validate-roleplay-log.mjs fixtures/manifest.json fixtures/pass.json
node validate-roleplay-log.mjs fixtures/manifest.json fixtures/fail.json
```

The passing example reports four expected and four recorded turns, with no issues. The failing example reports three recorded turns and these three defects:

```text
MISSING_TURN             A1 has no Q2 entry
INPUT_VERSION_MISMATCH   A2 uses a different input version
INPUT_TEXT_MISMATCH      A2 changes the actual character snapshot
```

Exit codes are `0` for a structurally valid record, `1` for validation issues, and `2` for usage, file, or JSON parsing errors. The failing fixture intentionally exits `1`.

## Files and evidence status

| File | Purpose |
| --- | --- |
| [validate-roleplay-log.mjs](validate-roleplay-log.mjs) | Validator and command-line entry point |
| [validate-roleplay-log.test.mjs](validate-roleplay-log.test.mjs) | 23 software checks, including CLI behavior |
| [fixtures/manifest.json](fixtures/manifest.json) | Two planned runs with two questions each |
| [fixtures/pass.json](fixtures/pass.json) | Structurally complete synthetic log |
| [fixtures/fail.json](fixtures/fail.json) | Synthetic log with missing and mismatched records |

**Every reply in these fixtures is authored synthetic test data. No model was called to produce it.** The passing fixture deliberately includes poor roleplay that invents a crown and assigns the visitor actions. It passes because the records are complete, not because the replies are good.

The [October 13 Iris study](../../studies/iris-personality-20261013/README.md) is a separate real chat record: six conversations and 30 first-generated replies. These two-question fixtures are not that transcript or a new model benchmark.

## Adapt the manifest

Preserve the manifest before collecting replies. Record a stable `protocolVersion`, ordered question IDs and exact question text, condition IDs, input versions, exact input snapshots, and planned run IDs. Each planned run declares `historyMode` as `new` or `continued`.

Capture all relevant character fields in `inputText`, using a consistent serialization convention. Do not silently rewrite the manifest after observing a failure. The validator compares the version label and SHA-256 fingerprint of the UTF-8 input string separately; a matching hash is not a signature or proof that a model received that text.

Each turn has one of three states:

- `recorded`: a nonempty reply was captured.
- `not-run`: the planned turn did not run; include a `note`.
- `capture-missing`: the turn ran, but its reply record is unavailable; include a `note`.

The last two account for a gap but fail the completion check. Keep regenerated replies separately if the protocol requires the first generation. An experiment designed to compare retries needs an attempt-aware schema rather than replacing its original reply.

`recordedTurns` counts nonempty, uniquely keyed replies within planned runs. It is not a count of correct replies or valid independent experiments; input mismatches can coexist with recorded turns. Inspect `valid` and the full `issues` list.

## Limits and integration

The utility validates declared data, not provenance. It cannot detect a fabricated but internally consistent log, verify model settings, establish long-term memory, or decide whether a character respected user agency. Preserve original captures and review behavior separately with supporting excerpts.

This is a small schema, not a native importer for CrushOn, the personality workshop, or third-party exports. An adapter must retain the original file, map IDs explicitly, and preserve omissions. A missing message must not shift every subsequent question label unnoticed.

Keep private account identifiers, character URLs, personal information, and unrelated captures out of public logs. The fictional SFW fixtures do not contain them. Public-facing times in related study records use America/Los_Angeles.

To plan a real experiment, use the [evidence ledger](../../docs/ai-roleplay-evidence-ledger.md), [recorded protocol](../../studies/iris-personality-20261013/conditions-and-protocol.md), and [private CrushOn character editor](https://crushon.ai/character/create). The repository's [license](../../LICENSE) applies to this tool and its authored fixtures.
