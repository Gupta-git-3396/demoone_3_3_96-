import{test, expect} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PIMPage';

test('add new employee', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginPage= new LoginPage(page);
    const clickPim = new PimPage(page);

    await loginPage.login('Admin', 'admin123');
    await clickPim.clickPimMenu();
    await clickPim.clickAddBtn();

    await clickPim.addNewEmp('Raj', 'Kumar', 'Gupta', 'Raj002', 'Pass@1234', 'Pass@1234');
   // await page.pause();

    await clickPim.clickSubmitBtn();
    
})