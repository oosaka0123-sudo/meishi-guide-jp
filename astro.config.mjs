import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://meishi-guide.jp',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always'
});
