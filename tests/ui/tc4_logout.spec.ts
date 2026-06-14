import{test, expect} from "../../src/fixtures/pageFixture"
// import { NavbarPage } from "../../src/pages/navbar.page"
// import { LoginPage } from "../../src/pages/login.page";
// import { HomePage } from "../../src/pages/home.page";
import users from "../../test-data/test-data.json";

const validUser = users.filter(user => user.validity==="valid");

console.log(validUser);

test("Verify successful logout", async ({page, navbarPage, loginPage, homePage})=>{
    // const navbarMenu = new NavbarPage(page);
    // const loginPage = new LoginPage(page);
    // const homePage = new HomePage(page);

    //await loginPage.hitURL("https://automationexercise.com/");
    await navbarPage.clickNavbarMenu("Login");
    await loginPage.loginToApp(validUser[0].username, validUser[0].password);
    await navbarPage.clickNavbarMenu("Logout");
    await navbarPage.isNavbarVisible("Login");

})