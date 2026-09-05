# Scene state: a manual handoff, not a memory engine

Scene-state extension for Character Personality Workshop v0.2.0.

## Run locally

Open `scene.html` in a browser, or serve this directory with a static HTTP server. No package installation, model API key, or build step is required. `index.html` remains the original personality editor.

1. Load the museum example to inspect a before/after transition, or start blank.
2. Enter established facts. Save a checkpoint before changing scenes.
3. Edit the latest state. Review each displayed text difference manually.
4. Export the Markdown handoff for manual use in a chat.
5. Download JSON to preserve both snapshots. Import it to resume later.

Loading an example, clearing the form, importing, or replacing a checkpoint requires confirmation. Reloading the page discards unsaved fields. There is no durable event history: JSON contains exactly two snapshots.

## Why separate state from personality?

Personality describes stable tendencies; state records a current location, time, object holder, goal, constraints, unknowns, and the scope of permitted improvisation. A desk holding a key is not evidence that a nearby character carries it. Record that distinction directly.

The museum example is an author-written worksheet inspired by a three-message manual CrushOn.AI demonstration on September 5, 2026. The UI model label was Carina 8K. It is not automatically extracted chat data, a benchmark, or a guarantee about that model.

## Observation and interpretation

The opening placed the brass key on the archive desk at 5 pm. Asked to list established facts, the model assigned the key to Iris without supporting evidence. An explicit correction and scene transition produced the correct four requested state fields. A subsequent two-sentence continuation preserved some updated facts but introduced display cases in the courtyard, an unestablished layout detail.

The lesson is to inspect both contradictions and invented additions. Creative additions are not inherently wrong; agree on what may be improvised. The editor's sample adds a narrower creative scope and an explicit unknown about the key's lock as recommendations, not as measured outcomes.

## Compatibility

- Plain-text handoff: copy manually into a chat interface where appropriate; model compliance is not guaranteed.
- JSON: `format: crushonai-scene-state`, `version: 1`; only for this worksheet. Includes `previous` and `current`, each with seven text fields.
- No native character card, World Card, Target Play, SillyTavern, or converter import integration.
- No backend, AI inference, chat scraping, semantic contradiction detection, automatic summarization, or cross-session memory.
- Entry data is not sent by this application. Hosting providers can log ordinary visits; browser extensions and shared devices are outside its control.

## Verification

Run `node tests.mjs` for the existing personality core and `node scene-tests.cjs` for the new state core from the repository root. These check software behavior, not roleplay quality. Local Chrome verification covered field editing, synchronized preview, downloaded Markdown/JSON contents, and JSON re-import. This is not an all-device compatibility claim.

Manually check blank fields, one changed item holder, reset cancellation, checkpoint replacement, MD download, JSON export/import, invalid JSON recovery, multiline text, narrow-screen layout, and keyboard navigation. Verify current inputs survive a failed import. Enter HTML-looking text and confirm it displays literally.
