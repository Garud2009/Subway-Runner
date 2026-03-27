const { chromium } = require('playwright');
(async () => {
    console.log("Starting verification...");
    const browser = await chromium.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERR:', err.message));
    
    try {
        await page.goto('http://localhost:3000', { timeout: 10000 });
        console.log("Page loaded, waiting for splash screen progress...");
        await page.waitForTimeout(5000);
        await page.screenshot({ path: 'boot_verify.png' });
        console.log("Screenshot taken: boot_verify.png");
    } catch (e) {
        console.error("Verification failed:", e.message);
    } finally {
        await browser.close();
    }
})();
