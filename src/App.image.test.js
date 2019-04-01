import puppeteer from 'puppeteer';

it('passes image snapshot test', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000`);
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
  await browser.close();
});
