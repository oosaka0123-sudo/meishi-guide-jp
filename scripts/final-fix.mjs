import fs from 'node:fs';
const root='C:/Users/oosak/meishi-guide-jp/';
function patch(rel, fn){const p=root+rel; const s=fs.readFileSync(p,'utf8'); const n=fn(s); if(n===s) console.log('nochange',rel); else {fs.writeFileSync(p,n,'utf8'); console.log('patched',rel);}}
patch('src/layouts/BaseLayout.astro', s=>s
.replace('const siteName = "蜷榊絢縺ｮ隕区悽蟶ｳ 窶・MEISHI GUIDE JP";','const siteName = "名刺の見本帳 — MEISHI GUIDE JP";')
.replace('const pageTitle = path === "/" ? title : `${title }・・{siteName}`;','const pageTitle = path === "/" ? title : `${title}｜${siteName}`;')
.replace('const items = [{ href: "/", label: "繝医ャ繝・ }];','const items = [{ href: "/", label: "トップ" }];')
.replace('<a href="#main" class="skip-link">譛ｬ譁・∈繧ｹ繧ｭ繝・・</a>','<a href="#main" class="skip-link">本文へスキップ</a>'));
patch('src/components/Nav.astro', s=>s
.replace('menu!.hidden = false;','menu!.hidden = false;\n      requestAnimationFrame(() => menu!.classList.add("is-open"));')
.replace('menu!.hidden = true;','menu!.classList.remove("is-open");\n      setTimeout(() => { menu!.hidden = true; }, 220);')
.replace('closeBtn?.focus();','closeBtn?.focus();\n      const focusables = Array.from(menu!.querySelectorAll<HTMLElement>("a,button"));\n      (menu! as any)._focusables = focusables;'));
console.log('done');
patch('src/components/Nav.astro', s=>s
.replace('</style>','  .mobile-menu{opacity:0;clip-path:inset(0 0 100% 0);transition:clip-path .22s var(--ease-editorial),opacity .18s ease;}\n  .mobile-menu.is-open{opacity:1;clip-path:inset(0 0 0 0);}\n  .mobile-menu__nav li{opacity:0;transform:translateY(12px);transition:opacity .25s ease,transform .3s var(--ease-editorial);}\n  .mobile-menu.is-open .mobile-menu__nav li{opacity:1;transform:none;}\n  .mobile-menu.is-open .mobile-menu__nav li:nth-child(2){transition-delay:.03s}.mobile-menu.is-open .mobile-menu__nav li:nth-child(3){transition-delay:.06s}.mobile-menu.is-open .mobile-menu__nav li:nth-child(4){transition-delay:.09s}.mobile-menu.is-open .mobile-menu__nav li:nth-child(5){transition-delay:.12s}\n</style>')
.replace('if (e.key === "Escape" && !menu!.hidden) {','if (e.key === "Tab" && !menu!.hidden) {\n        const f = ((menu! as any)._focusables || []) as HTMLElement[];\n        if (f.length) { const first=f[0], last=f[f.length-1]; if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();} else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();} }\n      }\n      if (e.key === "Escape" && !menu!.hidden) {'));
