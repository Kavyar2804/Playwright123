import{test,expect} from '@playwright/test'
import { Registerpage } from '../../pageobjects/registerpage';
import rgstdata from "../../testdata/registerdata.json"

test('Register user', async({page}) => {

    const rgspg= new Registerpage(page)
await rgspg.gotourl('/ui?scenario=1')
await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')
await rgspg.registeraction(rgstdata.username,rgstdata.email,rgstdata.pwd)
await expect(page.getByText('Registered successfully',{exact:true}).first()).toContainText('successfully')
await page.pause()


});




