# LoanSaathi — Complete Website Starter

Responsive static website for Loan + Insurance enquiry assistance. Designed for GitHub Pages.

## WhatsApp number — important
The website does **not** use your personal number. The WhatsApp destination is intentionally left as a placeholder in `config.js`.

Open `config.js` and replace:
```js
whatsappNumber: "91XXXXXXXXXX"
```
with your separate BUSINESS WhatsApp number, digits only, including country code. Example format: `91` + 10-digit business number. Do not add `+`, spaces or hyphens.

Until you replace the placeholder, the form will show a clear setup message and will not send an enquiry to any number.

Optional: update `businessEmail` and `businessPhone` in the same file and replace contact placeholders in `contact.html`, `privacy.html`, and `terms.html`.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Create a GitHub repository, for example `loansaathi`.
3. Upload all files and folders inside this ZIP to the repository root (not the ZIP itself).
4. Open repository **Settings → Pages**.
5. Under Build and deployment choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait for deployment. Your site URL will look like `https://YOUR-USERNAME.github.io/loansaathi/`.

## Enquiry workflow and limitations
- Form validates the customer's 10-digit mobile number and consent.
- It prepares a WhatsApp message and opens WhatsApp using the business number configured in `config.js`.
- The customer must press **Send** in WhatsApp.
- This static version does not store enquiries in a database, email inbox or Google Sheet. Add a secure backend/form service later if you need automatic lead storage.
- Do not collect PAN, Aadhaar, OTP, passwords, bank credentials or documents in this initial form.

## Before launch checklist
- [ ] The separate business WhatsApp number is already configured in `config.js`.
- [ ] Business email and business WhatsApp phone are configured. Add a physical address only if you want to publish one.
- [ ] Review Privacy Policy and Terms with a qualified professional.
- [ ] Confirm active lender/DSA arrangements and written permissions before naming partners or displaying their logos.
- [ ] Confirm the exact active insurance product catalogue and insurer authorisations under your POSP/partner account. POSP certificates alone do not establish access to every product.
- [ ] Do not promise loan approval, rates, insurance premiums, policy issuance or claims.
- [ ] Add only truthful business identity and contact details.

## Included files
- `index.html` — homepage, loan/insurance services, enquiry form
- `styles.css` — responsive design
- `script.js` — mobile navigation, form validation and WhatsApp handoff
- `config.js` — business contact configuration
- `privacy.html`, `terms.html`, `contact.html`
- `assets/favicon.svg`
