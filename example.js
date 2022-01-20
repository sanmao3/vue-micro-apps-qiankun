const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    defaultViewport: null
  });
  
  const page = await browser.newPage();

  // Open page.
  await page.goto('https://www.google.com/');

  // Type in input.
  await page.type('input[name=q]', 'chrome version', {delay: 200});

  // Press enter.
  await page.keyboard.press('Enter')

  // Wait for searching.
  await page.waitForSelector('#rcnt');

  // Take a screenshot.
  await page.screenshot({ path: 'example.png' });

  // Wait for a moment.
  await page.waitForTimeout(1000);

  // Keep the browser open.
  browser.close();
})();