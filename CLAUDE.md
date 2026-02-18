# Ascendo — SvelteKit Corporate Site

Single-page corporate website for ASCENDO (Santo Domingo holding company), migrated from Nuxt 2 to SvelteKit 2 + Svelte 5 + TypeScript.

## Stack

- **Framework:** SvelteKit 2, Svelte 5 (runes mode)
- **Language:** TypeScript (strict)
- **Styling:** Modern CSS — no preprocessor. Viewport-relative `calc()` sizing, CSS nesting, custom properties.
- **CMS:** DatoCMS (GraphQL API via `graphql-request`)
- **Images:** `@datocms/svelte` Image component (blur-up, srcSet, webpSrcSet)
- **SEO:** `@datocms/svelte` Head component for DatoCMS `_seoMetaTags`
- **Deployment:** Cloudflare Workers (`adapter-cloudflare`)
- **Package manager:** pnpm

## Data Flow

```
DatoCMS GraphQL API
    ↓
src/lib/server/datocms.ts    (server-only, uses DATO_API_KEY)
    ↓
src/routes/+page.server.ts   (load function returns homepage + tags)
    ↓
src/routes/+page.svelte      (renders Intro → Companies → Contact → Footer)
    ↓
src/lib/components/*.svelte   (all props passed top-down)
```

## CSS Conventions

All sizing uses viewport-relative `calc()` replacing the legacy SCSS system:

- **Mobile (< 768px):** `calc(px / 375 * 100vw)` — relative to 375px design width
- **Desktop (≥ 768px):** `calc(px / 1440 * 100vw)` — relative to 1440px design width
- **Breakpoint:** `@media (min-width: 768px)` for desktop overrides
- **Colors:** CSS custom properties in `app.css` (e.g. `--color-text`, `--color-blue`)

Content rendered with `{@html}` (CMS rich text) requires `:global` modifier in scoped styles.

## Environment Variables

Accessed via `$env/dynamic/private` (runtime, not build-time):

- `DATO_API_KEY` — DatoCMS API bearer token
- `SENDGRID_API_KEY` — SendGrid v3 API key for contact form

Local: `.env` file (gitignored). Production: Cloudflare dashboard / `wrangler secret put`.

## Contact Form

Uses SvelteKit form action (`?/contact`) with `use:enhance` for progressive enhancement.
Email sent via direct `fetch` to SendGrid v3 REST API (no `@sendgrid/mail` — incompatible with Workers runtime).

## Development

```bash
pnpm dev       # local dev server
pnpm check     # TypeScript + Svelte type checking
pnpm build     # production build for Cloudflare Workers
pnpm lint      # Prettier check
```

## Svelte MCP Tools

You have access to comprehensive Svelte 5 and SvelteKit documentation via the Svelte MCP server:

1. **list-sections** — Discover available documentation sections. Use FIRST.
2. **get-documentation** — Retrieve full docs for specific sections.
3. **svelte-autofixer** — Validate Svelte code. MUST use on every `.svelte` file before finalizing.
4. **playground-link** — Generate Svelte Playground links (only if code is NOT written to project files).
