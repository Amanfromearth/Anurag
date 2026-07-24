// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anurag.be',
  integrations: [
    react(),
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      // The home page is the most important entry point; weight it highest.
      serialize(item) {
        if (item.url === 'https://anurag.be/') {
          item.priority = 1.0;
        } else if (item.url.includes('/projects/')) {
          item.priority = 0.7;
        } else {
          item.priority = 0.8;
        }
        return item;
      },
    }),
    // Run Google Analytics off the main thread for a faster page.
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
    // Minify HTML/CSS/JS in the final build (images already handled by Astro).
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow the build to optimise local assets with sharp (default service).
    responsiveStyles: true,
  },
});
