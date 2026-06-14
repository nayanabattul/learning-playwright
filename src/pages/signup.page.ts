import {Locator, Page} from"@playwright/test"

export class SignupPage{
    readonly page: Page;
    readonly txtUserName: Locator;
    readonly txtEmail: Locator;
    readonly btnSignUP: Locator;
    readonly txtHeading: Locator;
    readonly rdoFTitle: Locator;
    readonly txtPassword: Locator;
    readonly ddDay: Locator; 
    readonly ddMonth: Locator;
    readonly ddYear: Locator; 
    readonly chkNewsLetter: Locator;
    readonly chkOption: Locator;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtAddress1: Locator;
    readonly txtState: Locator;
    readonly  txtCity: Locator;
    readonly txtZipcode:Locator;
    readonly txtMobile: Locator;
    readonly btnCreateAccount: Locator;
    readonly txtAccountCreated: Locator;
    readonly txtAccountExists: Locator;
    constructor(page: Page){
        this.page=page;
        this.txtUserName=page.getByPlaceholder("Name");
        this.txtEmail=page.getByPlaceholder("Email Address").nth(1);
        this.btnSignUP = page.getByRole("button", {name: "Signup"});
        this.txtHeading = page.getByText("Enter Account Information");
        this.rdoFTitle = page.getByRole("radio").nth(1);
        this.txtPassword = page.locator("#password");
        this.ddDay = page.locator("#days");
        this.ddMonth  = page.locator("#months");
        this.ddYear = page.locator("#years");
        this.chkNewsLetter = page.getByRole("checkbox", {name: "newsletter"});
        this.chkOption = page.locator("#optin");
        this.txtFirstName = page.locator("#first_name");
        this.txtLastName = page.locator("#last_name");
        this.txtAddress1  = page.locator("#address1");
        this.txtState  = page.locator("#state");
        this.txtCity  = page.locator("#city");
        this.txtZipcode = page.locator("#zipcode");
        this.txtMobile  = page.locator("//input[@id='mobile_number']");
        this.btnCreateAccount  = page.locator("//button[text()='Create Account']");
        this.txtAccountCreated = page.getByText("Account Created!", {exact: true});
        this.txtAccountExists = page.locator("//p[normalize-space()='Email Address already exist!']");
    }

    async enterName(name: string){
        await this.txtUserName.fill(name);
    }

    async enterEmail(email: string){
        await this.txtEmail.fill(email);
    }

    async clickSignUp(){
        await this.btnSignUP.click();
    }

    async getHeading(): Promise<string>{
        return await this.txtHeading.innerText();
    }

    async checkFRadio(){
        await this.rdoFTitle.check();
    }

    async enterPassword(password: string){
        await this.txtPassword.fill(password);
    }

    async selectDDday(){
        await this.ddDay.selectOption("8");
    }
    async selectDDmonth(){
        await this.ddMonth.selectOption({value: "8"});
    }
    async selectDDyear() {
        await this.ddYear.selectOption({label: "1995"});
    }
    async checkNewsletter(){
        await this.chkNewsLetter.click();
    }

    async checkOption(){
        await this.chkOption.click();
    }

    async enterFName(fname: string){
        await this.txtFirstName.fill(fname);
    }

    async enterLName(lname: string){
        await this.txtLastName.fill(lname);
    }
    async  enterAddress1(){
        await this.txtAddress1.fill("xyz");
    }
    async enterState(){
        await this.txtState.fill("Maharashtra");
    }
    async enterCity(){
        await this.txtCity.fill("Solapur")
    }
    
    async enterZipcode(){
        await this.txtZipcode.fill("12345");
    }

    async enterMobile(){
        await this.txtMobile.fill("1234567891");
    }

    async clickCreateAccount(){
        await this.btnCreateAccount.click();
    }
     async getHeadingAccountCreated(): Promise<string>{
        return await this.txtAccountCreated.innerText();
    }

     async getHeadingAccountExists(): Promise<string>{
        return await this.txtAccountExists.innerText();
    }

}