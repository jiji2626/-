# KAKKO26 Cloud Runner

GitHub-hosted runner for the owner-only KAKKO26 YouTube operations console.

## Scope

- Runs a heartbeat and cloud maintenance check on a schedule.
- Processes at most one queued FFmpeg render job per run.
- Reads source media through the authenticated Sites runner API.
- Uploads the rendered artifact back to the private media store.
- Does not upload to YouTube, publish videos, or modify the channel.

## Security and cost controls

- No long-lived secret is stored in GitHub.
- Authentication uses GitHub Actions OIDC with repository and workflow claim checks.
- The workflow is intended for GitHub-hosted runners in this public repository.
- The application enforces an 8 GB cloud-media hard limit and stops new storage instead of accepting overage charges.

The private application, media, credentials, and editorial data are not part of this repository.
