// @ts-check
const { test, expect } = require('@playwright/test');


function makeEmail() {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;}

test('Региcтрация нового клиента', async ({ page }) => {

  await test.step('Открыть стартовую страницу', async () => {
    await page.goto('http://automationpractice.com/index.php');
  })

  await test.step('Нажать на элемент Sign in', async () => {
    await page.click('text=Sign in');
  })

  await test.step('Заполнить поле email', async () => {
    await page.fill('input[name="email_create"]', makeEmail());
  })

  await test.step('Кликнуть на кнопку регитрации', async () => {
    await page.click('button:has-text("Create an account")');
    await page.waitForSelector('text=Your personal information')
  })

  await test.step('Заполнить анкетные данные ', async () => {
    await test.step('Имя', async () => {
        await page.click('input[name="customer_firstname"]');
        await page.fill('input[name="customer_firstname"]', 'Anton');
    })
    await test.step('Фамилия', async () => {
        await page.click('input[name="customer_lastname"]');
        await page.fill('input[name="customer_lastname"]', 'Zima');
    })
    await test.step('Пароль', async () => {
        await page.click('input[name="passwd"]');
        await page.fill('input[name="passwd"]', 'admin'); 
    })
    await test.step('Дата рождение', async () => {
        await page.selectOption('select[name="days"]', '10');
        await page.selectOption('select[name="months"]', '2');
        await page.selectOption('select[name="years"]', '1985');
    })
    await test.step('Адрес', async () => {
        


        // Click input[name="firstname"]
        await page.click('input[name="firstname"]');
        await page.fill('input[name="firstname"]', 'Anton');
        // Click input[name="lastname"]
        await page.click('input[name="lastname"]');
        await page.fill('input[name="lastname"]', 'Zima');
        
        // Click input[name="address1"]
        await page.click('input[name="address1"]');
        
        // Fill input[name="address1"]
        await page.fill('input[name="address1"]', 'Apple');

        // Click p:has-text("City *")
        await page.click('p:has-text("City *")');

        // Click input[name="city"]
        await page.click('input[name="city"]');

        // Fill input[name="city"]
        await page.fill('input[name="city"]', 'Moskow');

        // Select 35
        await page.selectOption('select[name="id_state"]', '35');

        // Click input[name="postcode"]
        await page.click('input[name="postcode"]');

        // Fill input[name="postcode"]
        await page.fill('input[name="postcode"]', '00001');

        // Click p:has-text("Zip/Postal Code *")
        await page.click('p:has-text("Zip/Postal Code *")');
    })
    await test.step('Дата рождение', async () => {
      // Click input[name="phone_mobile"]
        await page.click('input[name="phone_mobile"]');

        // Fill input[name="phone_mobile"]
        await page.fill('input[name="phone_mobile"]', '+79456851321');

        // Click input[name="alias"]
        await page.click('input[name="alias"]');

        // Fill input[name="alias"]
        await page.fill('input[name="alias"]', 'sdfs sdflksdf');

    }) 
  })

  await test.step('Кликнуть на кнопку регитрации', async () => {
    await page.click('button:has-text("Register")');
  })
})







