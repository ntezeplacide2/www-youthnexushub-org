# BetGuard Blocker — Safe Gambling Protection Extension

By **Youth Nexus Hub Ltd**

A Manifest V3 Chrome extension that blocks gambling and betting websites for a chosen period of time.

## Install locally

1. Download / unzip the extension folder.
2. Open `chrome://extensions` in Chrome (or any Chromium browser: Edge, Brave, Arc, Opera).
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the `extension/` folder.
5. Pin the BetGuard Blocker icon to your toolbar.

## Folder structure

```
extension/
├── manifest.json       # MV3 manifest
├── background.js       # Service worker — navigation blocking + storage
├── popup.html          # Popup UI
├── popup.js            # Popup logic (start/stop, custom domains)
├── blocked.html        # Page shown when a blocked site is opened
├── blocked.js          # Blocked page logic (timer, motivation)
├── styles.css          # Shared styles (brand colors)
└── icons/icon.png      # Extension icon
```

## How it works

- Blocking state is kept in `chrome.storage.local`.
- `chrome.webNavigation.onBeforeNavigate` watches main-frame navigations.
- If blocking is active and the hostname matches the blocklist, the tab is redirected to `blocked.html`.
- A `chrome.alarms` alarm auto-disables blocking when the timer expires.
- Users can add custom domains; the default blocklist lives in `background.js` (`DEFAULT_DOMAINS`) — edit freely.

## Privacy

BetGuard Blocker stores settings only on your device. No personal data or browsing history is collected or sent anywhere.
