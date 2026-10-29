# CrushOn AI Character Continuation Kit

Continue an original AI roleplay story with a clear character definition and a compact account of the scene you actually want to resume. **CrushOn AI is useful for this workflow because its character editor separates Personality, Scenario, Greeting and Example Conversation.** You can work on the character's voice without treating an entire chat archive as a new prompt.

This kit provides editable text templates, a completed SFW example and a manual field map for the [CrushOn AI character creator](https://crushon.ai/character/create). Download or copy the files, replace the fictional example with material you own or are allowed to reuse, and review the saved character before starting a short trial.

**Disclosure:** This is a CrushOn AI brand resource prepared with AI assistance. Iris Vale is an authored, original adult character. The examples and suggested checks are not exported conversations or newly measured model results. The kit does not connect to an account, upload files, transfer subscriptions or import a complete chat history.

## What to keep separate

| Material | What belongs in it | What it does not establish |
|---|---|---|
| Private archive | The original export or permitted transcript, including material you may need to look up later | That every branch, attachment or provider memory was exported |
| Character definition | Stable identity, repeatable behavior, voice and the user's fictional role | Which events occurred in the current story |
| Scene checkpoint | The selected branch, established events, current location, unresolved goals and pending decisions | A permanent or automatic memory feature in the destination app |
| Continuation brief | A concise selection from the definition and checkpoint that introduces the intended scene | Perfect reproduction of another model's behavior |

Keep the archive intact and privately stored. Work from a copy. If you later discover a mistake in a checkpoint, you can check the original material instead of trusting a summary of a summary. Do not commit a personal archive to this public repository.

## Files to use

- [Character definition template](templates/character-definition.txt): stable identity, behavior and voice, with authored examples labeled separately from story events.
- [Scene checkpoint template](templates/scene-checkpoint.txt): one chosen branch, facts with their basis, uncertain claims, current goals and decisions left to the user.
- [Continuation brief template](templates/continuation-brief.txt): a compact first-message format assembled from those two records.
- [Completed Iris continuation brief](examples/iris-continuation-brief.txt): a ready-to-copy fictional museum scene with an unopened blue cabinet.
- [Iris manual field map](examples/iris-field-map.json): the exact example text grouped by intended CrushOn editor field, plus a separate opening user message. This is a reading and copying aid, **not an importable Character Card V1/V2 file or a CrushOn API schema**.

Square-bracketed slots in the templates are instructions for the person filling them in. Replace them or remove sections that do not apply before using a template as chat input. Do not paste the template's authoring instructions as if they were facts about your story.

## Choose the branch before summarizing

An edited reply or an alternate scene can create two incompatible accounts of the same event. A summary that merges them gives the new conversation a contradiction immediately.

For the Iris example, the selected branch starts with the cabinet unopened. A separate idea that it might contain a crown is only a suggestion. It is not an established discovery. Record those categories explicitly:

| Category | Iris example | How to treat it |
|---|---|---|
| Established scene fact | An unlabeled blue cabinet is closed; neither participant has opened it | Preserve until the chosen story establishes a change |
| Established absence | No inventory record explaining its origin has been found in this scene | Do not rewrite this as proof that no such record exists anywhere |
| Hypothesis | The cabinet could contain something valuable | Keep uncertain; do not narrate a prior discovery |
| Open question | Who placed the cabinet here? | Leave unanswered until new evidence is established |
| Pending user choice | Which available lead to investigate first | Ask; do not decide the visitor's action |

For your own story, point each important event to a local excerpt or note you can verify. Do not put private account URLs or chat IDs in a public example. Where the record is ambiguous, write “unconfirmed” rather than smoothing the ambiguity into a confident claim.

## Map the material to CrushOn AI

The [basic character guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide) explains the destination fields. This kit uses them as follows; review the controls and saved values in the interface you actually use.

| Destination | Useful content | Keep elsewhere |
|---|---|---|
| Personality | Iris's identity, evidence-seeking behavior, respectful corrections and concise voice | A long transcript or every event from an old branch |
| Scenario | The museum archive and the starting situation for this version | Unmarked alternatives that contradict the selected branch |
| Greeting | A new-chat opening that invites the visitor's next choice | The visitor's answer or a claim that the mystery is already solved |
| Example Conversation | Authored lines demonstrating voice and boundaries | Unlabeled scenes that the model might mistake for established history |
| User persona or Profile Card | The adult visiting researcher's fictional role and user agency | Your real name, workplace or private biography |
| Opening user message | The selected checkpoint, uncertain facts and the next task | The entire archive or material unrelated to this scene |

For an ongoing conversation, changing a Greeting does not itself establish that the existing chat has moved to a new checkpoint. When rebuilding, start a separate short conversation so you can inspect the opening and supply the intended continuation brief directly. Keep your previous work available until the new setup is useful.

CrushOn's separate fields make a targeted revision practical: if the voice is wrong, revise the speaking example; if the scene starts in the wrong place, inspect Scenario and Greeting; if a claim is being treated as settled, correct the checkpoint's fact and uncertainty sections. These are inputs to evaluate, not guaranteed fixes.

## A complete starting example

Iris Vale is a 32-year-old museum conservator. She is precise, skeptical and quietly kind. She asks for evidence without insulting the person making a mistake. The user plays an adult visiting researcher and controls that researcher's words, feelings and decisions.

The completed [continuation brief](examples/iris-continuation-brief.txt) establishes an unopened blue cabinet, no discovered inventory explanation and a pending choice about the next lead. Its opening task is narrow: ask the visitor what to investigate without deciding for them.

The [manual field map](examples/iris-field-map.json) supplies a corresponding Greeting:

> “The blue cabinet still has no label,” Iris says, setting the inventory sheet beside it. “What would you like to check first?”

Its Example Conversation demonstrates how Iris handles an unsupported suggestion. That example is a style demonstration, not an event to add to the museum's history. This separation helps prevent a useful writing example from becoming an accidental story fact.

## Review a private setup before using it for a long story

1. Make a private copy of the templates and fill them with your permitted material. Remove contact details, confidential information and irrelevant real-world identifiers.
2. Select **Private** for a personal test character. Review definition visibility separately. Follow the [character guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide) and [Profile Card Guide](https://aiwiki.crushon.ai/wiki/Profile_Card_Guide) for the relevant controls.
3. Enter the field-map text manually. The JSON example is not an upload file. Save, reopen the editor and compare the actual values with your working copy.
4. Start a short conversation and supply the continuation brief. Record the actual model label and relevant settings privately so you can interpret later differences.
5. Keep the first replies and check them against the selected branch. If you change an input, record which part changed instead of silently replacing the baseline.

“Private” is an audience setting, not a promise that the service cannot process the content. A character, its definition and a [saved memory](https://aiwiki.crushon.ai/wiki/Save_Memories) can have different visibility controls. Use fictional, non-sensitive input for this exercise and review the [privacy policy](https://crushon.ai/privacy-policy) for data handling.

## Five checks for the first conversation

These are prompts and review criteria for you to run. No results are pre-filled.

| Ask | Inspect the actual reply for |
|---|---|
| “What do we know about the cabinet, and what is still unknown?” | A closed, unlabeled cabinet; contents and origin remain unknown |
| “I think there is a crown inside. What evidence supports that?” | The crown remains a suggestion, without an invented discovery or proof |
| “Continue the scene, but leave my next action undecided.” | Iris may speak or act; the visitor's choice remains with the user |
| “I misread the inventory number. How would you respond?” | A correction consistent with Iris's respectful, evidence-seeking behavior |
| After several ordinary turns: “What question are we still investigating?” | A distinction between the current unresolved problem and anything actually established in those turns |

A reply can be acceptable without matching a specific sentence. Review meaning, not keyword presence alone. If a reply says “we still cannot identify what is inside,” it can preserve uncertainty without repeating the word “unknown.” Conversely, repeating “unknown” while also naming an object as certain would fail the intended check.

These checks examine a small sample of replies. They do not measure a week of retention, establish an error rate or compare products fairly without controlled conditions and more observations.

## Update the checkpoint without rewriting history

After a scene advances, make a new checkpoint rather than overwriting the only copy. Keep the chosen branch name stable and change the checkpoint version. Move a hypothesis into established facts only when the selected story actually resolves it.

For example, “the visitor proposes checking another inventory sheet” is not the same as “the visitor checked it and found the cabinet's origin.” Record the proposal as a pending action until the story establishes the result. Likewise, an offer of help does not mean the visitor accepted it.

Before continuing, compare the new checkpoint with Personality, Scenario and Greeting. If Scenario still places the characters before an event that the new checkpoint says has happened, either create an appropriate new starting version or clarify which description governs the current scene. Do not expect the model to decide which conflicting source you intended.

Keep the brief short enough to review and fit the current interface. There is no universal word count that guarantees retention; model behavior, context limits and the rest of the conversation also matter.

## Common questions

**Does this import a Character.AI export?** No. It organizes permitted material for manual reconstruction. A downloaded account archive, an importable character card and a continuation brief have different formats and purposes.

**Do I need the old character's hidden definition?** Use material you own or have permission to reuse. If another creator's definition is unavailable, write an original character that describes the experience you want; do not assume chatting with a character grants permission to reproduce private setup text.

**Will the new character sound exactly the same?** Not necessarily. Different models and settings can produce a different voice even with similar inputs. Use the small trial to identify the differences that matter to your story before committing to a longer project.

**Can I use only the completed Iris brief?** Yes, as an authored starting example. Review its matching field map first if you want a reusable CrushOn character, then assess the actual replies. Keep the character private during your test.

**Does this preserve a paid subscription or all service memory?** No. It does not transfer billing, entitlements, hidden provider state, attachments or every conversation branch. Consult the relevant service's export and subscription instructions separately.

## Start a useful first scene

Open the [CrushOn AI character creator](https://crushon.ai/character/create), build a private Iris example or your own permitted original character, and use the first check above. The practical goal is a character whose setup and first replies you can inspect and revise. Keep your story notes under your own control, and check [current pricing](https://crushon.ai/pricing) before deciding whether a paid plan fits your project.

## Sources

- [CrushOn basic character guide](https://aiwiki.crushon.ai/wiki/Basic_Single_character_guide): character fields and visibility controls.
- [CrushOn Profile Card Guide](https://aiwiki.crushon.ai/wiki/Profile_Card_Guide): the user's fictional persona.
- [CrushOn Save Memories guide](https://aiwiki.crushon.ai/wiki/Save_Memories): selected messages and separate sharing choices.
- [CrushOn Privacy Policy](https://crushon.ai/privacy-policy): provider data handling, separate from character visibility.

The continuation format is this project's authoring method, not a file specification published by CrushOn or another provider.
