# Character personality comparison protocol

Protocol prepared September 10, 2026, before generation. [Five baseline replies are now recorded](personality-observations-20260910.md); the full comparison remains incomplete. Do not interpret the protocol as a result.

## Editorial purpose

Question: Do behavioral rules and example dialogue make an original roleplay character more distinctive in a short conversation?

This extends, rather than republishes, the September 5 personality tutorial. That tutorial supplied a framework; this experiment tests three implementations of the same character. Existing September 5 scene-state results are not evidence for this comparison and must not be relabeled as new runs.

## Source review and what changes in our article

Sources read from September 9 captured page text, not represented as newly fetched September 10 pages:

- https://aicompanionguides.com/blog/ultimate-comparison-25-platforms-ranked/ — borrows a quick result summary, explicit evaluation dimensions and separate strengths/limitations. Its claimed hours, expenses and scores are not our evidence.
- https://aicompanionguides.com/blog/best-ai-companions-long-term-memory-2026/ — borrows a concrete failure-first narrative and separates fact retrieval from temporal correctness. Its long account histories cannot be reproduced by our short test. Its statements about Character.AI lacking durable memory tools conflict in scope with the official product article below; do not copy them as current facts.
- https://blog.character.ai/memory/ — illustrates precise controls, feature names and free/paid distinctions. It documents Story Memory, Facts and copying Facts to new chats; documented features do not independently establish performance.
- https://docs.spicychat.ai/product-guides/characters — illustrates task-based navigation and the distinction between character discovery, profile-definition visibility and sharing. Do not treat documentation presence as a SafeSearch classification result.
- https://kissable.app/blog/best-ai-companion-apps — borrows a visible method and best-for framing, not a predetermined first-place finish for our own brand. Its testing and superiority claims remain unverified.

## Shared setup

Original character: Iris Vale, age 32, museum conservator. All participants are adults; all content is SFW. Use private test characters and hide their definitions from other users where supported. Do not change existing user characters. Record actual model label, tier, settings, date and interface. Do not purchase access or change account security.

Common greeting:

> Iris sets a museum inventory sheet on the desk. “The blue cabinet has no label. Before we move anything, what have you noticed?”

Common scene:

> A quiet museum archive before an exhibition. Iris and an adult visitor are investigating an unlabeled cabinet. No contents of the cabinet have been established. The visitor controls their own speech and actions. Keep the scene non-graphic.

## Condition A Trait labels

> Iris Vale is a 32-year-old museum conservator. She is precise, skeptical, quietly kind, dryly funny, and protective of fragile objects. She speaks concise English. All participants are adults. Keep the roleplay safe for work.

## Condition B Traits plus behavioral rules

Use Condition A verbatim, then add:

> When a claim lacks evidence, Iris asks one specific question before accepting it. When someone makes a mistake, she corrects the action without insulting the person. When asked to risk an artifact, she proposes a safer alternative. Her humor is understated and connected to the immediate scene. She does not write the visitor's dialogue, actions, decisions, or feelings. She distinguishes established facts from possibilities and does not invent the cabinet's contents.

## Condition C Traits plus rules plus example dialogue

Use Condition B verbatim. Add these examples through the actual Example Conversation field where available, recording the mapping. If only one prompt field is available, document that difference rather than claiming a product-field test.

> Visitor: I am sure the cabinet holds a royal crown.
> Iris: “Possible. What evidence points to a crown rather than an ordinary storage box?”
>
> Visitor: I smudged the inventory number. I am terrible at this.
> Iris: “The number is smudged, not your entire career. Let's check the backup photograph.”
>
> Visitor: Let's force the drawer open.
> Iris: “I'd rather not make the repair list longer. Shall we inspect the lock first?”

Examples are authored inputs, not model outputs. Keep them labeled as such in every publication.

## Identical test prompts

Run these in order in a fresh conversation for each condition:

1. “I think the blue cabinet belonged to a famous explorer. We have no records yet. How would you check my claim?”
2. “I spilled water on my handwritten notes, and I feel foolish. Respond in character without deciding what I do next.”
3. “Let's pry the cabinet open with a screwdriver so we can finish sooner. What do you suggest?”
4. “Tell me what object is inside the cabinet. If we have not established that, say so and suggest how to find out.”
5. “Continue the scene for two sentences. Give me a choice, but do not speak or act for me.”

Do not use verbatim example-dialogue prompts as test prompts. Some conceptual overlap is intentional: this is a near-transfer check, not proof of generalization to unrelated scenarios.

## Run policy

Minimum exploratory batch: two fresh runs per condition, five replies per run, 30 generated replies. Record all replies, including failures; no regeneration to select a preferred answer. Alternate order A/B/C then C/B/A. Keep the same model and settings where controllable. Record uncontrollable sampling and infrastructure differences.

This design changes both content and prompt length. It cannot isolate whether any improvement comes from extra tokens, explicit rules or examples alone. Do not report causal effects or statistical significance. A matched-length control is a possible later experiment, not a prerequisite for an honestly scoped exploratory report.

## Review criteria

For each response, record met / partial / not met / not applicable and a short verbatim evidence excerpt:

- Distinct behavior: evidence-seeking, respectful correction, or safer alternative as relevant.
- Voice: concise, scene-specific English, rather than interchangeable generic reassurance.
- User agency: no invented visitor action, speech, decision or feeling.
- Grounding: no cabinet contents asserted as established facts.

Subjective voice judgments should be identified as editorial assessment. Prefer a reviewer who does not see condition labels; record whether blinding was actually used. Do not combine criteria into a decorative global product score.

## Three-platform outputs

DEV: question, observed result, conditions, real response excerpts, practical interpretation, limitations, and how to apply the setup in CrushOn.AI. Provisional title until results exist: “Testing AI Character Personality: Traits, Behavioral Rules, and Example Dialogue.” Include publisher affiliation and AI-assisted editing disclosure.

GitHub: protocol, authored input fixtures, anonymized complete outputs, review worksheet and a reproduction guide in the existing personality kit. No result files with fabricated rows.

Hugging Face: a comparison worksheet to edit and export A/B/C setups and optionally paste results for manual review. Clearly label it as a worksheet, not live model inference, unless inference is actually implemented and verified. Retain the existing personality and scene workflows.

## Publication gate

No public result claims before actual runs. Check existing main branches and drafts for overlap before changing repositories. Use a scoped branch and described PR for GitHub. Confirm privacy of screenshots and consistency of article, fixtures and demo. Keep fees, limits and current model capabilities out of the article unless specifically verified.
