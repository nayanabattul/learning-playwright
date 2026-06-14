import {LoginPage, NavbarPage, HomePage, SignupPage} from "../pages/index"
import { test as base } from "../../src/fixtures/baseFixture";

type myFixture = {
loginPage: LoginPage;
navbarPage: NavbarPage;
homePage: HomePage
signupPage: SignupPage;
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
},
signupPage: async ({page}, use)=>{
    await use(new SignupPage(page));
}
})

export const expect = test.expect;