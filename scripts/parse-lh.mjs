import fs from 'node:fs';
const r=JSON.parse(fs.readFileSync('qa/lighthouse.json','utf8'));
console.log(JSON.stringify({
performance:r.categories.performance.score,
accessibility:r.categories.accessibility.score,
bestPractices:r.categories['best-practices'].score,
seo:r.categories.seo.score,
FCP:r.audits['first-contentful-paint'].displayValue,
LCP:r.audits['largest-contentful-paint'].displayValue,
CLS:r.audits['cumulative-layout-shift'].displayValue,
TBT:r.audits['total-blocking-time'].displayValue
},null,2));
