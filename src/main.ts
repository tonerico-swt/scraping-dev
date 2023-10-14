import puppeteer from "puppeteer";

(async () => {
  const options = {
    headless: false,
    slowMo: 200,
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
