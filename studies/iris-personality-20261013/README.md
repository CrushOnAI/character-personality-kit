# CrushOn AI roleplay prompt test with 30 recorded replies

CrushOn AI's separate Personality, Greeting, Scenario, and Example Conversation fields let a creator keep the opening fixed while changing behavioral guidance. This small experiment uses that workflow to compare three versions of Iris Vale, an original adult SFW museum conservator. [Create a private test character](https://crushon.ai/character/create) and use the [official character guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide) to adapt the inputs to the current editor.

The October 13, 2026 batch is complete: **six fresh conversations, five prompts per conversation, 30 first-generated replies**. There were two conversations per condition. These are sequential conversations, not 30 independent experiments, a cross-platform benchmark, or a long-term memory test.

Prepared for the CrushOn AI brand account. AI agents operated the browser, captured visible replies, and assisted with review and writing. Review was product-affiliated and not blinded; it was not independent human assessment.

## Start with the evidence

| File | What it contains |
| --- | --- |
| [Conditions and protocol](conditions-and-protocol.md) | Copyable character fields, five prompts, settings, run order, deviations, and review definitions |
| [Complete public transcript](public-transcript.json) | All 30 prompts and replies, including failures, with capture times and the original condition inputs |
| [Review ledger](review-ledger.csv) | Per-reply judgments with supporting excerpts; primary and supplementary checks are distinguished |
| [Full editorial review](review.json) | Review criteria, reasons, post-hoc observations, and bounded findings |
| [Worked example](worked-example.md) | A complete A1 Q5 ledger entry showing why one reply can pass agency and fail grounding and format |

The [DEV article](https://dev.to/crushonai/crushon-ai-roleplay-prompts-tested-with-30-real-replies-1jl8) explains the experiment in reading order. The [Hugging Face workshop](https://huggingface.co/spaces/CrushonAI/character-personality-workshop) helps organize manual inputs and records; it does not generate, grade, or verify replies. These records do not change its export schema or promise one-click import.

## What happened

The five probes test an unsupported ownership claim, a mistake by the visitor, a damaging shortcut, unknown cabinet contents, and a final two-sentence continuation with a choice.

| Observed check | A traits only | B traits and rules | C traits rules and examples |
| --- | --- | --- | --- |
| Q2 responds without insulting the visitor | 2 of 2 | 2 of 2 | 2 of 2 |
| Q3 rejects prying and suggests an alternative | 2 of 2 | 2 of 2 | 2 of 2 |
| Q4 acknowledges unknown contents | 2 of 2 | 2 of 2 | 2 of 2 |
| Q5 does not assert unknown contents | 1 of 2 | 2 of 2 | 2 of 2 |
| Q5 uses exactly two sentences | 1 of 2 | 0 of 2 | 0 of 2 |
| Q5 offers a concrete choice, a post-hoc check | 2 of 2 | 1 of 2 | 2 of 2 |

Each cell concerns two relevant replies, one per conversation, not a reliable product success rate. An alternative to prying is a fictional response behavior, not validated conservation advice.

Three observations are useful when revising a character:

- **A protected unknown can become an invented answer later.** A1 Q4 acknowledged not knowing the contents but introduced a borescope. A1 Q5 then described metallic shapes and a journal on its screen. The user had not established those contents.
- **More instructions did not guarantee the requested format.** Only A2 Q5 followed the two-sentence request. That was the trait-only condition.
- **A false past-user claim does not establish its cause.** C2 Q4 attributed an earlier crown claim to the live visitor, but no test prompt made that claim. A crown appeared in C's examples and in the model's own C2 Q3 reply. This record cannot isolate direct example leakage from reinterpretation of prior model output.

## Reproduce the setup without copying the conclusion

1. Save the [exact A, B, and C inputs](conditions-and-protocol.md) in private test characters. Keep character sharing and definition visibility separate.
2. Confirm the current model and exposed settings. In the recorded interface, Scenario-based Experience was enabled before every first prompt so the scenario and examples could participate in the chat.
3. Start a fresh conversation for each run in A1, B1, C1, C2, B2, A2 order. Send the five probes in order, preserving the conversation history within each run.
4. Keep the first finished generation, including failures and any incomplete-looking ending. Record regeneration, Continue use, and changes rather than selecting favorable variants.
5. Record judgments separately. Use the [worked example](worked-example.md) to distinguish the transcript from interpretation, and retain every reply rather than only favorable excerpts.

The recorded model label was **Crushon Carina - Filtered - 8K**. Temperature and Content Diversity were 0.7; the maximum AI message length control displayed 225. Its implementation and compliance with a literal token cap were not independently verified. Availability and defaults may change, so report the current environment when reproducing this test.

## Limits and history

The batch uses one character, one model, near-transfer probes, and two conversations per condition. Several prompts explicitly request the desired behavior. Added conditions change both prompt content and length. Account tier, account-level custom instructions, hidden sampling state, and backend behavior were not independently verified.

An active-chat limit required separate private character copies after A1. This avoided deleting an existing conversation but introduced a possible character-object confound. All operational deviations remain in the transcript and protocol. Findings do not establish a winning condition, causal improvement, statistical significance, cross-model performance, or long-term recall.

The [September 10 protocol](../../docs/personality-comparison-method.md) and [five September baseline replies](../../docs/personality-observations-20260910.md) remain historical records. October's 30 replies are a separate completed batch, not relabeled September outputs. A proposed follow-up that separates example dialogue from live story facts has not been executed by this release.

## Public record and reuse

All participants and scenes are fictional adults and SFW. This package omits private character links, account identifiers, login information, browser captures, and private conversation URLs. Public timestamps are converted to **America/Los_Angeles**, specifically **PDT, UTC−7** for October 13, 2026. Minute precision is preserved; this is not a generation-speed measurement.

Use the repository license for its authored materials. Generated replies are supplied as an evidence record, not a warranty of originality, factual correctness, or rights beyond the applicable platform terms. Keep product affiliation and experimental limits attached when quoting the findings.

To apply the method, [build your own private CrushOn AI character](https://crushon.ai/character/create), choose one behavior your story needs, and inspect what its first replies actually do.
