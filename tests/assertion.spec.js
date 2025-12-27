import{test, expect}  from '@playwright/test'

test('assertion', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    //page level
    // await expect.soft(page).toHaveTitle('DemoApps | Qspiders |')


    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    await page.locator('#domain_a').check()
//    // await page.locator('#domain_a').uncheck()
//     await expect(page.locator('#domain_a')).toBeChecked()

//     //to contain text
//     const ele1 = await page.locator('//p[@class="font-semibold"]').first()
//     await expect(ele1).toContainText('notifications')

//     //to have attribute

//    await expect(page.locator('#domain_a')).toHaveAttribute('value', 'false' )
//     await expect(page.locator('#domain_a')).toHaveAttribute('value')
// //    //to haveId
// //    //tohaveclass

// //    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
// //    await page.getByRole('button',{name:'Yes'}).click()
// //    //await expect(page.getByRole('button',{name:'Yes'})).toHaveCSS('background-color', 'rgba(25, 49, 3, 1)')
// //     await page.pause()

//     // await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
//     // await expect(page.locator('//tbody//tr')).toHaveCount(4)

//     // await expect(page.locator('//tbody//tr//th')).toHaveText(['Levis Shirt','SAMSUNG Galaxy', 'APPLEIPhone','HP Envy    '])
//     // await expect(page).toHaveScreenshot()

//     //non retrying
//     await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
//     await page.locator('//tbody//tr/th').first().waitFor()

//     let alltext = await page.locator('//tbody//tr/th').allTextContents()
//     console.log(alltext);
//     expect.soft(alltext,'should have proper length').toHaveLength(3)
//     expect(alltext, 'should have the text').toContain('APPLEIPhone','HP Envy')
//   //   //await expect.soft(page.locator('//tbody//tr/th')).toHaveCount(3)
//   //  expect.soft(alltext, 'Should contain the eaxct elements').toContainEqual('HP')
//   //   expect(alltext,'should not contain').not.toContain('curd')
//   //   await page.getByRole('link',{name:'Dynamic Web Table'}).click()
    
   const arr = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" }
]
expect(arr).toContainEqual({ id: 1, name: "apple" },{ id: 2, name: "banana" }) // FAILS


const car={
  model:'maruti@800',
  price:18000,
  colurs:['red', 'white','green'],
  fueltype:{
    petrol:true,
    diesel:true,
    electric:false
  }
}

expect(car.model).toEqual(expect.any(String))
expect(car.price).toEqual(expect.anything())
// expect(car.colurs).toEqual(expect.arrayOf())
expect(car.fueltype).toEqual(expect.objectContaining({petrol:expect.anything()}))





// expect(car.price).toEqual(expect.any(Number))
// expect(car.price).toEqual(expect.anything())
// expect(car.colurs).toEqual(expect.arrayContaining(['white','red']))
// expect(car.model).toEqual(expect.stringContaining('@'))
// expect(car.fueltype).toEqual(expect.objectContaining({petrol:expect.anything()}))


























// //asymmetric matchers

// //any
// expect(car.model).toEqual(expect.any(String))
// expect(car.price).toEqual(expect.any(Number))

// //anything
// expect(car.model).toEqual(expect.anything())
// expect(car.colurs).toEqual(expect.any(Array))

// //arrayContaining
// expect(car.colurs).toEqual(expect.arrayContaining(['red','green']))

// // expect(car.colurs).toEqual(expect.arrayOf(String))

// expect(car).toEqual(expect.objectContaining({price:18000},{fueltype:expect.objectContaining({petrol:true})}))

// expect(car.model).toEqual(expect.stringContaining('@'))




    

    


    
    
    
});