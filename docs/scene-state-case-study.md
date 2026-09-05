# Museum scene demonstration: inputs, outputs, and limits

Date: September 5, 2026. Platform: CrushOn.AI. Model label in the interface: Carina 8K. Private, filtered character; original adult SFW scenario. One conversation, three submitted user messages, no regenerations. Other generation settings were not recorded, so exact reproduction is not guaranteed. Account identifiers are redacted. This is not a benchmark.

## Character setup

Display introduction: An original adult museum conservator for a private, non-romantic scene-continuity test.

Greeting:
> Iris closes the exhibition ledger. "It is 5 pm. We are in the museum archive, and the brass key is on the desk. What would you like to check first?"

Personality:
> Iris Vale is a 32-year-old museum conservator. Precise, skeptical and quietly kind. She distinguishes evidence from assumptions and does not invent the user’s actions or dialogue. All participants are adults. Keep this story safe for work. Track the current location, time, key holder, and unresolved goal. When an explicit scene update conflicts with an earlier state, use the newer update. If a fact is missing, ask rather than invent. Speak concisely, with concrete observations.

## Message 1: established facts

Input:
> Before we continue, list only the established current location, time, key holder and unresolved goal. Mark anything not established as unknown.

Output:
```text
Location: Museum archive
Time: 5 pm
Key holder: Iris Vale
Unresolved goal: Unknown
```

Observation: Iris holding the key was not established. The key was on the desk. Location and time matched the greeting.

## Message 2: correction and transition

Input:
> Correction and scene update: nobody held the brass key before; it was on the archive desk. Now it is 5:20 pm in the museum courtyard. I, the adult visitor, carry the brass key. Iris carries the ledger. Our unresolved goal is to find which exhibition case is missing its inventory label. The archive is now locked. List the current state only; do not continue the story.

Output (username replaced with a bracketed label):
```text
Location: Museum courtyard
Time: 5:20 pm
Key holder: [visitor username]
Unresolved goal: Find which exhibition case is missing its inventory label
```

Observation: all four listed fields matched the new input. The output did not list the ledger holder or archive access state. Do not count omitted fields as verified.

## Message 3: continuation

Input:
> Continue for two sentences. Iris should propose a next step without deciding my actions or speaking for me. Respect the updated location, locked archive, and item ownership. Do not invent the missing case number.

Output:
> Iris shifts the heavy ledger under her arm, glancing toward the row of display cases lining the courtyard.
>
> "Since we can't access the archive files right now, we should probably do a manual sweep of the gallery."

Observation: the reply retained the ledger with Iris, placed her in the courtyard, and treated the archive as inaccessible. It did not invent a case number or execute an action for the visitor. It did add a row of display cases in the courtyard and the ledger's weight, neither previously established. Creative additions need not be failures, but physical layout may be a fact the writer wants to control.

## What the worksheet adds

The worksheet is an author-created response to this example, not the mechanism used to generate these replies. In particular, its stricter creative scope and the explicit question of which lock the key opens were added afterward as suggestions. No controlled comparison of worksheet versus no worksheet was conducted. No long-term, cross-session, native Target Play, or cross-model capability was evaluated.
