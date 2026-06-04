// @ts-check
import { defineConfig } from "astro/config";

const site = process.env.ASTRO_SITE ?? "https://example.com";
const base = process.env.ASTRO_BASE ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always"
});
