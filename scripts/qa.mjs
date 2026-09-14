import { chromium } from 'playwright-core';
import fs from 'node:fs';

const base = 'http://127.0.0.1:4324';
const routes = ['/', '/how-to/', '/size/', '/paper/', '/design/', '/printing/', '/mistakes/', '/faq/', '/about/', '/privacy/', '/contact/'];
const viewports = [
  { name: '360', width: 360, height: 800 },
  { name: '390', width: 390, height: 844 },
  { name: '430', width: 430, height: 932 },
  { name: 'desktop', width: 1440, height: 1000 }
];

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true
});
const report = { pages: [], consoleErrors: [], badLinks: [] };
for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') report.consoleErrors.push({ viewport: vp.name, text: msg.text() });
  });
  page.on('pageerror', err => report.consoleErrors.push({ viewport: vp.name, text: String(err) }));

  for (const route of routes) {
    const res = await page.goto(base + route, { waitUntil: 'networkidle' });
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      title: document.title,
      h1: document.querySelectorAll('h1').length,
      images: document.images.length
    }));
    report.pages.push({ viewport: vp.name, route, status: res?.status(), ...metrics, overflow: metrics.scrollWidth > metrics.clientWidth + 1 });
    if (route === '/' && ['360','390','430','desktop'].includes(vp.name)) {
      await page.screenshot({ path: `qa/home-${vp.name}.png`, fullPage: true });
    }
    const hrefs = await page.locator('a[href]').evaluateAll(els => els.map(a => a.getAttribute('href')).filter(Boolean));
    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const target = new URL(href, base).pathname;
      try {
        const r = await page.request.get(base + target);
        if (r.status() >= 400) report.badLinks.push({ from: route, href, status: r.status() });
      } catch (e) {
        report.badLinks.push({ from: route, href, status: 'ERR' });
      }
    }
  }
  await context.close();
}

await browser.close();
fs.writeFileSync('qa/report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

