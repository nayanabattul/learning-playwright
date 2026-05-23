import { Page, Locator} from "@playwright/test"

export class HomePage{
    readonly page: Page;
    readonly txtLogin: Locator;
    constructor(page: Page){
        this.page=page;
        this.txtLogin= page.locator("li:nth-child(10) a:nth-child(1)");
    }

    async getText(): Promise<string>{
       return this.txtLogin.innerText();
    }
}
