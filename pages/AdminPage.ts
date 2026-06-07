import{Page, Locator} from '@playwright/test';
import{BasePage} from './BasePage';

export class AdminPage extends BasePage{

    //locators
    private readonly adminMenu : Locator;

    //constractor
    constructor(page : Page){
        super(page)
        this.adminMenu = page.getByText('Admin');
    }

    //Method
    async clickAdminText(): Promise<void>{
       await this.click(this.adminMenu);
    }       

}