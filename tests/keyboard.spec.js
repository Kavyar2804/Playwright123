import {expect, test} from '@playwright/test'

test('keyboard', async({page}) => {


    // await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    // await page.locator('[name="handleInput"]').press('Enter')
    // await page.keyboard.press('A')
    // await page.keyboard.press('Backspace')
    // await page.keyboard.type('playwright',{delay:100})

    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Delete')

    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
    for (let index = 0; index < 5; index++) 
        {
        await page.keyboard.press('ArrowDown')
        
    }
  await page.waitForTimeout(1000)
       for (let index = 0; index < 5; index++) 
        {
        await page.keyboard.press('ArrowUp')
        
    }
   
   
    
});