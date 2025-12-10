import{test} from "@playwright/test"

test('testid', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('username').fill('gfhg')
    
});