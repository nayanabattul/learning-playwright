import {test as base} from "@playwright/test";
import {LoginPage, NavbarPage, HomePage} from "../pages/index"


type myFixture = {
loginPage: LoginPage;
navbarPage: NavbarPage;
homePage: HomePage
}

export const test = base.extend<myFixture>({
loginPage : async({page}, use)=>{
    await use(new LoginPage(page));
},
navbarPage: async({page}, use)=>{
    await use(new NavbarPage(page));
},
homePage: async({page}, use)=>{
    await use(new HomePage(page));
}
})

export const expect = test.expect;