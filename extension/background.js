/*
 * BetGuard Blocker — Background Service Worker
 * --------------------------------------------
 * Responsibilities:
 *  - Maintain blocking state in chrome.storage.local
 *  - Listen to navigation events and redirect blocked sites to blocked.html
 *  - Track blocked attempts counter
 *  - Auto-disable blocking when the timer expires
 *
 * Storage schema (chrome.storage.local):
 *   {
 *     blockingActive: boolean,
 *     blockUntil: number | null,        // epoch ms
 *     blockedAttempts: number,
 *     defaultDomains: string[],         // built-in list
 *     customDomains: string[],          // user-added
 *   }
 */

// Default blocklist — common gambling / betting sites.
// You can edit this list freely; users can also add custom domains via the popup.
const DEFAULT_DOMAINS = [
  "bet365.com",
  "1xbet.com",
  "sportybet.com",
  "betpawa.com",
  "betway.com",
  "premierbet.com",
  "hollywoodbets.net",
  "betwinner.com",
  "melbet.com",
  "parimatch.com"
];

// Initialize storage on install.
chrome.runtime.onInstalled.addListener(async () => {
  const data = await chrome.storage.local.get(null);
  await chrome.storage.local.set({
    blockingActive: data.blockingActive ?? false,
    blockUntil: data.blockUntil ?? null,
    blockedAttempts: data.blockedAttempts ?? 0,
    defaultDomains: DEFAULT_DOMAINS,
    customDomains: data.customDomains ?? []
  });
});

// Helper: get the full active blocklist.
async function getBlocklist() {
  const { defaultDomains = DEFAULT_DOMAINS, customDomains = [] } =
    await chrome.storage.local.get(["defaultDomains", "customDomains"]);
  return [...defaultDomains, ...customDomains].map((d) => d.toLowerCase().trim()).filter(Boolean);
}

// Helper: is blocking currently active (and not expired)?
async function isBlockingActive() {
  const { blockingActive, blockUntil } = await chrome.storage.local.get(["blockingActive", "blockUntil"]);
  if (!blockingActive) return false;
  if (blockUntil && Date.now() >= blockUntil) {
    // Timer expired — auto-disable.
    await chrome.storage.local.set({ blockingActive: false, blockUntil: null });
    return false;
  }
  return true;
}

// Helper: check if a hostname matches any blocked domain.
function hostnameMatches(hostname, blocklist) {
  hostname = hostname.toLowerCase();
  return blocklist.some((d) => hostname === d || hostname.endsWith("." + d));
}

// Listen to top-level navigation and redirect blocked sites.
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  // Only handle main frame navigations.
  if (details.frameId !== 0) return;

  let url;
  try {
    url = new URL(details.url);
  } catch {
    return;
  }

  // Only block http(s) navigations.
  if (!/^https?:$/.test(url.protocol)) return;

  if (!(await isBlockingActive())) return;

  const blocklist = await getBlocklist();
  if (!hostnameMatches(url.hostname, blocklist)) return;

  // Increment blocked attempts counter.
  const { blockedAttempts = 0 } = await chrome.storage.local.get("blockedAttempts");
  await chrome.storage.local.set({ blockedAttempts: blockedAttempts + 1 });

  // Redirect to local blocked page with original URL as parameter.
  const redirectUrl = chrome.runtime.getURL(
    `blocked.html?from=${encodeURIComponent(url.href)}`
  );
  chrome.tabs.update(details.tabId, { url: redirectUrl });
});

// Alarm to clean up when block timer expires.
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "betguard-expire") {
    await chrome.storage.local.set({ blockingActive: false, blockUntil: null });
  }
});
