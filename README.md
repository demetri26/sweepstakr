# Sweepstakr

**sweepstakr.app** — Free sweepstake tool for everyone.

---

## Model

Sweepstakr is free to use. No account, no paywall, no tiers.

Optional one-time supporter purchase (£3) via Lemon Squeezy gives the buyer a downloadable desktop edition. Framed as "buy me a coffee" — not a premium product.

---

## Repo Structure

| File | Purpose |
|---|---|
| `index.html` | Landing/marketing page at sweepstakr.app |
| `app.html` | Hosted free app at sweepstakr.app/app.html |
| `manifest.json` | PWA manifest — app name, icons, colours |
| `sw.js` | Service worker — enables offline use |
| `icon-192.png` | PWA icon (192px) |
| `icon-512.png` | PWA icon (512px) |
| `CNAME` | Custom domain config — do not edit |

---

## Two Versions of the App

### 1. Hosted version (`app.html` in this repo)
- Lives at `sweepstakr.app/app.html` — free for everyone
- Full read/write access, no gate
- Share links (`#share=...`) render a read-only view
- Has PWA support — users can install to home screen
- Has subtle "☕ Support Sweepstakr" link in sidebar footer

### 2. Download version (sold via Lemon Squeezy)
- Stored locally and uploaded to Lemon Squeezy — never committed to this repo
- Identical functionality to the hosted version
- Positioned as a desktop convenience for supporters, not a premium product

### Keeping them in sync
When making updates to the app:
1. Update the download version locally
2. Copy all changes to `app.html` in this repo
3. Push to GitHub

---

## Sales & Distribution

- **Platform:** Lemon Squeezy
- **Store:** sweepstakr.lemonsqueezy.com
- **Price:** £3 one-time (supporter / buy me a coffee framing)
- **Product URL:** https://sweepstakr.lemonsqueezy.com/checkout/buy/2c847aad-5a73-4750-92c3-f2bc37f91fe3

---

## Domain

- **Registrar:** Porkbun
- **Domain:** sweepstakr.app
- **DNS:** A records + CNAME pointing to GitHub Pages
- **HTTPS:** Enforced via GitHub Pages settings

---

## Updating Buyers

When a new version is released:
1. Upload the updated download version to Lemon Squeezy
2. Push updated `app.html` to this repo
3. Notify buyers via Lemon Squeezy's built-in email tool
