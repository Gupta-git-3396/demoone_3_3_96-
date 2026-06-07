import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test("Click the Admin Menu", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const loginpage = new LoginPage(page);
    const clickadminmenu = new AdminPage(page);

    await loginpage.login('Admin', 'admin123');
    await clickadminmenu.clickAdminMenu();

    await expect(page.locator('h5')).toHaveText('System Users'); 

})