import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ocphaneuf.github.io',
  base: '/Personal-Website',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});
