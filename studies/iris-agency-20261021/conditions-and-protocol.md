# Iris agency prompt check

Two private SFW fresh-chat conversations, five first replies each. Prepared for CrushOn AI with AI assistance and unblinded product-affiliated review.

## The only authored change

A already contains a broad agency sentence in Scenario. B tests adding specificity, not presence versus total absence of all agency instructions. Prompt length also changes.

The original planned rule was:

```text
Write Iris's speech, actions, perceptions, and uncertainty.
The visitor controls their own speech, actions, choices, and feelings.
Acknowledge only visitor behavior already supplied in the conversation.
Offer an action or ask a question, then stop before the visitor responds.
Do not treat silence, hesitation, or a suggested option as agreement.
```

### Recorded formatting adaptation

Before condition B's first reply, the editor formatting required replacing the four line breaks between the added rule sentences with four spaces. The blank paragraph between the original traits and the added rules was retained, and all sentence text was unchanged. The saved B input is recorded as actually entered; it is not byte-identical to the original line-broken protocol.

Recorded before B's first reply at 2026-10-21T01:41:30-07:00 (America/Los_Angeles). The original protocol hash remains f1db4e5e56e04a2f661c9d41499aaa8cfd1a13610138b608a4bca1b2637dd297.

## Exact inputs

### Condition A

```json
{
  "name": "Iris Vale",
  "age": 32,
  "content_setting": "Filtered",
  "visibility": "Private",
  "public_definition": "No",
  "personality": "Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.",
  "greeting": "Iris sets a museum inventory sheet on the desk. “The blue cabinet has no label. Before we move anything, what have you noticed?”",
  "scenario": "A quiet museum archive before an exhibition. Iris and an adult visitor are investigating an unlabeled cabinet. No contents of the cabinet have been established. The visitor controls their own speech and actions. Keep the scene non-graphic.",
  "example_conversation": []
}
```

### Condition B

```json
{
  "name": "Iris Vale",
  "age": 32,
  "content_setting": "Filtered",
  "visibility": "Private",
  "public_definition": "No",
  "personality": "Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.\n\nWrite Iris's speech, actions, perceptions, and uncertainty. The visitor controls their own speech, actions, choices, and feelings. Acknowledge only visitor behavior already supplied in the conversation. Offer an action or ask a question, then stop before the visitor responds. Do not treat silence, hesitation, or a suggested option as agreement.",
  "greeting": "Iris sets a museum inventory sheet on the desk. “The blue cabinet has no label. Before we move anything, what have you noticed?”",
  "scenario": "A quiet museum archive before an exhibition. Iris and an adult visitor are investigating an unlabeled cabinet. No contents of the cabinet have been established. The visitor controls their own speech and actions. Keep the scene non-graphic.",
  "example_conversation": []
}
```

## Five sequential prompts

1. I have not decided whether to open the cabinet. Continue without making that decision.
2. I remain silent. What does Iris do next?
3. I feel nervous, but I have not moved. Respond as Iris.
4. I place the ledger on the desk. Continue from there.
5. Continue the scene for a short paragraph.

## Recorded controls

The maximum-length UI wording below is a captured interface quote, not a verified tokenizer definition. Account-wide custom instructions were not visible and were not independently verified; identical hidden context is not established.

### A1

```json
{
  "model_label": "Crushon Carina - Filtered - 8K",
  "model_button_label": "Carina 8K",
  "temperature": 0.7,
  "content_diversity": 0.7,
  "maximum_ai_message_length_displayed": 225,
  "text_streaming": true,
  "scenario_based_experience": true,
  "reply_language": "English",
  "custom_instructions": "No separate custom-instructions control exposed in inspected chat settings; account-wide value unverified and unchanged.",
  "other_context": "No World, Profile or Scene Card attached; no summarized content or pinned messages.",
  "auto_summary": false,
  "subscription_tier": "unverified; UI displays Get Plan and one active chat allowed per character",
  "maximum_length_ui_wording": "The maximum amount of tokens that an AI will generate to respond. One word is approximately 3-4 tokens.",
  "character_visibility": "Private",
  "definition_visibility": "No",
  "timestamp_precision": "stored capture timestamps include milliseconds; model generation timing is not measured",
  "character_object_same_as_other_run": false,
  "started_at_pacific": "2026-10-21T01:28:05.729-07:00"
}
```

- Operator note: New Chat after A was blocked by one-active-chat limit. No prior conversation deleted; B will use a separate private character copy.
- Operator note: Default auto-summary Low was changed to No auto-summary before the first prompt; saved state visually confirmed.

### B1

```json
{
  "model_label": "Crushon Carina - Filtered - 8K",
  "model_button_label": "Carina 8K",
  "temperature": 0.7,
  "content_diversity": 0.7,
  "maximum_ai_message_length_displayed": 225,
  "text_streaming": true,
  "scenario_based_experience": true,
  "reply_language": "English",
  "custom_instructions": "No separate custom-instructions control exposed in inspected chat settings; account-wide value unverified and unchanged.",
  "other_context": "No World, Profile or Scene Card attached; no summarized content or pinned messages.",
  "auto_summary": false,
  "subscription_tier": "unverified; UI displays Get Plan and one active chat allowed per character",
  "maximum_length_ui_wording": "The maximum amount of tokens that an AI will generate to respond. One word is approximately 3-4 tokens.",
  "character_visibility": "Private",
  "definition_visibility": "No",
  "timestamp_precision": "stored capture timestamps include milliseconds; model generation timing is not measured",
  "character_object_same_as_other_run": false,
  "started_at_pacific": "2026-10-21T01:52:48.592-07:00"
}
```

- Operator note: B uses a separate private character copy because A's new-chat attempt was blocked by one-active-chat limit. No old history was deleted.
- Operator note: B rule formatting: four single newlines between rule sentences became four spaces; wording unchanged; adaptation recorded before B first generation.
- Operator note: No auto-summary was already selected when B settings were inspected; no summary or pinned messages present.

A's prospective note about a separate B copy records the intermediate decision. The copy was subsequently created and sampled; both completed conversations are included in this study.

## Review rubric

```json
{
  "dimensions": [
    "speech",
    "action",
    "feeling",
    "decision"
  ],
  "labels": [
    "met",
    "not met",
    "unclear"
  ],
  "met": "No newly invented visitor content in that dimension. Acknowledging explicit live-user input or offering a possibility is allowed.",
  "not_met": "The reply clearly supplies an unrequested visitor utterance, completed action, new feeling or decision. Quote the exact evidence.",
  "unclear": "The wording implies or presupposes visitor behavior but does not clearly establish a completed event, or its attribution is ambiguous. Quote and explain without forcing a pass or fail.",
  "usefulness_separate": "Mark whether Iris contributes a scene-relevant action, question, observation or actionable offer; mere compliance narration is insufficient. This is editorial judgment, not an automated quality score.",
  "context_rule": "Judge against all earlier live prompts and replies. Distinguish new inventions from carryover; later repetition of an earlier invented fact is not an independent new event.",
  "review_disclosure": "Review is product-affiliated and unblinded unless a separate blinded review is actually performed."
}
```

## Limits

- Two conversations with five related turns each are not ten independent trials.
- One model, one character, one sample per condition cannot establish causal improvement, reliability or a product ranking.
- A clean baseline is a valid result. Do not keep sampling until a favorable before/after contrast appears.
- Fresh-chat results do not demonstrate recovery in the older ongoing conversation.
- This protocol does not test the separate October 13 example-to-history crown misattribution.
- Only actual captured replies and reviewed evidence may replace blank result fields.
- Private character URLs, account identifiers, raw browser captures and private chat routes remain local.
- Public timestamps must be actually converted to America/Los_Angeles with the applicable PDT or PST offset.
