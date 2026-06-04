// @ts-check
import { defineConfig } from "astro/config";

const site = process.env.ASTRO_SITE ?? "https://insidae.github.io";
const base = process.env.ASTRO_BASE ?? "/belgravia-dance";

export default defineConfig({
  site,
  base,
  trailingSlash: "always"
});
