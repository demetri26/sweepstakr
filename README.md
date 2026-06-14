# Sweepstakr

**sweepstakr.app** — Run the perfect sweepstake.

---

## Repo Structure

| File | Purpose |
|---|---|
| `index.html` | Landing/marketing page at sweepstakr.app |
| `app.html` | Hosted restricted version at sweepstakr.app/app.html |
| `CNAME` | Custom domain config — do not edit |

---

## Two Versions of the App

There are two versions of the app that must be kept in sync when updating:

### 1. Download version (sold via Lemon Squeezy)
- Stored locally and uploaded to Lemon Squeezy — never committed to this repo
- Full read/write access — buyers use this to create and manage sweepstakes
- Share links hardcoded to point to `sweepstakr.app/app.html#share=...`

### 2. Hosted version (`app.html` in this repo)
- Lives at `sweepstakr.app/app.html`
- Visiting without a `#share=` hash → redirects to buy page
- Visiting with a `#share=` hash → renders read-only sweepstake view
- The only code difference from the download version is the `checkShareURL` function

### Keeping them in sync
When making updates to the app:
1. Update the download version
2. Copy all changes across to `app.html`
3. Ensure `checkShareURL` in `app.html` retains the paywall/redirect logic — do not overwrite it with the download version's logic

---

## Sales & Distribution

- **Platform:** Lemon Squeezy
- **Store:** sweepstakr.lemonsqueezy.com
- **Price:** £2.99 one-time
- **Product URL:** https://sweepstakr.lemonsqueezy.com/checkout/buy/2c847aad-5a73-4750-92c3-f2bc37f91fe3

---

## Domain

- **Registrar:** Porkbun
- **Domain:** sweepstakr.app
- **DNS:** CNAME pointing to GitHub Pages
- **HTTPS:** Enforced via GitHub Pages settings

---

## Updating Buyers

When a new version is released:
1. Upload the new download version to Lemon Squeezy (replaces existing file)
2. Push updated `app.html` to this repo
3. Notify buyers via Lemon Squeezy's built-in email tool
