import{test,expect} from '@playwright/test'
import { Registerpage } from '../../pageobjects/registerpage';
 import para from '../../testdata/parametrization.json'


test('Register user',{tag: '@smoke'}, async({page}) => {

    for (let p of para)
    {      
const rgspg= new Registerpage(page)
await rgspg.gotourl('https://demoapps.qspiders.com/ui?scenario=1')
await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
await rgspg.registeraction(p.username,p.email,p.pwd)
await expect(page.getByText('Registered successfully',{exact:true}).first()).toContainText('successfully')
await page.pause()


    }  
});
