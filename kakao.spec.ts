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

test('kakaoShoping Home Check', async ({ page }) => {
  // 홈 화면 헤더 정보 확인
  const compareMainHeader = [ '톡딜', 'MVP', '맞춤추천', '전체톡딜'];
  
  const talkDeal = await page.locator("//a[@class='link_menu ng-tns-c85-0']");
  const talkDealTxt = await talkDeal.allTextContents();
  await expect(talkDealTxt == compareMainHeader);
  
  // 홈 화면 > 톡딜 리스트 정보 확인
  const talkDealSub = ['전체', '식품', '생활', '디지털', '뷰티 · 패션']
  const mvpHeaderMenu = ['전체', '간편식 · 반찬', '생수 · 음료 · 커피', '정육 · 수산 · 과일', '빵 · 간식', '건강식품', '리빙', '뷰티 · 바디케어', '패션']
  const totalTalkDealMenu = ['전체', '식품', '생활', '디지털/가전', '패션의류', '뷰티', '스포츠/레저', '패션잔화', '인테리어', ' 출산/유아동']

  const subMenu = await page.locator("//a[@class='link_category ng-tns-c85-0']")
  const subMenuTxt = await subMenu.allTextContents();
  await expect(subMenuTxt == talkDealSub);

  // MVP Tap click 및 확인
  const mvp = await page.click('text=MVP');

  const mvpHeader = await page.locator("//a[@class='link_category ng-tns-c85-37']")
  const mvpHeaderTxt = await mvpHeader.allTextContents();
  await expect(mvpHeaderTxt == mvpHeaderMenu);

  // 전체톡딜 Tab click 및 확인
  const totalTalkDeal = await page.click('text=전체톡딜');
  const totalTalkMenu = await page.locator("//a[@class='link_tab']/span")
  const totalTalkMenuTxt = await totalTalkMenu.allTextContents();
  await expect(totalTalkMenuTxt == totalTalkDealMenu);
});
