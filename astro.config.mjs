import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isPages = process.env.GITHUB_PAGES === '1';

export default defineConfig({
  site: isPages ? 'https://oosaka0123-sudo.github.io' : 'https://meishi-guide.jp',
  base: isPages ? '/meishi-guide-jp/' : '/',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always'
});
