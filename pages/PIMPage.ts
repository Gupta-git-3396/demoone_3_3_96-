import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class PimPage extends BasePage{
    //Locators
    private readonly clickPim : Locator;
    private readonly clickAdd: Locator;
    private readonly firstName: Locator;
    private readonly midName: Locator;
    private readonly lastName: Locator;
    private readonly loginToggle: Locator;
    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly cnfPassword: Locator;
    private readonly btnSubmit: Locator;

   

    //Constructor
    constructor(page: Page){
    super(page)
    this.clickPim = page.getByText('PIM');
    this.clickAdd = page.locator('button:has-text("Add")');
    this.firstName = page.getByPlaceholder("First Name");    
    this.midName = page.getByPlaceholder("Middle Name");
    this.lastName = page.getByPlaceholder("Last Name");
    //this.loginToggle = page.getByText("Create Login Details");
    
    this.loginToggle = page.locator('.oxd-switch-input');
    this.userName = page.locator(
            '//label[text()="Username"]/ancestor::div[contains(@class,"oxd-input-group")]//input'
    );

    this.password = page.locator(
            '//label[text()="Password"]/ancestor::div[contains(@class,"oxd-input-group")]//input'
    );

    this.cnfPassword = page.locator(
            '//label[text()="Confirm Password"]/ancestor::div[contains(@class,"oxd-input-group")]//input'
        );

    this.btnSubmit = page.getByRole('button', {name: 'Save'});

    }

    //Methods
    async clickPimMenu(): Promise<void>{
       await this.click(this.clickPim);
    }

    async clickAddBtn(): Promise<void>{
        await this.click(this.clickAdd);
    }

    async enterFirstName(fname:string): Promise<void>{
        await this.fill(this.firstName, fname);
    }

    async enterMidname(mname:string) : Promise<void>{
        await this.fill(this.midName, mname);
    }

    async enterLastname(lname:string) : Promise<void>{
        await this.fill(this.lastName, lname);
    }

    // async clickLoginTab() : Promise<void>{
    //     await this.click(this.loginToggle);
    // }

    async clickLoginTab(): Promise<void> {
    await this.loginToggle.click();
    }
   
    async enterUsername(uname:string): Promise<void>{
        await this.fill(this.userName, uname);
    }

    async enterPass(pass:string) : Promise<void>{
        await this.fill(this.password, pass);
    }

    async enterCpass(cpass:string) : Promise<void>{
        await this.fill(this.cnfPassword, cpass);
    }

    async clickSubmitBtn() : Promise<void>{
        await this.click(this.btnSubmit);
    }


    async addNewEmp(fname:string, mname:string, lname:string, uname:string, pass:string, cpass:string): Promise<void>{
        await this.enterFirstName(fname);
        await this.enterMidname(mname);
        await this.enterLastname(lname);
        await this.clickLoginTab();
        await this.enterUsername(uname);
        await this.enterPass(pass);
        await this.enterCpass(cpass);
        await this.clickSubmitBtn();
    }
    
}


