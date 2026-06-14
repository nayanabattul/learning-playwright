import {test, expect} from "../../src/fixtures/pageFixture"

test("Verify Register", async({page, loginPage, navbarPage, signupPage})=>{
await navbarPage.clickNavbarMenu("Signup");
await signupPage.enterName("Nayana Battul");
await signupPage.enterEmail("nayanabattul@gmail.com");
await signupPage.clickSignUp();
expect (await signupPage.getHeadingAccountExists()).toBe("Email Address already exist!");
})