import {test, expect} from '../fixtures/baseFixture'

test('verify Login', async({ fLoggedInPage }) =>{
    await expect(fLoggedInPage.locator('h6')).toHaveText('Dashboard');
   // await fLoggedInPage.mVerifyLoginPageTxt();
   
});

/*import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import logindata from '../test-data/logindata.json';

test.beforeEach(async ({page})=>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});
*/

