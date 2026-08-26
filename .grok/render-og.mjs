import { chromium } from "playwright";
import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(root, "fonts/f5.woff2"), join(root, "fonts/fraunces-700-latin.woff2"));
copyFileSync(join(root, "fonts/f19.woff2"), join(root, "fonts/source-sans-600-latin.woff2"));
copyFileSync(join(root, "fonts/f26.woff2"), join(root, "fonts/source-sans-700-latin.woff2"));

const browser = await chromium.launch({ args: ["--disable-web-security"] });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(`file://${root}/og-card.html`, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({
  path: join(root, "og-raw.png"),
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("wrote", join(root, "og-raw.png"));
