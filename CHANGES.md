# Changes for Google Deceptive Pages Remediation

Date: 2026-08-02
Branch: `security/google-deceptive-pages-remediation`

## Outcome

This branch converts the realistic sub-applications into unmistakable, non-indexable
portfolio demonstrations; hardens static hosting and the public API; corrects technical
SEO controls; updates dependencies without forced major changes; and adds the evidence
and deployment checklists required for a truthful Google review.

Nothing in this branch submits a Search Console review, changes DNS, changes a hosting
account, sends a contact email, rotates a credential, or deploys production.

## Frontend trust, security, and routing

| File | Change and reason |
| --- | --- |
| `frontend/src/App.tsx` | Mounts route metadata and the persistent demo notice, replaces catch-all ambiguity with a not-found component, and migrates smooth scrolling to the maintained Lenis React package |
| `frontend/src/components/DemoNotice.tsx` | Adds an always-visible disclosure that demo identities, records, orders, and transactions are fictional and warns against entering real data |
| `frontend/src/components/RouteMetadata.tsx` | Centralizes public and demo metadata, canonical URLs, social cards, and `index`/`noindex` policy |
| `frontend/src/pages/NotFound.tsx` | Gives client-side invalid navigation a useful, explicitly non-indexable page |
| `frontend/src/pages/Shopcart/Checkout.tsx` | Disables checkout inputs and states that no personal or payment data is accepted, stored, or transmitted |
| `frontend/src/pages/EduQuestLMS/AccountSettings.tsx` | Disables password-change inputs/button and adds a demo warning |
| `frontend/src/pages/FinanceDashboard/Settings.tsx` | Disables password inputs and adds a demo warning |
| `frontend/public/.htaccess` | Adds canonical redirects, route allowlisting, real 404 behavior, demo `X-Robots-Tag`, directory-listing prevention, CSP, HSTS, anti-framing, MIME, referrer, permissions, and cross-origin headers |
| `frontend/public/404.html` | Adds the static error document required for a genuine HTTP 404 |
| `frontend/public/theme-init.js` | Moves the small theme bootstrap out of an unrestricted inline script so CSP can remain narrow |
| `frontend/index.html` | Corrects base metadata, social image, Organization logo, and structured data; removes an empty social-profile property |
| `frontend/public/sitemap.xml` | Limits the sitemap to the three intentionally indexable pages and updates their meaningful audit date |
| `frontend/vite.config.ts` | Explicitly disables production source maps |
| `frontend/src/main.tsx` | Loads the maintained Lenis stylesheet |

## Frontend maintenance needed for a clean validation run

| File | Change and reason |
| --- | --- |
| `frontend/src/components/Hero.tsx` | Updates link-button calls after simplifying the shared component |
| `frontend/src/components/MagneticButton.tsx` | Removes an unused polymorphic prop and keeps the component as a typed animated link |
| `frontend/src/context/ThemeContext.tsx` | Documents the deliberate context/helper co-location for lint |
| `frontend/src/pages/EduQuestLMS/components/Sidebar.tsx` | Adds the missing navigation item type |
| `frontend/src/pages/FinanceDashboard/Analytics.tsx` | Replaces render-time cumulative mutation with a deterministic reduction |
| `frontend/src/pages/FinanceDashboard/CashFlowChart.tsx` | Moves and types the tooltip component consistently |
| `frontend/src/pages/HRMPlatform/Dashboard.tsx` | Types the statistics model |
| `frontend/src/pages/Shopcart/Products.tsx` | Removes an unused navigation prop |
| `frontend/src/pages/Shopcart/index.tsx` | Updates the products call site |

These are behavior-preserving lint/type corrections discovered while running the
repository's existing validation commands.

## Backend hardening

| File | Change and reason |
| --- | --- |
| `backend/index.js` | Adds restrictive API headers, hides Express, limits request size, validates and bounds fields, avoids PII logging, sends fixed-subject plain text email, disables Nodemailer file/URL access, fails closed without SMTP secrets, returns JSON 404s, sanitizes parser/server errors, and avoids binding a port when imported for tests |
| `backend/index.test.js` | Adds isolated integration coverage without sending email |

## Dependency and package-manager changes

| File | Change and reason |
| --- | --- |
| `frontend/package.json`, `frontend/package-lock.json` | Updates safe dependencies, adds explicit npm version, replaces deprecated `@studio-freight/react-lenis` with maintained `lenis`, and records the reviewed dependency graph |
| `backend/package.json`, `backend/package-lock.json` | Applies non-breaking dependency fixes, updates Nodemailer within its current major, adds the test command, and records npm as package manager |
| `frontend/yarn.lock`, `backend/yarn.lock` | Removed because the repository is now explicitly npm-managed; retaining two lockfile formats allowed inconsistent installed graphs |

No `npm audit fix --force` or unreviewed major upgrade was used. Residual advisories and
their runtime context are recorded in `SECURITY_AUDIT.md`.

## Documentation

- `SECURITY_AUDIT.md` records architecture, findings, Git history, third parties,
  dependency risk, unresolved actions, and production checks.
- `SEO_AUDIT.md` records the complete route/indexability matrix, metadata, sitemap,
  redirects, 404 strategy, structured data, and prioritized recommendations.
- `GOOGLE_REVIEW_DRAFT.md` is a conditional draft with placeholders that must be replaced
  only after deployment and operational verification.
- This file provides the implementation and verification handoff.

## Validation performed

| Check | Result |
| --- | --- |
| Frontend install | `npm install` completed after migrating from the deprecated Lenis wrapper |
| Frontend lint | `npm run lint` passed |
| Frontend typecheck and production build | `npm run build` passed; 2,909 modules transformed |
| Production source maps | None emitted |
| Backend install | `npm install` completed |
| Backend integration tests | `npm test` passed, 5 tests |
| JavaScript syntax | `node --check backend/index.js` and `backend/index.test.js` passed |
| XML | `frontend/public/sitemap.xml` passed `xmllint` |
| Patch whitespace | `git diff --check` passed |
| Built hosting artifacts | `.htaccess` and `404.html` are present in `frontend/dist`; CSP structured-data hash matches the built HTML |
| Route allowlist | All declared paths matched; representative invalid paths did not |
| Current-tree secret scan | No secret-like assignment found; demo text references are non-secret |
| Desktop browser | Homepage metadata/content/contact validation and all declared routes checked at 1440×900 |
| Mobile browser | Menu, contact navigation, layout width, and demo presentation checked at 390×844 |
| Browser console/runtime | No console errors, warnings, broken images, unsafe `_blank` links, iframe, or external script observed |
| Demo protections | Every declared demo route showed the notice and `noindex`; password and checkout fields were disabled |
| Invalid route | Client not-found UI and `noindex` passed; authoritative HTTP 404 remains a production Hostinger verification |
| Production read-only checks | Recorded current redirect, 200 fallback, frontend header, backend health/404, and backend preflight behavior |

The frontend has no configured unit/E2E command and no formatter command. Browser route
coverage was used for functional verification. No real contact, waitlist, credential,
payment, or email submission was performed.

## Deliberately not changed

- No production deployment, DNS, registrar, Hostinger, Vercel, SMTP, Search Console, or
  account-admin setting was changed.
- No Google review was submitted.
- No SMTP secret was printed, copied, or rotated. Rotation requires the authorized
  account owner.
- Git history was not rewritten. Credential rotation must happen first, and history
  cleanup must be coordinated as a separate destructive operation.
- Demo applications were not converted into authenticated systems; they contain no real
  backend or user accounts and are now explicitly treated as demos.
- Backend CORS and rate limiting were not guessed without the production origin/edge-store
  decision. They remain required follow-up items.
- Vite, React Router, and Nodemailer were not forced across incompatible or major upgrade
  paths. The current application-specific exposure and next steps are documented.
- No thin SEO landing pages, unverified social links, business claims, or cookie banner
  were invented.
- External demo images were not copied or relicensed; their approved domains are narrowly
  allowlisted and documented for a future self-hosting review.

## Deployment handoff

1. Complete SMTP rotation and account review from `SECURITY_AUDIT.md`.
2. Review and commit this branch, then build the frontend with `npm ci && npm run build`.
3. Upload the exact contents of `frontend/dist` to the Hostinger document root. Confirm
   hidden files are included so `.htaccess` is not omitted.
4. Configure the backend's rotated secrets, explicit production CORS allowlist, and
   serverless-compatible rate limit; deploy the reviewed backend commit to Vercel.
5. Run every production acceptance check in `SECURITY_AUDIT.md` and `SEO_AUDIT.md`.
6. Replace every placeholder in `GOOGLE_REVIEW_DRAFT.md` with verified facts and evidence.
7. Ask the authorized Search Console owner to submit the review.
