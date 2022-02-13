import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('https://store.kakao.com/',
    {
      timeout : 3000,
      waitUntil : "domcontentloaded"
    });
  });

test('kakaoShoping Header Check', async ({ page }) => {
  const compareKakaShopHeader = [ '홈', '브랜드데이new', '베스트', '라이브', '기획전' ];
  
  const kakaoShopHeader = await page.locator("ul[class='list_gnb'] >> li");
  const texts = await kakaoShopHeader.allTextContents();
  await expect(texts == compareKakaShopHeader);
});
