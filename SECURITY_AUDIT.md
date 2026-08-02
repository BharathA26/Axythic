# Axythic Security and Deceptive Pages Audit

Audit date: 2026-08-02
Scope: the complete local Git repository, its reachable history, the built frontend, the
public website at `axythic.com`, and the public backend health endpoint
Remediation branch: `security/google-deceptive-pages-remediation`

## Executive summary

No malware, phishing kit, credential exfiltration, cloaking, unauthorized redirect,
obfuscated payload, service worker, hidden iframe, or injected third-party script was
found in the current repository. The finance, commerce, learning-management, fitness,
portfolio, and HRM interfaces are intentional portfolio demonstrations introduced by
normal project commits.

The most plausible cause of Google's "Deceptive pages" classification is the way those
demos were publicly exposed: realistic account, admin, finance, password, and checkout
screens were reachable without a persistent demo disclosure and without `noindex`
controls. That conclusion is an evidence-based hypothesis, not a claim about Google's
internal classification.

The branch now labels every demo persistently, tells visitors that all records are
fictional, disables credential and checkout data entry, and applies both HTML and
HTTP-level `noindex` controls. It also adds a route allowlist, a real static 404 response,
canonical-host redirects, security headers, and safer contact-form handling.

One urgent operational action remains: an old `backend/.env` containing SMTP
configuration was committed and later removed. Its values were not reproduced during
this audit. The SMTP password must be rotated before any Google review request, even if
the team believes it is no longer active. Rewriting Git history should be considered
only after rotation and coordinated separately because it is destructive for existing
clones.

The source fixes are not production fixes until the frontend and backend are deployed
and the production verification checklist below passes.

## System inventory and trust boundaries

| Area | Implementation | Entry point / deployment | Security relevance |
| --- | --- | --- | --- |
| Public frontend | React 19.2, TypeScript 5.9, React Router 7, Vite 5, Tailwind 4 | `frontend/src/main.tsx`; static build from `frontend/dist` | Public marketing pages and portfolio demos share one SPA |
| Public API | Express 5, Nodemailer 8 | `backend/index.js`; Vercel configuration in `backend/vercel.json` | Receives contact and waitlist input; sends contact email |
| Production frontend | Static site currently served by Hostinger/LiteSpeed | `https://axythic.com` | Host configuration must deploy `frontend/public/.htaccess` |
| Design sources | Stitch exports and document/design artifacts | Repository only; not referenced by the production entry point | Not part of the public runtime |
| Authentication | None | Not applicable | Account/admin screens are visual demos, not protected applications |
| Package manager | npm 11.10.1 | `package-lock.json` is authoritative in each app | Removed Yarn lockfiles to eliminate conflicting dependency graphs |

The frontend and backend are separate deployables. There is no service worker, runtime
iframe, analytics SDK, tag manager, advertising SDK, authentication middleware, payment
processor, or file-upload endpoint.

## Audit method

- Inventoried tracked files, route declarations, HTML entry points, API handlers,
  deployment files, and dependency manifests.
- Searched current source and reachable Git history for secret-bearing files, encoded
  payloads, dynamic script creation, `eval`, iframe use, suspicious redirects,
  credential collection, notification prompts, service workers, and data submission.
- Reviewed the commits that introduced each demo to distinguish deliberate project work
  from unauthorized injection.
- Ran `npm audit` after lockfile updates without using forced or breaking upgrades.
- Built and linted the frontend, ran backend integration tests, inspected the generated
  artifact, and exercised all declared routes in desktop and mobile browser sessions.
- Made read-only requests to production to record its current redirect, response, and
  header behavior. No production state, email, form submission, Search Console setting,
  DNS record, or hosting setting was changed.

## Confirmed findings and disposition

### SEC-01 — Realistic public demos lacked clear, persistent disclosure

Severity before remediation: High
Status in branch: Remediated; deployment and production verification pending

The source intentionally exposes finance, checkout, student, admin, profile, application,
and settings interfaces (`frontend/src/App.tsx`, routes at lines 80–123). Before this
branch, these pages looked like functional services, used realistic sample identities and
transactions, and were indexable. Password and payment-looking fields increased the risk
that a visitor or automated classifier could mistake the demos for real account flows.

Remediation:

- `frontend/src/components/DemoNotice.tsx` adds an always-visible disclosure stating that
  the interface and records are fictional and that visitors must not enter personal,
  password, or payment information.
- `frontend/src/components/RouteMetadata.tsx` marks every demo prefix
  `noindex, nofollow, noarchive` and supplies truthful demo titles and descriptions.
- `frontend/public/.htaccess` adds an `X-Robots-Tag` for the same demo prefixes, providing
  a crawler-visible control before JavaScript executes.
- `frontend/src/pages/Shopcart/Checkout.tsx` disables checkout fields and explicitly says
  that no personal or payment information is accepted, stored, or transmitted.
- `frontend/src/pages/EduQuestLMS/AccountSettings.tsx` and
  `frontend/src/pages/FinanceDashboard/Settings.tsx` disable password fields and explain
  that credentials are not accepted or transmitted.

Browser verification covered every declared demo route. Each displayed the disclosure
and the expected robots metadata.

### SEC-02 — SMTP credentials existed in reachable Git history

Severity: Critical if the historical credential is or was reusable
Status: Operational remediation required

Commit `7b6bdd2` added `backend/.env`; commit `0eb2341` removed it. The file contained the
keys `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_EMAIL_DESTINATION`. This report deliberately
does not reproduce their historical values. The current tracked tree does not contain
the `.env` file or a credential assignment.

Required response:

1. Rotate the Hostinger SMTP password associated with the historical account.
2. Verify the mailbox, forwarding rules, recovery methods, and recent sign-in activity.
3. Update the backend deployment secret with the new value and redeploy.
4. Confirm that the previous password is rejected.
5. Review whether other systems reused the same password and rotate them if applicable.
6. Only after rotation, decide whether to purge the file from Git history. Coordinate the
   history rewrite because it changes commit IDs and requires all clones and forks to be
   replaced or carefully rebased.

Git-history cleanup cannot substitute for credential rotation; existing clones, caches,
or mirrors may retain the old object.

### SEC-03 — Contact email construction accepted excessive input and exposed data in HTML

Severity before remediation: Medium
Status in branch: Remediated; backend deployment pending

The previous handler interpolated user input into HTML email, had no explicit body-size
or field-length bounds, logged submitted data, and could attempt SMTP with placeholder or
missing configuration.

`backend/index.js` now:

- limits JSON bodies to 16 KiB;
- trims and validates all contact and waitlist fields;
- caps names at 100 characters, email at 254, and messages at 5,000;
- uses a fixed subject and plain-text body;
- places the validated submitter address only in `replyTo`;
- disables Nodemailer file and URL access;
- fails closed with HTTP 503 if SMTP credentials are absent;
- removes personal data from logs and returns generic error responses;
- disables the Express signature and adds restrictive API security headers; and
- returns JSON 404 responses for undeclared endpoints.

The integration suite verifies valid health behavior, invalid contact rejection, missing
SMTP failure, oversized-body rejection, generic 404 behavior, and security headers
without sending an email.

### SEC-04 — Production currently returns the SPA shell for arbitrary paths

Severity: Medium
Status in branch: Remediated in Hostinger configuration; deployment pending

Read-only checks on 2026-08-02 showed that `/hrm/profile`,
`/eduquest/student`, and an arbitrary nonexistent path all returned HTTP 200 with the
same application shell. This makes unwanted or misleading paths appear valid and weakens
removal signals.

`frontend/public/.htaccess` now serves only real files and an explicit allowlist of
declared SPA routes. Everything else uses the static `404.html` error document and an
HTTP 404 response. The browser-side wildcard still renders a useful not-found screen and
applies `noindex`; the web-server response is the authoritative production control.

### SEC-05 — Production header and canonical-host policy is incomplete

Severity: Medium
Status in branch: Remediated in frontend configuration; deployment pending

On 2026-08-02, HTTPS worked on both apex and `www`, and HTTP redirected to HTTPS on each
host, but `www` did not redirect to the canonical apex. The frontend response lacked a
complete CSP, HSTS, framing protection, MIME sniffing protection, referrer policy, and
permissions policy.

The new Hostinger configuration redirects `www` to `https://axythic.com`, redirects the
apex from HTTP to HTTPS, disables directory listing, removes framework disclosure where
supported, and sets:

- a resource allowlist CSP with no frames, objects, workers, or inline script attributes;
- HSTS for the apex and subdomains;
- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`;
- a restrictive permissions policy;
- cross-origin opener/resource policies; and
- `strict-origin-when-cross-origin`.

These directives depend on Apache/LiteSpeed modules enabled by the hosting provider and
must be verified after deployment.

### SEC-06 — API CORS is broad and the public form has no server-side rate limit

Severity: Medium
Status: Open, documented

`backend/index.js` currently uses `cors()` with its default `Access-Control-Allow-Origin:
*` behavior. Production preflight also advertised broad methods. The public contact and
waitlist endpoints do not have an application-level rate limiter. CORS does not itself
prevent non-browser abuse, but constraining it reduces unintended browser callers, and
rate limiting helps protect SMTP and compute resources.

This branch does not guess a production proxy, trusted-origin list, or durable rate-limit
store. Before the backend deployment, configure an explicit allowlist containing
`https://axythic.com` and any documented preview origins, restrict allowed methods per
endpoint, and add rate limiting at Vercel/edge or with a shared store. Do not rely on an
in-memory counter in a serverless process.

### SEC-07 — Dependency advisories remain where the safe upgrade path is breaking

Severity: Context-dependent
Status: Accepted temporarily; monitor and schedule upgrades

Non-breaking lockfile updates resolved the current PostCSS and backend transitive
advisories. Forced upgrades were intentionally not run.

Remaining frontend audit result: four advisories (three high, one moderate).

- React Router 7.18.2 is reported for an RSC action/CSRF advisory. This application uses
  a client-side `BrowserRouter` and has no React Server Components or server actions.
  npm's proposed forced change would downgrade the package and is not an appropriate
  automated remediation. Monitor the upstream fix and retest when a suitable release is
  available.
- Vite 5 and its esbuild dependency have development-server advisories. The production
  artifact is static and the development server is not deployed. Resolving the reports
  requires a Vite major upgrade; schedule that upgrade and regression test it.

Remaining backend audit result: one high advisory.

- Nodemailer 8.0.11 is reported for SSRF/local-file access involving the `raw` message
  option. Axythic does not accept or use `raw`, and the contact mail explicitly disables
  URL and file access. Nodemailer 9 is a major upgrade, so it was not applied without a
  production mail compatibility test. Schedule the upgrade.

## Git history review

The demo additions align with ordinary feature commits:

| Demo family | Introducing commit |
| --- | --- |
| Finance dashboard | `e7221e8` |
| Shopcart | `b758a6b` |
| EduQuest LMS | `a34c08a` |
| HRM platform | `9be9280` |
| 3D portfolio and fitness work | `ec443f6` |

Historical `node_modules` directories were also committed and later removed. They are not
present in the current tree. This is repository hygiene debt rather than evidence that
the current deployment executes those historical copies.

## Runtime external-resource inventory

| Destination | Purpose | Data / risk | Decision |
| --- | --- | --- | --- |
| `https://axythicbackend.vercel.app/api/contact` | Marketing contact form | Submitted name, email, and message | Required; hardened backend and CSP allow only this API |
| `images.unsplash.com` | Demo imagery | Browser IP, URL, and request metadata | Retained for visual demos; CSP-scoped |
| `i.pravatar.cc` | Demo avatars | Browser IP, URL, and request metadata | Retained for fictional demo content; CSP-scoped |
| `ui-avatars.com` | Generated demo avatars | Text encoded in image URL plus request metadata | Retained; use fictional values only |
| `placehold.co` | Placeholder imagery | Browser IP, URL, and request metadata | Retained; CSP-scoped |
| `cdn.simpleicons.org` | Brand icons | Browser IP, URL, and requested icon name | Retained; CSP-scoped |
| Hostinger SMTP | Contact delivery from backend | Contact message and reply address | Required; rotate historical credential and verify account |

No runtime Google Fonts request from the deployable source, third-party JavaScript,
iframe, analytics beacon, payment SDK, or credential provider was found.

## Production deployment and verification checklist

Do not request a Google review until every item below is recorded with date, operator,
and evidence.

- [ ] Rotate the historical SMTP password and update the Vercel secret.
- [ ] Review SMTP account access, recovery methods, forwarding rules, and sent activity.
- [ ] Build the frontend from the reviewed commit with `npm ci && npm run build`.
- [ ] Deploy the exact contents of `frontend/dist`, including `.htaccess` and `404.html`,
      to the Hostinger document root.
- [ ] Deploy the reviewed backend commit to Vercel after setting the rotated secrets.
- [ ] Confirm `http://axythic.com/*` and both `www` schemes make a single permanent
      redirect to the equivalent `https://axythic.com/*` URL.
- [ ] Confirm a random path returns HTTP 404, the error page, and `noindex`.
- [ ] Confirm all portfolio-demo routes return `X-Robots-Tag: noindex, nofollow,
      noarchive`, show the persistent demo notice, and expose no enabled password or
      checkout inputs.
- [ ] Confirm `/`, `/privacy-policy`, and `/terms` return HTTP 200 with their intended
      canonical, title, description, and `index, follow`.
- [ ] Confirm the deployed CSP and other security headers match the reviewed policy and
      do not cause console or image errors.
- [ ] Restrict backend CORS and add serverless-compatible rate limiting.
- [ ] Test one authorized contact submission using non-sensitive test data and confirm
      the destination, reply-to behavior, logs, and error handling.
- [ ] Re-run dependency, secret, malware-pattern, broken-link, and browser checks against
      the deployed artifact.
- [ ] Check Hostinger file manager, access logs, Vercel deployments, DNS records, domain
      ownership, Search Console users, and other administrator accounts for unknown
      entries.
- [ ] Review Search Console Security Issues and URL Inspection for the affected examples.
- [ ] Submit a review only after the live site—not merely this branch—passes all checks.

## Ongoing controls

- Enable MFA for the registrar, Hostinger, Vercel, Git provider, SMTP account, and Google
  Search Console.
- Use unique credentials and the hosting platforms' secret stores; never commit `.env`
  files.
- Add secret scanning and npm audit reporting to CI, with a documented exception process.
- Pin production deployments to reviewed commits and retain deployment logs.
- Review third-party image dependencies periodically or self-host approved assets.
- Treat future portfolio routes as demos by default: persistent disclosure, fictional
  data, no credential/payment collection, and both meta and header-level `noindex`.
- Re-run this audit after a Vite, React Router, Express, or Nodemailer major upgrade.
