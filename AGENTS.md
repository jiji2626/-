# Codex instructions — KAKKO26 / YouTube AI Editor coordination

This repository is currently the GitHub coordination bridge for the owner's existing private YouTube AI Editor development workspace.

## Safety boundary
- Do **not** rebuild the private YouTube AI Editor application from scratch in this repository.
- Do **not** add media files, OAuth credentials, YouTube tokens, Adobe credentials, API secrets, or private editorial data.
- Do **not** change the existing Cloud Runner heartbeat/maintenance behavior unless a task explicitly targets Cloud Runner.
- Do **not** enable YouTube upload/publish actions from this repository without an explicit owner instruction.
- Treat the existing local/private application as the source of truth when it becomes available.

## Target channel
- YouTube channel: `ひろゆき2626`
- Handle: `@hiroyuki2626`

## Current product decision
During the restart test, keep Long and Shorts on the same existing channel.

- Long = primary content asset.
- Shorts = discovery, testing, and conversion entry point into Long.
- Do not create or assume a separate Shorts channel yet.

## 30-day restart test
- Long: 4–7/week, moving toward 1/day.
- A second Long upload is allowed only for exceptionally strong/current topics.
- Shorts: normally max 1/day.
- Generate 2–3 Shorts candidates per Long/topic, score them, and select only the strongest candidate for publication.

## Candidate scoring dimensions
At minimum consider:
- topical demand
- freshness
- performance of similar historical topics
- opening hook strength
- expected retention
- suitability for conversion to the corresponding Long video

The guiding rule is: **publish the item with the highest value today, not everything that can be generated.**

## Intended content flow
1. Ingest/source material in the private/local application.
2. Produce one Long-form edit.
3. Identify the strongest ~30–60 second segments.
4. Produce 2–3 Shorts candidates.
5. Score/rank candidates.
6. Select the best Short.
7. Link the Short to its corresponding Long when YouTube capabilities permit.

## Analytics to retain for the 30-day decision
- Shorts views
- subscribers gained from Shorts
- Long views
- Long impressions
- Long CTR
- average view duration
- average percentage viewed
- new viewers
- returning viewers
- Shorts-to-Long traffic
- related-video traffic
- overlap between Shorts and Long audiences when available

Only reconsider a separate Shorts channel if Shorts materially grow but fail to create meaningful Long-form discovery/conversion.

## Implementation workflow for Codex
When the private/local source becomes accessible:
1. Inspect the existing implementation first.
2. Map current Long/Shorts generation, selection, scheduling, publishing, and Analytics-learning behavior.
3. Compare it with Issue #1 and `docs/youtube-content-strategy.md`.
4. Propose the smallest compatible change set.
5. Prefer configuration over hard-coded limits for posting frequency, number of Shorts candidates, thresholds, and scoring weights.
6. Add tests before changing production behavior.

See Issue #1 for the owner-approved direction.
