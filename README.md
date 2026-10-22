---
title: CrushOn.AI Character Personality Workshop
emoji: 🎭
colorFrom: indigo
colorTo: pink
sdk: static
app_file: index.html
pinned: false
license: mit
---

# CrushOn.AI Character Personality Workshop

Turn character traits into observable choices. A small, browser-only workshop for AI roleplay authors: fill a character brief, inspect simple completeness checks, and export Markdown or JSON.

Maintained by the [CrushOn.AI](https://crushon.ai/) team. The templates are platform-neutral. This is a writing aid, not a chatbot or a measured benchmark of model quality.

## Use the brief in CrushOn.AI

CrushOn.AI combines character creation and hosted character chat. Prepare a brief here, then adapt it in the [character editor](https://crushon.ai/character/create): use Introduction as the reader-facing description, Personality for enduring behavior and motivation, and Greeting for the initial scene. The interface checked on September 5, 2026 explicitly said Introduction does not influence memory or prompts. Do not put all your character instructions only in that display field.

For an ongoing chat, review the scene worksheet's Markdown and paste a concise state correction into the conversation. The [recorded case study](docs/scene-state-case-study.md) shows both a corrected ownership error and a remaining invented detail. This is a manual workflow, not native import, automatic memory, or a performance guarantee. The same authoring principles can be adapted to other platforms.

## Try it

[Open the live Hugging Face workshop](https://huggingface.co/spaces/CrushonAI/character-personality-workshop) · [Read the Dev.to guide](https://dev.to/crushonai/how-to-create-an-ai-roleplay-character-with-a-distinct-personality-2lpg)

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

Checks flag missing fields, identical normal/stress behavior, and missing voice examples. They do **not** understand the character, detect all contradictions, score writing quality, or predict how any model will respond. The personality examples are authored illustrations. The separately labelled scene-state case study contains recorded model responses with limitations.

The JSON format is this workshop's own editable brief, not a Character Card V2, World Card, or guaranteed import format. Adapt the exported text to the destination platform's current fields. No specific CrushOn import integration is claimed.

## Personality comparison worksheet

The [comparison worksheet](comparison.html) records six fresh conversations across three authored conditions: traits, traits plus rules, and traits plus rules plus dialogue. Read the [copyable protocol](docs/personality-comparison-method.md) first. Export all 30 replies and manual evidence notes as JSON. Blank rows are explicitly untested; the tool does not generate, grade, or verify responses. [Five September baseline replies](docs/personality-observations-20260910.md) remain available as a historical record. The separate [October 13 completed batch](studies/iris-personality-20261013/README.md) now supplies six conversations and all 30 first replies, exact inputs, per-reply review, and a worked ledger example. It does not establish a B/C advantage or a platform ranking. Run `node comparison-tests.cjs` for the recording/export checks.

## Version 0.1.0

Initial release: one original example, eight authoring fields, Markdown/JSON exports, deterministic advisory checks, five manual scenario probes, and the companion guide. No model inference or paid service is required.

Content and code were drafted with AI assistance and reviewed by the publishing assistant. The October prompt comparison is a small product-affiliated experiment, not independent human product testing or a cross-platform performance ranking.
# Scene-state extension (v0.2.0)

Includes [a manual scene worksheet](scene.html), a [blank template](templates/scene-state.md), a [usage and compatibility guide](docs/scene-state-guide.md), and a [three-message case study](docs/scene-state-case-study.md). It compares two human-edited snapshots and exports a handoff; it does not infer facts, read chats, or add model memory. Run `node scene-tests.cjs` for its core checks.

## Choosing a character creation workflow

Read the [character creator comparison reference](docs/ai-character-creators-compared.md) for documented capabilities, evidence limits and a reusable selection checklist. Prepared by CrushOn.AI; not an independent product ranking.

## Recording AI roleplay evidence

The [October 21 Iris agency check](studies/iris-agency-20261021/README.md) preserves ten first replies from two private SFW conversations, exact inputs and controls, and separate judgments for speech, actions, feelings, decisions, and scene usefulness. It is a small product-affiliated development check, not a reliability benchmark or proof that a prompt revision is superior.

For a local pre-review check, use the [JavaScript roleplay log validator](tools/roleplay-log-validator/README.md). It flags missing turns, duplicate records, and mismatched input versions before reviewing replies. Its fixtures are synthetic software examples, not new model results, and it does not grade prose or authenticate captures.

Use the [AI Roleplay Evidence Ledger](docs/ai-roleplay-evidence-ledger.md), [copyable reproducibility card](templates/roleplay-test-reproducibility-card.txt), and [blank capture sidecar](templates/roleplay-run-capture.json) to keep exact inputs, complete replies, and review judgments separate. The blank files remain templates. For a completed example, use the [October 13 study](studies/iris-personality-20261013/README.md), its [30-reply transcript](studies/iris-personality-20261013/public-transcript.json), [review ledger](studies/iris-personality-20261013/review-ledger.csv), and [worked entry](studies/iris-personality-20261013/worked-example.md). These records do not change the workshop UI or export schema.

## Choosing a hosted or local roleplay setup

Use the [AI roleplay setup worksheet](tools/roleplay-setup-worksheet/README.md) to compare complete hosted and local configurations. It separates cash costs from optional time valuation, preserves unknown fees, and provides a reproducible requirements and restore-check record. The examples use invented budget inputs; this is not a product-price comparison or a model-performance benchmark.
