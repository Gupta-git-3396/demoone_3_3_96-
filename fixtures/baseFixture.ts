import{test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { PimPage } from '../pages/PimPage';
import logindata from '../test-data/testdata.json';


export const test= base.extend({

    // Logged In Page Fixture
    fLoggedInPage: async({page}, use)=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        })

        const loginPage = new LoginPage(page);

        await loginPage.mUserLogin(
            logindata.validUser.username,
            logindata.validUser.password
        );

        await use(page);
    },

    // Admin Page Fixture
    fAdminPage: async ({fLoggedInPage}, use)=>{
        const adminPage = new AdminPage(fLoggedInPage);
        await use(adminPage);
    },

    // PIM Page Fixture
    fPimPage: async ({ fLoggedInPage}, use)=> {
        const pimPage = new PimPage(fLoggedInPage);
        await use(pimPage);
    },

    // fAddEmpInfo: async({fLoggedInPage}, use)=>{
    //     const addemp = new PimPage(fLoggedInPage);
    //     await use (addemp);
    // }

});

export { expect } from '@playwright/test';