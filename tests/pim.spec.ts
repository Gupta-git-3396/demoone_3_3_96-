import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
//import { AdminPage } from '../pages/AdminPage';
import { PimPage } from '../pages/PIMPage';

test('Click the PIM menu', async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginpage1 = new LoginPage(page);
    //const adminpage1 = new AdminPage(page);
    const clickPimText = new PimPage(page);
    

    await loginpage1.login('Admin', 'admin123');
    //await adminpage1.clickAdminMenu();
    await clickPimText.clickPimMenu();
    
    await expect(page.locator('h5').getByText('Employee Information')).toBeVisible();
    //await expect(page.getByText('Add Employee')).toBeVisible();

    await clickPimText.clickAddBtn();
    await expect(page.locator('h6').getByText('Add Employee')).toBeVisible();   

    
  
})