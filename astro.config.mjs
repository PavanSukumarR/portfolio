import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://PavanSukumarR.github.io',
  base: '/portfolio/',
  integrations: [tailwind()],
});