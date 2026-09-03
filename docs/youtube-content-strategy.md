# YouTube content strategy — ひろゆき2626

Status: owner-approved working strategy for the restart period.

## Channel architecture
Use the existing `ひろゆき2626` channel for both Long and Shorts during the initial test period.

Do not split Shorts into a new channel yet.

### Long
Long-form is the primary channel asset and should receive the strongest topics, editing effort, metadata, and retention optimization.

Target cadence after ramp-up: approximately 1 Long/day, with 4–7 Longs/week during the restart phase.

A second Long on the same day is reserved for unusually strong time-sensitive topics.

### Shorts
Shorts are used primarily to:
- surface strong moments quickly,
- test hooks/topics,
- acquire new viewers,
- route qualified viewers toward a related Long video.

Default publication cap during the test: 1 Short/day.

## Generation policy
For each suitable source/topic:
- produce one Long candidate,
- identify multiple strong vertical clips,
- generate approximately 2–3 Shorts candidates,
- rank those candidates,
- publish only the strongest Short by default.

Do not treat generation capacity as publication capacity.

## Candidate scoring
The exact scoring implementation may evolve, but it should be configurable and include at least:

| Dimension | Purpose |
|---|---|
| Topic demand | Estimate current audience interest |
| Freshness | Favor timely/current material where relevant |
| Historical similarity | Use performance of related past topics |
| Hook strength | Estimate opening-stop power |
| Retention expectation | Prefer clips likely to hold attention |
| Long conversion fit | Prefer Shorts that naturally lead to a related Long |

A future weighted model may normalize each input and compute a 0–100 score. Weight values must remain configurable rather than hard-coded into business logic.

## Publishing decision principle
The scheduling layer should select the highest-value publishable item for a given day/window rather than blindly exhausting the render queue.

Suggested conceptual states:
- generated
- scored
- eligible
- selected
- scheduled
- published
- measured

## Long ↔ Shorts relationship
Preferred flow:

`source -> Long -> candidate moments -> Shorts candidates -> rank -> selected Short -> related Long`

Where YouTube supports a related-video link or equivalent, the selected Short should reference the corresponding Long.

## 30-day experiment
The first restart period should be treated as an experiment, not a permanent channel split decision.

Measure at least:
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
- overlap between Short and Long audiences when available

## Decision after the experiment
Keep a single mixed-format channel if Shorts contribute to discovery, subscriber growth, or Long-form consumption without materially damaging Long performance.

Only revisit a dedicated Shorts channel if Shorts become a materially different audience/product and show little meaningful conversion into Long-form viewing.

## Engineering requirements
When implementing this policy in the private YouTube AI Editor application:
- inspect existing code first,
- preserve existing working behavior,
- avoid a rewrite,
- make cadence/limits/thresholds/weights configurable,
- retain enough analytics data to compare the test period,
- keep upload/publish permissions and credentials outside this public/bridge repository,
- add tests around candidate ranking and scheduling decisions.

Primary implementation request: GitHub Issue #1.
