import {Locator, Page} from "@playwright/test"

export class LoginPage{

    readonly page: Page;
    readonly txtLoginEmail: Locator;
    readonly txtLoginPassword: Locator;
    readonly btnLogin: Locator;
    readonly loginFormParent : Locator;
    readonly txtInvalidLogin: Locator;

    constructor(page: Page){
        this.page = page
        this.loginFormParent = page.locator("[class='login-form']")
        this.txtLoginEmail = this.loginFormParent.getByPlaceholder("Email Address");
        this.txtLoginPassword = this.loginFormParent.getByPlaceholder("Password");
        this.btnLogin = this.loginFormParent.locator("[data-qa='login-button']");
        this.txtInvalidLogin = page.locator("//p[text()='Your email or password is incorrect!']");
    }

    async hitURL(baseURL: string): Promise<void>{
        await this.page.goto(baseURL);
    }
    async enterEmailAddress(email: string){
        await this.txtLoginEmail.fill(email);
    }

    async enterPassword(password: string){
        await this.txtLoginPassword.fill(password);
    }

    async clickLogin(){
        await this.btnLogin.click();
    }

    async loginToApp(email: string, password: string){
        await this.enterEmailAddress(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getText(): Promise<string>{
       return this.txtInvalidLogin.innerText();
    }

    
}
