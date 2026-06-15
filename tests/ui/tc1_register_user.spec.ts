import {test, expect} from "../../src/fixtures/pageFixture"
import { randomName,randomEmail, setPassword } from "../../src/utils/unique_test_data_generator";


test.only("Verify Register", async({page, loginPage, navbarPage, signupPage})=>{
await navbarPage.clickNavbarMenu("Signup");
await signupPage.enterName(randomName);
await signupPage.enterEmail(randomEmail);
await signupPage.clickSignUp();
expect (await signupPage.getHeading()).toBe("ENTER ACCOUNT INFORMATION");
await signupPage.enterPassword(setPassword());
await signupPage.selectDDday();
await signupPage.selectDDmonth();
await signupPage.selectDDyear();
await signupPage.checkNewsletter();
await signupPage.checkOption();
await signupPage.enterFName("Nayana");
await signupPage.enterLName("Battul");
await signupPage.enterAddress1();
await signupPage.enterState();
await signupPage.enterCity();
await signupPage.enterZipcode();
await signupPage.enterMobile();
await signupPage.clickCreateAccount();
expect (await signupPage.getHeadingAccountCreated()).toBe("ACCOUNT CREATED!");

})