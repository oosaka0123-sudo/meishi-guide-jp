import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const prefix = '/meishi-guide-jp';

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (name.endsWith('.html')) rewrite(p);
  }
}

function rewrite(file) {
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/(href|src)="\/(?!meishi-guide-jp\/)(?!\/)/g, `$1="${prefix}/`);
  fs.writeFileSync(file, s, 'utf8');
}

walk(root);
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('GitHub Pages paths rewritten');
