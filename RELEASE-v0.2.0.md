# Character Personality Workshop v0.2.0

Adds a manual scene-state worksheet alongside the existing character brief editor.

- Seven fields separate location, time, items, goals, constraints, unknowns, and creative scope.
- Compare the current snapshot with a replaceable checkpoint. These are text differences, not semantic checks.
- Export a Markdown handoff or save and reopen both snapshots as versioned JSON.
- Confirmation protects replacement actions; invalid input is rejected before current fields are changed.
- Includes a blank template, compatibility guide, and transparent three-message case study with an observed error and remaining limitations.

15 scene-core checks and 9 existing personality-core checks passed. Local Chrome editing, preview, downloaded file contents, and JSON re-import were verified. No claim of comprehensive device testing or model-quality improvement.

No model calls, automatic chat access, persistent AI memory, or native Target Play integration. The JSON format belongs to this worksheet only. Existing personality exports and the separate World Card project are unchanged.

Open `index.html` for the personality editor or `scene.html` for scene state. Export before reloading; the application does not store entries between page loads.
