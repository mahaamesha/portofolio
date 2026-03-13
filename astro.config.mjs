import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site =
  process.env.SITE_URL ??
  (process.env.CF_PAGES_URL ? `https://${process.env.CF_PAGES_URL}` : "http://localhost:4321");

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  site
});
