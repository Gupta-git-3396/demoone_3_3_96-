import{Page, Locator} from '@playwright/test';
import{ BasePage} from './BasePage';


export class LoginPage extends BasePage{

   // private readonly page : Page;

    //locators
    private readonly txtUserName: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;

    //constructor
    constructor(page:Page){
        super(page);
       // this.page=page;
        this.txtUserName = page.locator('input[name="username"]');
        this.txtPassword = page.locator('input[name="password"]');
        this.btnLogin = page.locator("button[type='submit']");
    }

    //method

    async enterUserName(username: string): Promise<void>{
        await this.fill(this.txtUserName, username);
    }

    async enterPassword(password: string): Promise<void>{
        await this.fill(this.txtPassword, password);
    }

    async clickLogin(): Promise<void> {
        await this.click(this.btnLogin);
    }

    async login(username: string, password: string): Promise<void> {

        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}