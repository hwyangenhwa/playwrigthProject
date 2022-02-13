import { test } from "@playwright/test";
import { DCT_ROWS } from "opencv4nodejs";

test.beforeEach(async ({ page }) => {
  await page.goto('https://store.kakao.com/',
    {
      timeout : 3000,
      waitUntil : "domcontentloaded"
    });
  });

test('kakaoShoping Header Check', async ({ page }) => {
  const kakaoShopHeader = await page.locator("ul[class='list_gnb'] >> li")
  const count = await kakaoShopHeader.count()
  
  for (let i=0; i < count; ++i)
    console.log(await kakaoShopHeader.nth(i).textContent());
});
