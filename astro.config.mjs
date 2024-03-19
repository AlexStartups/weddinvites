import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
//import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
/* export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), react()],
  adapter: vercel() */


import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});