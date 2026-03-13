# Engineering Portfolio

Astro + TypeScript + Tailwind CSS portfolio site with content collections for project case studies and static deployment compatibility for Cloudflare Pages.

## Run locally

1. Install Node.js 20 or newer.
2. Install dependencies with `npm install`.
3. Start the dev server with `npm run dev`.
4. Build for production with `npm run build`.
5. Preview the production build with `npm run preview`.

## Add a new project

1. Create a new Markdown file inside `src/content/projects/`.
2. Add all required frontmatter fields defined in `src/content.config.ts`.
3. Use one of the supported categories: `design3d`, `software`, or `electrical`.
4. Write the case study body in Markdown below the frontmatter.
5. The project list and project detail page will be generated automatically from the new content entry.

## Deploy to Cloudflare Pages

This project uses Astro static output and is ready for Cloudflare Pages.

### Option 1: Deploy from GitHub

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, click `Workers & Pages` -> `Create` -> `Pages` -> `Connect to Git`.
3. Select your repository.
4. Use these build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20`
5. Deploy.

Cloudflare will give you a URL like `https://your-project.pages.dev`.

### Option 2: Direct upload

1. Install dependencies with `npm install`.
2. Build with `npm run build`.
3. In Cloudflare Pages, create a new Pages project using `Direct Upload`.
4. Upload the generated `dist` folder.

## Notes for production

- Canonical URLs are generated automatically from `CF_PAGES_URL` on Cloudflare Pages.
- If you later attach a custom domain, set `SITE_URL` in Cloudflare Pages environment variables to your final domain, such as `https://portfolio.yourdomain.com`.
