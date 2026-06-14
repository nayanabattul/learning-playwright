import { test, expect } from "../../src/fixtures/pageFixture";
// import { NavbarPage } from "../../src/pages/navbar.page";
// import { LoginPage } from "../../src/pages/login.page";
// import { HomePage } from "../../src/pages/home.page";

import fs from "fs";
import path from "path";

const jsonPath = path.join(__dirname, "../../test-data/test-data.json");
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
for(const data of loginData){
    const {username, password, validity} = data;
test(`Verify login scenarios ${username}`, async ({page , navbarPage, loginPage, homePage})=>{

// const navbarPage = new NavbarPage(page);
// const loginPage = new LoginPage(page);
// const homePage = new HomePage(page);
const expectedloginText = "Logged in as";
const expectedInvalidLoginText = "Your email or password is incorrect!";

//await loginPage.hitURL("https://automationexercise.com/");
await navbarPage.clickNavbarMenu("Login");
await loginPage.loginToApp(username, password);

if(validity==="valid"){
const txtLogin = await homePage.getText();
expect(txtLogin).toContain(expectedloginText);
}

if(validity==="invalid"){
const txtInvalidLogin = await loginPage.getText();
expect(txtInvalidLogin).toContain(expectedInvalidLoginText);
}
})
}
