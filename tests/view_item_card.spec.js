// @ts-check
const { test, expect } = require('@playwright/test');


test('Просмотр карточки товара через быстрый просмотр', async ({ page }) => {

  await test.step('Открыть стартовую страницу', async () => {
    await page.goto('http://automationpractice.com/')
    await expect(page).toHaveTitle(/My Store/);
  })

  await test.step('Навести курсор на карточку первого товара', async () => {
    const items =  page.locator('#homefeatured')
    await items.scrollIntoViewIfNeeded()
    await page.hover('text=Faded Short Sleeve T-shirts')
  })

  await test.step('Нажать на нопку быстрого просмотра', async () => {
    await page.click('text=Quick view')
    await page.waitForLoadState('load')

  })
})







