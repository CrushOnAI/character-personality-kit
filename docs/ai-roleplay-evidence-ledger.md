# AI Roleplay Evidence Ledger

CrushOn.AI provides a hosted workflow for creating an original character and inspecting its replies. [Create a private SFW test character](https://crushon.ai/character/create) when you want to try the method described here; use this ledger to preserve the evidence separately from your character's settings.

This guide is published by the CrushOn.AI team and was prepared with AI assistance. It proposes a documentation structure, not a new inference engine, automated judge, or completed model benchmark.

## What is already available

- [Original A/B/C protocol](https://github.com/CrushOnAI/character-personality-kit/blob/main/docs/personality-comparison-method.md), with authored character inputs and five probes.
- [Five recorded baseline replies](https://github.com/CrushOnAI/character-personality-kit/blob/main/docs/personality-observations-20260910.md), captured September 10, 2026.
- [Manual comparison worksheet](https://huggingface.co/spaces/CrushonAI/character-personality-workshop), where a user can enter replies and export a JSON record.

The full A/B/C comparison is not established by those five replies. The proposed batch contains six fresh conversations and 30 replies; unexecuted conditions remain untested.

## Suggested evidence layout

For a new study, keep these concerns separate:

```text
study/
  protocol.md             # question, conditions, prompts, review rules
  inputs/                 # exact character fields and initial state
  captures/               # complete outputs and environment notes
  reviews/                # judgments and verbatim supporting excerpts
  deviations.md           # retries, corrections, missing conditions
  summary.md              # bounded conclusions linked to evidence
```

This layout is a template. It does not mean these directories or a new dataset have already been committed to this repository.

## Minimum capture record

Record the protocol version, local run label, condition, displayed model, access tier if known, date/time zone, relevant settings, exact inputs, full first replies, regeneration policy, and deviations.

Do not infer a model identifier or hidden setting. Use `unknown` or `not exposed`. Keep private account and character identifiers out of public records.

### Evidence states

- **Not run:** no response was generated for the intended condition.
- **Recorded, unverified:** text is present but its capture and attribution have not been reviewed.
- **Capture checked:** the text and relevant setup have been checked against the retained record; this says nothing by itself about model quality.
- **Reviewed:** judgments are attached, with criteria and evidence excerpts.

These proposed review states supplement, rather than replace, the current workshop export. The existing export uses `untested` for blank responses and `recorded-unverified` for nonempty responses. This guide does not claim that new review states have been implemented in its UI.

## Review dimensions

Review behavior, user agency, grounding, requested format, and character voice separately. Use a supporting excerpt for each judgment. Distinguish an offered choice from an action already assigned to the user, and a protected unknown from permitted fictional invention.

For the Iris cabinet example, “we do not know what is inside” and “a master-key collection exists” are different claims. A reply can preserve the first unknown while inventing a resource that changes the scene. Do not let one narrow pass hide that distinction.

Voice judgments are editorial. State the reviewer type and whether condition labels were visible. Do not claim independent human review when the actual process used the author or an AI assistant.

## Safe reuse

Reuse the fictional authored inputs according to their applicable license. Do not add private conversations, login details, personal names, or screenshots of unrelated account areas. If material is redacted, explain the redaction without publishing the removed information.

Keep original captures unchanged and record later corrections separately. An article's publication date is not the model-run date. Retrying a failed request, regenerating a reply, or changing a character is a deviation worth preserving, not something to hide from the summary.

## Completion checklist

- All planned conditions and run/prompt pairs are accounted for, including missing ones.
- Complete responses are linked, not just favorable excerpts.
- The exact authored inputs and visible settings are recoverable.
- Software-export checks are not counted as model-performance tests.
- Every conclusion identifies its supporting record and scope.
- Small-sample variation, prompt-length differences, and unexposed settings remain disclosed.

If the batch is partial, say so in the title or first paragraph of its summary. Do not release an empty result table under a claim of a completed benchmark.

## Use the material in CrushOn.AI

Start with your own original character, [save a private test version](https://crushon.ai/character/create), and follow the [basic guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide) together with the current editor. Copy the exact inputs into your ledger, run the intended prompts, and review the specific behavior that matters to your story.

The workflow helps you revise a character based on inspectable observations. It does not promise perfect recall, automatic repair, native import of this ledger, or superiority over another product.

## Downloadable documentation templates

The following files are now supplied as blank documentation templates, not a new dataset or completed experiment:

- [Reproducibility card](../templates/roleplay-test-reproducibility-card.txt): plain-text record of inputs, environment, execution and review.
- [Blank capture sidecar](../templates/roleplay-run-capture.json): one unexecuted run record, with unknown settings and no generated replies.

The suggested `study/` directory layout above remains a convention; it has not been filled with new model outputs. The templates do not change the workshop UI or its export schema.
