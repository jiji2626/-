const SITE_URL = (process.env.KAKKO26_SITE_URL
  || 'https://kakko26-opening-review-v5.tom-sakagami26.chatgpt.site').replace(/\/$/, '');
const OIDC_AUDIENCE = 'kakko26-sites-runner/v1';
const SITES_BYPASS_TOKEN = process.env.KAKKO26_SITES_BYPASS_TOKEN;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function oidcToken() {
  const requestUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  const requestToken = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
  assert(requestUrl && requestToken, 'GitHub OIDC is not available');
  const url = new URL(requestUrl);
  url.searchParams.set('audience', OIDC_AUDIENCE);
  const response = await fetch(url, {
    headers: { authorization: `Bearer ${requestToken}` },
  });
  assert(response.ok, `OIDC token request failed (${response.status})`);
  const payload = await response.json();
  assert(typeof payload.value === 'string', 'OIDC token response is invalid');
  return payload.value;
}

async function main() {
  assert(SITES_BYPASS_TOKEN, 'Owner-only Sites access is not connected');
  const token = await oidcToken();
  const response = await fetch(`${SITE_URL}/api/cloud-runner/heartbeat`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      'OAI-Sites-Authorization': `Bearer ${SITES_BYPASS_TOKEN}`,
    },
    body: JSON.stringify({ capabilities: ['monitor'] }),
  });
  const payload = await response.json().catch(() => ({}));
  assert(response.ok && payload.status === 'healthy',
    `heartbeat failed (${response.status}): ${payload.error || 'unknown'}`);
  console.log('KAKKO26 cloud monitoring completed. No media was transferred.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
