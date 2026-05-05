/*
 * BetGuard Blocker — Blocked page logic
 * Shows remaining time, attempts, and the originally requested URL.
 */

const motivations = [
  "Every minute you stay away rebuilds your focus, your money and your peace of mind.",
  "The urge passes. Your goals stay. Keep going.",
  "You decided to protect your future self. That decision is still right.",
  "No bet ever pays back the time it steals. You are using your time well.",
  "Strength is not avoiding the urge — it is choosing yourself when it appears."
];

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

async function render() {
  const { blockUntil, blockedAttempts = 0 } = await chrome.storage.local.get([
    "blockUntil",
    "blockedAttempts"
  ]);
  document.getElementById("remaining").textContent = blockUntil
    ? formatRemaining(blockUntil - Date.now())
    : "—";
  document.getElementById("attempts").textContent = blockedAttempts;

  const params = new URLSearchParams(location.search);
  const from = params.get("from");
  if (from) {
    document.getElementById("fromUrl").textContent = "Blocked: " + from;
  }

  document.getElementById("motivation").textContent =
    motivations[Math.floor(Math.random() * motivations.length)];
}

render();
setInterval(render, 30000);
