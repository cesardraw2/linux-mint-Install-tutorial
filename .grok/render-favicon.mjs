import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 96, height: 48 },
  deviceScaleFactor: 4,
});
await page.setContent(`<!DOCTYPE html>
<html><body style="margin:0;background:#c8c4b8;display:flex;gap:16px;align-items:center;padding:8px">
  <img src="file:///workspace/.grok/favicon.svg" width="16" height="16">
  <img src="file:///workspace/.grok/favicon.svg" width="32" height="32">
</body></html>`);
await page.waitForTimeout(150);
await page.screenshot({ path: "/workspace/.grok/favicon-16-32.png" });
await browser.close();
console.log("favicon preview ok");
