import { test } from "@playwright/test";

test('kakaotalkShoping ', async ({ page }) => {
  await page.goto(
    'https://store.kakao.com/',
    {
      timeout : 3000,
      waitUntil : "domcontentloaded"
    }
    );}
);