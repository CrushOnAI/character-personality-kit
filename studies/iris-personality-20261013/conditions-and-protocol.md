# CrushOn AI roleplay test conditions and protocol

This is the recorded setup for six five-turn conversations on October 13, 2026, from approximately 06:07 to 07:03 PDT, America/Los_Angeles. It implements the [September protocol](../../docs/personality-comparison-method.md) with the deviations below. The [complete transcript](public-transcript.json) preserves every sampled reply.

Prepared for CrushOn AI with AI-assisted collection and editorial review. Use [CrushOn AI's character editor](https://crushon.ai/character/create) to create a private original SFW character; the examples below are authored inputs, not generated responses.

## Shared fields

### Greeting

```text
Iris sets a museum inventory sheet on the desk. “The blue cabinet has no label. Before we move anything, what have you noticed?”
```

### Scenario

```text
A quiet museum archive before an exhibition. Iris and an adult visitor are investigating an unlabeled cabinet. No contents of the cabinet have been established. The visitor controls their own speech and actions. Keep the scene non-graphic.
```

Reply language: English. Character and definition visibility were private. Introduction is a reader-facing description, not a substitute for the behavioral fields.

## Condition A traits only

Personality:

```text
Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.
```

Example Conversation:

Leave empty.

## Condition B traits plus behavioral rules

Personality:

```text
Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.

When a claim lacks evidence, Iris asks one specific question before accepting it. When someone makes a mistake, she corrects the action without insulting the person. When asked to risk an artifact, she proposes a safer alternative. Her humor is understated and connected to the immediate scene. She does not write the visitor's dialogue, actions, decisions, or feelings. She distinguishes established facts from possibilities and does not invent the cabinet's contents.
```

Example Conversation:

Leave empty.

## Condition C traits plus rules plus example dialogue

Personality:

```text
Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.

When a claim lacks evidence, Iris asks one specific question before accepting it. When someone makes a mistake, she corrects the action without insulting the person. When asked to risk an artifact, she proposes a safer alternative. Her humor is understated and connected to the immediate scene. She does not write the visitor's dialogue, actions, decisions, or feelings. She distinguishes established facts from possibilities and does not invent the cabinet's contents.
```

Example Conversation:

Map Visitor to the User field and Iris to the Character field.

```text
Visitor: I am sure the cabinet holds a royal crown.
Iris: “Possible. What evidence points to a crown rather than an ordinary storage box?”

Visitor: I smudged the inventory number. I am terrible at this.
Iris: “The number is smudged, not your entire career. Let's check the backup photograph.”

Visitor: Let's force the drawer open.
Iris: “I'd rather not make the repair list longer. Shall we inspect the lock first?”

```

## Five test prompts

1. I think the blue cabinet belonged to a famous explorer. We have no records yet. How would you check my claim?
2. I spilled water on my handwritten notes, and I feel foolish. Respond in character without deciding what I do next.
3. Let's pry the cabinet open with a screwdriver so we can finish sooner. What do you suggest?
4. Tell me what object is inside the cabinet. If we have not established that, say so and suggest how to find out.
5. Continue the scene for two sentences. Give me a choice, but do not speak or act for me.

These probes resemble, but do not duplicate, the examples. Several request the desired behavior explicitly. This is near-transfer within one scene, not spontaneous behavior across genres.

## Execution and settings

Run order: A1, B1, C1, C2, B2, A2. Each run started with a greeting-only history and used five sequential prompts. Preserve the first finished generation; no regeneration or Continue click was used. Replies within a conversation share history.

| Control | Recorded value |
| --- | --- |
| Displayed model | Crushon Carina - Filtered - 8K; button Carina 8K |
| Temperature and Content Diversity | 0.7 and 0.7 |
| Maximum AI message length | 225 as displayed; implementation and literal token cap not independently verified |
| Text Streaming | On |
| Scenario-based Experience | On before every first test prompt |
| Profile, world, and scene cards | None attached |
| Summarized content and auto-summary | None shown; auto-summary off |
| Subscription tier and custom instructions | Not independently verified |

The inspected interface described Scenario-based Experience as bringing scenario and example conversations into chat context. Record the current controls when repeating the workflow rather than assuming these historical values remain defaults.

## Operational deviations

- After A1, a fresh chat on the same character was blocked by Chat limit exceeded. The operator preserved A1, did not buy or upgrade a plan and did not delete the history.
- Each remaining run used a separate newly created private character copy with the same original character name and specified condition inputs. The operator checked saved inputs, settings and a greeting-only conversation before sampling. Different character objects are a possible uncontrolled confound.
- The first character's Personality was temporarily edited to B after A1 sampling when the blocked B1 attempt was prepared. A1 is recorded from its A input snapshot before sampling; no B1 model output came from that blocked attempt.
- Scenario-based Experience was initially off and switched on before A1's first test prompt. It was observed on in all six sampled runs.
- Plan tier and custom instructions were not independently verified. UI time precision is minutes.
- Before B2 prompt 1, the browser tool reported that Chrome had changed. The operator observed the UI again before sending; the final history contained one prompt 1 and no generated reply was retried.

## Review rules

The [full review](review.json) and [CSV ledger](review-ledger.csv) separate evidence excerpts from judgments. Labels are met, partial, not met, and not applicable. Reviewers could see the condition labels. There is no global product score.

- Behavior is scored for Q1 evidence seeking, Q2 respectful response to a mistake, and Q3 rejecting the damaging shortcut plus proposing an apparently less forceful alternative. Q4 and Q5 are not applicable to this behavior map; their grounding, agency and format are scored separately.
- Behavior met does not certify conservation expertise or that an alternative is physically safe. Suggestions about lubrication, tilting/vibrating furniture, scans and instruments have not been validated by a conservator and must not be presented as artifact-care instructions.
- Voice is an editorial judgment about concise, scene-specific expression. Met does not require a joke in every reply. Partial indicates relevant language weakened by extended stock physical staging, repetitive professional exposition, or weak realization of the intended voice; no post-hoc numeric word-count threshold is imposed.
- Grounding retains the protocol's narrow criterion: no unknown cabinet contents asserted as established fact. Invented tools, the ownership hypothesis and professional factual claims are not silently folded into that metric.
- Agency partial is used for an implied or presupposed visitor action; not met would mean a clear completed visitor action, speech, decision or new feeling authored by the model. Giving options or having Iris offer an object is not itself an agency violation.
- For supplementary invented resources, met means no consequential unestablished resource asserted as available; partial means an ambiguous availability/capability presupposition; not met means a consequential convenient resource is asserted as available or used. Ordinary scene props are noted but not automatically treated as consequential resources. Previously invented resources are labeled carryover, not independent new inventions.
- Sentence counts use normal grammatical sentence endings, including narration and dialogue; paragraph count is not sentence count. Q5 is the only exact-two-sentence probe.
- The observed Continue buttons and unverified length unit may affect verbosity/output completeness. No changes are made to the capture record by this review.
- After observing C2, an explicitly post-hoc supplementary check records example-to-history misattribution. All 30 replies were read for this check. A matching example detail alone is not proof of a processing mechanism; conditional mention is distinguished from falsely attributing a past statement to the live visitor. This does not replace or broaden the narrow contents-grounding criterion. A false visitor-speech attribution can independently violate the original agency criterion.
- After observing B2 Q5, an explicitly post-hoc choice-offered check was added to all six Q5 replies. It evaluates whether the requested concrete choice is actually offered, independently of agency: waiting for a user action can preserve agency while failing to offer a choice.

The direct-evidence-question distinction, concrete-choice check, and example/history false-attribution inspection are explicitly post-hoc. The CSV includes those observed checks under supplementary_post_hoc; absence of a false-attribution row is not an independently validated pass.

## Interpretation limits

One character, one model, two conversations per condition, related turns, separate character objects, unverified hidden settings, and prompt-length differences prevent causal superiority or statistical conclusions. Broad evidence-seeking is not the same as asking exactly one specific question. Fictional conservation alternatives are not validated advice for real artifacts.

C2 Q4 falsely attributed a crown claim to the live visitor. The examples contain that claim, while C2 Q3 also mentions a crown conditionally. These data do not identify which source directly caused the error. No corrective follow-up has been run as part of this release.

All public times use America/Los_Angeles, PDT for this experiment, at minute precision. Private character URLs, account identifiers, and browser captures are excluded. The original local records are not overwritten.
