const { test, expect } = require('@playwright/test');


test('Покупка через страницу товара', async ({ page }) => {

    await test.step('Открыть стартовую страницу', async () => {
      await page.goto('http://automationpractice.com/')
      
    })
  
    await test.step('Нажать на элемент Sign in', async () => {
        await page.click('text=Sign in');
      })
    
    await test.step('Ввести учетные данные', async () => {
        await page.click('input[name="email"]');
        // Fill input[name="email"]
        await page.fill('input[name="email"]', 'admin@rt.ru');
        // Click input[name="passwd"]
        await page.click('input[name="passwd"]');
        // Fill input[name="passwd"]
        await page.fill('input[name="passwd"]', 'admin');
    })

    await test.step('Кликнуть на кнопку "Sign in"', async () => {
        await page.click('button:has-text("Sign in")');
        
    })

    await test.step('Открытие стартовой страницы нажатием на изображение бренда', async () => {
        await page.click('img[alt="My Store"]');
        
    })

    await test.step('Навести курсор на карточку первого товара', async () => {
        const items =  page.locator('#homefeatured')
        await items.scrollIntoViewIfNeeded()
        await page.hover('text=Faded Short Sleeve T-shirts')
    })

    await test.step('Откытые страницы товара', async () => {
        await page.click('text=More');
        
    })

    await test.step('Нажать на кнопку добавить в корзину', async () => {
        await page.click('button:has-text("Add to cart")');
    })

    await test.step('Нажать на кнопку Proceed to checkout', async () => {
        await page.click('.btn.btn-default.button.button-medium');
    })

    await test.step('Подтверждение Summary', async () => {
        
        const btn = page.locator('#center_column >> text=Proceed to checkout');
        await btn.scrollIntoViewIfNeeded()
        await page.click('#center_column >> text=Proceed to checkout');
    })

    await test.step('Подтверждение шага заказа Adress', async () => {
        await page.click('button:has-text("Proceed to checkout")');
    })

    await test.step('подтверждение шага заказа Shipping', async () => {
        // Click #center_column >> text=Proceed to checkout
        await page.click('button:has-text("Proceed to checkout")');
  
        await page.click('.fancybox-item');

        await page.click('#uniform-cgv');

        const btn = page.locator('button:has-text("Proceed to checkout")');
        await btn.scrollIntoViewIfNeeded()
        await page.click('button:has-text("Proceed to checkout")');
            
    })
    
    await test.step('Подтверждение шага заказа Pay', async () => {   
        const btn = page.locator('text=Pay by bank wire (order processing will be longer)');
        await btn.scrollIntoViewIfNeeded()
        await page.click('text=Pay by bank wire (order processing will be longer)');
    })

    await test.step('Подтверждение заказа ', async () => {
        
        await page.click('button:has-text("I confirm my order")');

    })
  })