import {expect, test} from '@playwright/test'
import { Amazonhomepage } from '../../pageobjects/amazonpage'
import { Addtocart } from '../../pageobjects/amazonpage2';


test('amazon e2e',{tag: '@smoke'}, async({browser}) => {

    const context = await browser.newContext()
    const page= await context.newPage()

  const amzn = new Amazonhomepage(page)
  await amzn.goto('https://www.amazon.in/')
  await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
  await amzn.searchprod('sumsung mobile')
  await amzn.selctfromsugg(20000)

  const pagepromise= context.waitForEvent('page')
  await amzn.prod.click()
  const newpage = await pagepromise

  const acart= new Addtocart(newpage)
  await expect(newpage).toHaveTitle('Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) Without Offer : Amazon.in: Electronics')
  await acart.gotocart()
 

  //cart validation
  //await expect(page.locator('//span[@class="a-truncate-cut"]').first()).toContainText('Samsung Galaxy A35 5G')
  await expect(page.locator("//span[@id='sc-subtotal-amount-activecart']/span")).toContainText('₹19,849.00')

});