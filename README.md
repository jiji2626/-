# KAKKO26 Cloud Runner

GitHub-hosted monitor for the owner-only KAKKO26 YouTube operations console.

## Current scope

- Runs a heartbeat and cloud maintenance check on an hourly schedule.
- Transfers no media to GitHub.
- Does not claim FFmpeg render jobs.
- Does not upload to YouTube, publish videos, or modify the channel.

The FFmpeg client exists only in the private development workspace. Media transfer and
cloud rendering remain disabled until the owner explicitly approves that separate step.

## Security and cost controls

- No long-lived secret is stored in GitHub.
- Authentication uses GitHub Actions OIDC with repository and workflow claim checks.
- Checkout credentials are not persisted.
- No Actions cache or artifact is created.
- The monitor is forced to stop after five minutes.
- The application enforces an 8 GB cloud-media hard limit and stops new storage instead of accepting overage charges.

The private application, media, credentials, and editorial data are not part of this repository.
