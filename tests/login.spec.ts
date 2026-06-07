import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

test('Verify user can login with valid credentials', async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const loginPage = new LoginPage(page);
    await loginPage.login(
        'Admin',
        'admin123'
    )

    await expect(page.locator('h6')).toHaveText('Dashboard');
})


