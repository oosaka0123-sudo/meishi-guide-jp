export type NavItem = {
  href: string;
  label: string;
  short: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/how-to/", label: "名刺の作り方", short: "作り方" },
  { href: "/size/", label: "サイズ・規格", short: "サイズ" },
  { href: "/paper/", label: "用紙・厚さ", short: "用紙" },
  { href: "/design/", label: "デザインの基本", short: "デザイン" },
  { href: "/printing/", label: "印刷・入稿", short: "印刷" },
  { href: "/mistakes/", label: "よくある失敗", short: "失敗例" },
  { href: "/faq/", label: "FAQ", short: "FAQ" },
  { href: "/about/", label: "運営者情報", short: "About" },
];

export const FOOTER_ITEMS: NavItem[] = [
  { href: "/privacy/", label: "プライバシーポリシー", short: "Privacy" },
  { href: "/contact/", label: "お問い合わせ", short: "Contact" },
];

export const ALL_ROUTES: NavItem[] = [
  { href: "/", label: "トップ", short: "Top" },
  ...NAV_ITEMS,
  ...FOOTER_ITEMS,
];
