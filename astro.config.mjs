// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anurag.be',
  integrations: [
    react(),
    sitemap(),
    // Run Google Analytics off the main thread for a faster page.
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow the build to optimise local assets with sharp (default service).
    responsiveStyles: true,
  },
});
