# Axythic Technical SEO Audit

Audit date: 2026-08-02
Canonical origin: `https://axythic.com`
Status: source remediation complete; production deployment and verification pending

## Executive summary

The site has three pages that should be searchable: the home page, privacy policy, and
terms page. Every other declared frontend route is an interactive portfolio demo and
should remain publicly viewable but excluded from search. There are no authenticated or
private application routes in this repository.

The branch adds route-specific metadata, canonical URLs, Open Graph and Twitter metadata,
dual-layer demo `noindex`, an allowlisted SPA rewrite policy, a real HTTP 404 plan,
canonical host redirects, corrected structured data, and a sitemap containing only the
three indexable pages.

The production server still exhibits the old behavior until deployment. On 2026-08-02 it
served HTTP 200 and the SPA shell for arbitrary paths and kept `www` as a separate HTTPS
host. The Hostinger configuration in this branch must be deployed and verified before
the audit can be marked complete.

## Indexability and route matrix

Expected status refers to the post-deployment web-server behavior. A trailing slash is
normalized to the same route by the rewrite rules.

| Route | Type | Expected status | Robots policy | Canonical / disposition | Sitemap |
| --- | --- | ---: | --- | --- | --- |
| `/` | Public marketing | 200 | `index, follow` | `https://axythic.com/` | Yes |
| `/privacy-policy` | Public legal | 200 | `index, follow` | `https://axythic.com/privacy-policy` | Yes |
| `/terms` | Public legal | 200 | `index, follow` | `https://axythic.com/terms` | Yes |
| `/axythicfin/dashboard` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/shopcart` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; checkout inputs disabled | No |
| `/portfolio` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/fitness-app` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest` | Portfolio demo redirect entry | 200 then client replace | `noindex, nofollow, noarchive` | Replaces URL with `/eduquest/student` | No |
| `/eduquest/student` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/courses` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/inbox` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/tasks` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/team` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/settings` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; password inputs disabled | No |
| `/eduquest/student/plan` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/student/help` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/courses` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/eduquest/admin` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/dashboard` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/personnel` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/profile` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/applications` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/talent` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/events` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| `/hrm/settings` | Portfolio demo | 200 | `noindex, nofollow, noarchive` | Self-canonical; clearly labeled demo | No |
| Any undeclared frontend path | Invalid | 404 | `noindex, nofollow, noarchive` | No indexable canonical target | No |
| `/api/health` on backend origin | API-only | 200 JSON | `X-Robots-Tag: noindex, nofollow, noarchive` | No HTML canonical | No |
| `/api/waitlist` on backend origin | API-only, POST | 200/400 JSON | `X-Robots-Tag: noindex, nofollow, noarchive` | No HTML canonical | No |
| `/api/contact` on backend origin | API-only, POST | 200/4xx/5xx JSON | `X-Robots-Tag: noindex, nofollow, noarchive` | No HTML canonical | No |
| Any undeclared backend path | Invalid API | 404 JSON | `X-Robots-Tag: noindex, nofollow, noarchive` | No HTML canonical | No |

Bare paths such as `/login`, `/admin`, `/dashboard`, `/profile`, and `/student` are not
declared routes and must return 404. The similarly named screens under `/eduquest`,
`/hrm`, and `/axythicfin` are demos, not authentication-protected products.

## Metadata

`frontend/src/components/RouteMetadata.tsx` provides:

- a unique, descriptive title and description for each indexable page;
- truthful demo-family titles and descriptions;
- canonical URLs on the HTTPS apex origin;
- matching `robots` and `googlebot` directives;
- Open Graph type, site name, URL, title, description, and image; and
- Twitter card, URL, title, description, and image metadata.

The component updates metadata on SPA navigation. The base document in
`frontend/index.html` contains the home-page defaults, so a crawler that does not execute
JavaScript still receives truthful homepage metadata. Demo routes additionally receive
the HTTP `X-Robots-Tag`, which does not depend on client rendering.

Current social metadata uses the existing `/vite.png` asset because the previous
`/og-preview.png` reference did not exist. A purpose-designed, accurately branded
1200×630 social image is a recommended follow-up; its creation was not necessary to
remediate the deceptive-pages risk.

## Structured data

The base document contains an `Organization` JSON-LD record for Axythic. This branch:

- keeps the organization name, URL, description, contact point, and postal address;
- changes the logo reference to the existing `/axythic-logo.svg`; and
- removes the empty `sameAs` array rather than inventing social profiles.

The JSON parses successfully, and the exact inline block is allowlisted by hash in the
production CSP. Before deployment, the owner should verify the legal business name,
telephone number, address, and contact type against current public business records.
Add social/profile URLs only after ownership is verified.

## Sitemap and robots

`frontend/public/sitemap.xml` contains only:

- `https://axythic.com/`
- `https://axythic.com/privacy-policy`
- `https://axythic.com/terms`

All entries use the audit date `2026-08-02` as `lastmod`. The XML validates. Demo,
redirect-entry, API, and invalid routes are excluded.

`frontend/public/robots.txt` allows crawling and points to
`https://axythic.com/sitemap.xml`. This is intentional: `robots.txt` should not block the
demo URLs because crawlers must be able to retrieve their `noindex` directives. Robots
exclusion is not an access-control mechanism.

## Redirect and status-code policy

`frontend/public/.htaccess` defines the desired production policy:

1. Redirect `www.axythic.com` to the HTTPS apex while preserving path and query.
2. Redirect HTTP apex requests to HTTPS.
3. Serve real files and directories directly.
4. Rewrite only the exact React routes listed in the application.
5. Return HTTP 404 for all other paths using `404.html`.

The homepage and legal pages should not pass through unnecessary redirect chains. The
`/eduquest` entry currently performs a client-side replace to `/eduquest/student`; because
the entire family is excluded from search, this is not an indexability defect. A
server-side 301/308 redirect may be added later for cleaner HTTP semantics if Hostinger
route handling is updated in tandem.

The built-in Vite preview server always falls back to the SPA and therefore returned 200
for the browser-tested invalid path. That is expected in local preview and is why the
Hostinger-level production check is mandatory.

## Content and heading review

Desktop and mobile browser QA found:

- one visible H1 on each indexable page;
- a descriptive homepage title and meta description;
- working navigation from the mobile menu to the contact section;
- no horizontal mobile overflow;
- no broken runtime images or browser console errors;
- no external script or iframe; and
- native required-field validation blocking an empty contact submission.

Some demo subviews use dashboard-style H2 headings instead of H1. They are intentionally
`noindex`, so this is not a search-quality priority. The global persistent demo notice is
more important for visitor trust.

## Prioritized SEO recommendations

### P0 — Before Google review

- Deploy the exact reviewed frontend build and Hostinger configuration.
- Verify canonical-host redirects, real 404 responses, demo `X-Robots-Tag`, and security
  headers from outside the hosting network.
- Confirm the three sitemap URLs return 200 and the sitemap itself is reachable.
- Inspect the examples in Search Console and confirm their live and rendered responses.
- Submit the review only after all security actions in `SECURITY_AUDIT.md` are complete.

### P1 — Search relevance and trust

- Replace the generic social image with a verified Axythic-branded 1200×630 asset.
- Add factual, substantial service pages only where Axythic can support the claims with
  real capabilities, process details, case studies, and contact information. Candidate
  topics include custom software, web applications, mobile applications, and product
  design; do not create thin location or keyword-variant pages.
- Add an About page with verifiable team/business details and a Contact page with the
  official address, service area, response expectations, and privacy link.
- Add verifiable portfolio case studies separately from interactive demos, clearly
  distinguishing client work, concepts, and fictional prototypes.
- Review the privacy policy against the actual contact-data flow, processors, retention,
  and user-rights process. Add cookie disclosure only if the live site begins setting
  non-essential cookies or analytics.

### P2 — Rendering and maintenance

- Consider server-side generation or prerendering for the three indexable pages so their
  route-specific metadata and content are present without JavaScript.
- Automate sitemap dates from meaningful content changes rather than build time.
- Add a CI crawler that fails on broken internal links, missing titles/descriptions,
  indexable non-200 pages, canonical conflicts, or demo pages without `noindex`.
- Monitor Search Console coverage, security issues, manual actions, Core Web Vitals, and
  sitemap processing after deployment.

## Production acceptance checks

- [ ] One canonical host: every HTTP or `www` variant permanently redirects to the
      equivalent HTTPS apex URL.
- [ ] Exactly the three intended pages are indexable and included in the sitemap.
- [ ] Every declared demo route is reachable, visibly disclosed, and has both meta and
      HTTP-level `noindex`.
- [ ] An unpredictable path returns HTTP 404 and the static not-found page.
- [ ] Page source for `/` has valid base metadata and Organization JSON-LD.
- [ ] Rendered metadata for each public page matches the matrix.
- [ ] No CSP violations, missing images, mixed content, unsafe redirects, or console
      errors occur.
- [ ] Search Console URL Inspection agrees with the intended canonical and indexing
      policy after recrawl.
