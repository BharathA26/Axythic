# Google Search Console Security Review Draft

> **Do not submit this text yet.** It is intentionally conditional. Replace every
> bracketed placeholder and complete both audit checklists only after the reviewed code
> is live. A source-code change, by itself, is not a production remediation.

## Suggested review request

On `[DEPLOYMENT DATE AND TIME WITH TIME ZONE]`, we completed a security and content-trust
review of `https://axythic.com` and deployed the reviewed remediation commit
`[DEPLOYED COMMIT SHA]`.

Our investigation found that the site intentionally included several interactive
portfolio demonstrations for finance, e-commerce, learning management, human resources,
fitness, and landing-page design. These demonstrations used fictional sample people,
accounts, transactions, applications, and orders. They were not phishing pages and we
found no credential exfiltration, malware, cloaking, hidden iframe, injected script, or
unauthorized redirect in the reviewed source or built artifact.

However, we identified a presentation and indexing problem: the demonstrations were
publicly reachable and realistic, but they did not consistently display a persistent
portfolio-demo disclosure or tell visitors not to enter real personal, password, or
payment information. They also lacked explicit search-engine exclusion. We understand
that this could make the pages appear misleading.

We made and deployed the following changes:

- Every demonstration now displays a persistent notice that it is an interactive
  portfolio demo, that all people/accounts/orders/transactions are fictional sample
  data, and that visitors must not enter real personal, password, or payment information.
- Password fields in the finance and education demos and all checkout data fields in the
  commerce demo are disabled. These demos do not accept, store, or transmit credentials
  or payment details.
- Every demo route now returns `X-Robots-Tag: noindex, nofollow, noarchive` and rendered
  robots metadata with the same policy.
- Only the home, privacy, and terms pages are indexable and included in the sitemap.
- Undeclared paths now return a genuine HTTP 404 instead of the application shell.
- The canonical host is HTTPS on `axythic.com`, with permanent redirects from HTTP and
  `www`.
- We added a restrictive Content Security Policy and other browser security headers.
- We hardened the contact API with request-size and field validation, safe plain-text
  mail construction, generic errors, no personal-data logging, and no file or URL access
  in email generation.

During repository history review, we found that an SMTP environment file had previously
been committed and later removed. We did not include its values in our audit records.
`[CREDENTIAL ROTATION CONFIRMATION: state the rotation date, affected account, account
review result, deployment-secret update, and confirmation that the old credential no
longer works]`.

After deployment, we verified:

`[PRODUCTION VERIFICATION RESULTS: include dated evidence for canonical redirects, a
random-path 404, demo X-Robots-Tag responses, visible disclosures, disabled sensitive
fields, CSP/no console errors, the three indexable pages, sitemap, and backend behavior]`.

We also reviewed `[HOSTINGER / VERCEL / DNS / DOMAIN / SEARCH CONSOLE / GIT / SMTP
ADMINISTRATOR AND ACCESS-LOG RESULTS]` for unauthorized users, deployments, files,
forwarding rules, DNS records, or other changes. `[STATE THE TRUTHFUL RESULT AND ANY
REMEDIATION—DO NOT WRITE "NONE" WITHOUT PERFORMING THE REVIEW.]`

The site owner has reviewed the live affected URLs and confirmed that the deployed pages
are clearly identified as fictional portfolio demonstrations and do not collect
sensitive data. We respectfully request a new review of `https://axythic.com`.

## Evidence to attach or retain

- Deployed commit SHA and immutable deployment identifiers
- Timestamped response headers for the apex, `www`, representative demo routes, and a
  random invalid route
- Screenshots of the persistent demo notice on finance, checkout, education settings,
  and HRM/profile examples
- Evidence that sensitive demo inputs are disabled
- Sitemap and robots responses
- Security-header/CSP verification with browser console output
- Credential-rotation and account-access review record, stored securely
- Hostinger and Vercel deployment/access logs
- DNS and Search Console user/ownership review
- Completed `SECURITY_AUDIT.md` and `SEO_AUDIT.md` acceptance checklists

## Final submission gate

- [ ] The reviewed commit is deployed to both frontend and backend.
- [ ] The historical SMTP credential is rotated and the old value is rejected.
- [ ] Hosting, registrar, DNS, source control, Vercel, SMTP, and Search Console access has
      been reviewed by an authorized owner.
- [ ] The live response—not local preview—passes every security and SEO acceptance check.
- [ ] Search Console examples have been inspected with live URL testing.
- [ ] All bracketed placeholders above have been replaced with precise, supportable facts.
- [ ] The final wording has been approved by the site owner.
- [ ] The authorized Search Console owner, not an automated tool, will submit the review.
