---
title: Character Personality Workshop
emoji: 🎭
colorFrom: indigo
colorTo: pink
sdk: static
app_file: index.html
pinned: false
license: mit
---

# Character Personality Workshop

Turn character traits into observable choices. A small, browser-only workshop for AI roleplay authors: fill a character brief, inspect simple completeness checks, and export Markdown or JSON.

Maintained by the [CrushOn.AI](https://crushon.ai/) team. The templates are platform-neutral. This is a writing aid, not a chatbot or a measured benchmark of model quality.

## Try it

Open `index.html` in a modern browser, or run `python3 -m http.server 8080` in this directory and visit `http://localhost:8080`.

- Start with the original SFW character Iris Vale, an adult museum conservator.
- Change what she wants, what she will not trade away, and how her behavior changes under pressure.
- Review advisory checks and the five scenario probes.
- Export a plain-text brief or editable JSON file.

The app makes no network requests, uses no analytics or external dependencies, and does not save inputs between page loads. Export before closing. The hosting provider can still receive ordinary page-request metadata. Links you choose to open lead to external websites.

## Files

- [Practical guide](docs/distinct-character-guide.md)
- [Blank template](templates/character-brief.md)
- [Example configuration](examples/iris-vale.json)
- [Scenario probe worksheet](templates/scenario-probes.md)
- `app.js`: static form rendering and exports
- `core.js`: deterministic brief formatting and advisory checks
- `tests.mjs`: validation and regression checks; run `node tests.mjs`

## What the checks can and cannot do

Checks flag missing fields, identical normal/stress behavior, and missing voice examples. They do **not** understand the character, detect all contradictions, score writing quality, or predict how any model will respond. The scenario probes are manual exercises. All sample dialogue is authored illustration, not a recorded model response.

The JSON format is this workshop's own editable brief, not a Character Card V2, World Card, or guaranteed import format. Adapt the exported text to the destination platform's current fields. No specific CrushOn import integration is claimed.

## Version 0.1.0

Initial release: one original example, eight authoring fields, Markdown/JSON exports, deterministic advisory checks, five manual scenario probes, and the companion guide. No model inference or paid service is required.

Content and code were drafted with AI assistance and reviewed by the publishing assistant. No independent human product test or comparative performance study is claimed.
