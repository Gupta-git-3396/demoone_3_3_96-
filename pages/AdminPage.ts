import{Page, Locator, expect} from '@playwright/test';
import{BasePage} from './BasePage';

export class AdminPage extends BasePage{

    //locators
    private readonly adminMenu : Locator;
    private readonly txtSystemUsers: Locator;

    //constractor
    constructor(page : Page){
        super(page)
        this.adminMenu = page.getByText('Admin');
        this.txtSystemUsers = page.locator('h5');
    }

    //Method
    async mClickAdminMenu(): Promise<void>{
       await this.click(this.adminMenu);
    }
    
    async mVerifySystemUsersTest(): Promise<void>{
       await expect(this.txtSystemUsers).toHaveText('System Users');
    }

}