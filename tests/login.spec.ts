import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import logindata from '../test-data/logindata.json';

test.beforeEach(async ({page})=>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test('Verify user can login with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.login(
    logindata.validUser.username,
    logindata.validUser.password

    )

    await expect(page.locator('h6')).toHaveText('Dashboard');
})


