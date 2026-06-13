import { test } from '../fixtures/baseFixture';
import logindata from '../test-data/testdata.json';

test('add user information', async ({ fPimPage }) => {

    await fPimPage.mClickPimMenu();

    await fPimPage.mClickAddBtn();

    await fPimPage.mAddNewEmp(
        logindata.employee.fname,
        logindata.employee.mname,
        logindata.employee.lname,
        logindata.employee.eid,
        logindata.employee.username,
        logindata.employee.password,
        logindata.employee.password
    );

});
    /*
    //diect value set
    await fPimPage.mAddNewEmp(
        'Raj',
        'Kumar',
        'Gupta',
        'Raj002',
        'Pass@1234',
        'Pass@1234'
    );
    */



/*import{test, expect} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';
import logindata from '../test-data/logindata.json'

test('add new employee', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const loginPage= new LoginPage(page);
    const clickPim = new PimPage(page);

    await loginPage.login(
        logindata.validUser.username,
        logindata.validUser.password
    );
    await clickPim.clickPimMenu();
    await clickPim.clickAddBtn();

    await clickPim.addNewEmp('Raj', 'Kumar', 'Gupta', 'Raj002', 'Pass@1234', 'Pass@1234');
   // await page.pause();

    await clickPim.clickSubmitBtn();
    
})
*/