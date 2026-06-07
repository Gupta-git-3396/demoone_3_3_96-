import{Locator, Page} from '@playwright/test';

export class BasePage{

    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async click(locator:Locator): Promise<void>{
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

}