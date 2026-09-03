# Codex instructions — KAKKO26 / YouTube AI Editor coordination

## P0 — finish one publish-quality Long video first
The owner has explicitly prioritized reaching the final edited Long-form video as soon as possible.

**Speed must not come from lowering the quality of the video itself.** Defer analytics, Shorts optimization, dashboards, refactors, and future architecture instead.

### P0 success condition
Produce one reviewable Long-form output from the existing private/local YouTube AI Editor workflow that is good enough to become a publish candidate after owner review.

Required quality bar:
- natural cuts that preserve meaning and conversation flow
- good pacing without excessive dead time or destructive over-cutting
- stable, intelligible voice level with no obvious clipping or distracting noise
- subtitles synchronized with speech, with obvious recognition errors and bad line breaks corrected where practical
- no obvious aspect-ratio, crop, black-bar, scaling, resolution, frame-drop, end-cut, or A/V-sync failures
- readable on-screen text; avoid unnecessary over-editing
- a strong opening that remains faithful to the source context
- coherent beginning-to-end structure around one clear topic
- title and thumbnail that attract clicks without misrepresenting the content
- final QC pass before the output is considered complete

### P0 workflow
1. Inspect the existing private/local implementation first.
2. Reuse every working editing component possible.
3. Select one strong Long topic/source.
4. Complete cuts and structure.
5. Complete audio cleanup/leveling.
6. Complete subtitles/text treatment.
7. Perform necessary visual framing adjustments.
8. Generate/select one usable thumbnail and basic metadata.
9. Render/export the final video.
10. Run QC and produce a reviewable file.

Do not block P0 on:
- Shorts-channel decisions
- advanced Shorts scoring
- 30-day analytics dashboards
- advanced audience-overlap analysis
- automatic cadence optimization
- competitor automation
- complex trend scoring
- automatic publishing decisions
- broad UI work
- refactors or architecture rewrites

## Safety boundary
- Do **not** rebuild the private YouTube AI Editor application from scratch in this repository.
- Do **not** add media files, OAuth credentials, YouTube tokens, Adobe credentials, API secrets, or private editorial data.
- Do **not** change the existing Cloud Runner heartbeat/maintenance behavior unless a task explicitly targets Cloud Runner.
- Do **not** enable YouTube upload/publish actions from this repository without an explicit owner instruction.
- Treat the existing local/private application as the source of truth when it becomes available.

## Target channel
- YouTube channel: `ひろゆき2626`
- Handle: `@hiroyuki2626`

## Later product direction
After the first Long pipeline is working, keep Long and Shorts on the same existing channel for the initial restart experiment.
Long remains the primary asset; Shorts are discovery/testing/conversion entry points into Long.

See Issue #1 and `docs/youtube-content-strategy.md` for the deferred Long/Shorts strategy.