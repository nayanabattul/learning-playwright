import { Page } from "@playwright/test";

export class NavbarPage{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    navbarMenu(menu: string){
        return this.page.locator(`a:has-text("${menu}")`);
    }
    async clickNavbarMenu(menu: string): Promise<void>{
        await this.navbarMenu(menu).click();
    }

    async isVisible(menu:string): Promise<void>{
        await this.navbarMenu(menu).isVisible();
    }

    // async isClicked(menu: string){
    //     await this.navbarMenu(menu).is
    // }
}