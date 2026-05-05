/*
 * BetGuard Blocker — Popup UI logic
 * ---------------------------------
 * Reads/writes blocking state to chrome.storage.local and renders UI.
 */

const $ = (sel) => document.querySelector(sel);

// Format ms into a human readable "Xd Yh Zm" string.
function formatRemaining(ms) {
  if (ms <= 0) return "0m";
  const totalMin = Math.floor(ms / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  const parts = [];
  if (days) parts.push(days + "d");
  if (hours) parts.push(hours + "h");
  parts.push(mins + "m");
  return parts.join(" ");
}

// Start blocking for `hours` from now.
async function startBlocking(hours) {
  if (!hours || hours <= 0) return;
  const blockUntil = Date.now() + hours * 60 * 60 * 1000;
  await chrome.storage.local.set({ blockingActive: true, blockUntil });
  // Schedule an alarm to fire at expiry to clean up state.
  chrome.alarms.create("betguard-expire", { when: blockUntil });
  await render();
}

// Stop blocking immediately.
async function stopBlocking() {
  await chrome.storage.local.set({ blockingActive: false, blockUntil: null });
  chrome.alarms.clear("betguard-expire");
  await render();
}

// Add a custom domain to the blocklist.
async function addCustomDomain(domain) {
  domain = (domain || "").toLowerCase().trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!domain || !domain.includes(".")) return;
  const { customDomains = [] } = await chrome.storage.local.get("customDomains");
  if (customDomains.includes(domain)) return;
  customDomains.push(domain);
  await chrome.storage.local.set({ customDomains });
  await render();
}

// Remove a custom domain.
async function removeCustomDomain(domain) {
  const { customDomains = [] } = await chrome.storage.local.get("customDomains");
  await chrome.storage.local.set({
    customDomains: customDomains.filter((d) => d !== domain)
  });
  await render();
}

// Render full UI state.
async function render() {
  const data = await chrome.storage.local.get(null);
  const {
    blockingActive,
    blockUntil,
    blockedAttempts = 0,
    defaultDomains = [],
    customDomains = []
  } = data;

  const active = blockingActive && blockUntil && Date.now() < blockUntil;

  // Status badge
  const badge = $("#statusBadge");
  badge.textContent = active ? "Active" : "Not active";
  badge.classList.toggle("badge-active", active);

  // Remaining time
  const remainingRow = $("#remainingRow");
  if (active) {
    remainingRow.style.display = "";
    $("#remainingTime").textContent = formatRemaining(blockUntil - Date.now());
  } else {
    remainingRow.style.display = "none";
  }

  $("#attemptsCount").textContent = blockedAttempts;

  // Custom list
  const customList = $("#customList");
  customList.innerHTML = "";
  if (customDomains.length === 0) {
    const li = document.createElement("li");
    li.className = "muted small";
    li.textContent = "No custom sites added yet.";
    customList.appendChild(li);
  } else {
    for (const d of customDomains) {
      const li = document.createElement("li");
      li.innerHTML = `<span>${d}</span>`;
      const btn = document.createElement("button");
      btn.className = "btn-remove";
      btn.textContent = "Remove";
      btn.addEventListener("click", () => removeCustomDomain(d));
      li.appendChild(btn);
      customList.appendChild(li);
    }
  }

  // Default list
  const defaultList = $("#defaultList");
  defaultList.innerHTML = "";
  for (const d of defaultDomains) {
    const li = document.createElement("li");
    li.textContent = d;
    defaultList.appendChild(li);
  }
}

// Wire up events.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".duration-btn").forEach((btn) => {
    btn.addEventListener("click", () => startBlocking(parseInt(btn.dataset.hours, 10)));
  });

  $("#customStartBtn").addEventListener("click", () => {
    const hrs = parseInt($("#customHours").value, 10);
    if (hrs > 0) startBlocking(hrs);
  });

  $("#emergencyBtn").addEventListener("click", () => startBlocking(24));
  $("#stopBtn").addEventListener("click", stopBlocking);

  $("#addDomainBtn").addEventListener("click", () => {
    const v = $("#customDomain").value;
    $("#customDomain").value = "";
    addCustomDomain(v);
  });
  $("#customDomain").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("#addDomainBtn").click();
  });

  render();
  // Refresh remaining time every 30s while popup is open.
  setInterval(render, 30000);
});
