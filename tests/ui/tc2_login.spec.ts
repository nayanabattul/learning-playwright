import { test, expect } from "../../src/fixtures/pageFixture";
import { currentEnv } from "../../src/config/env";

test("Verify login with valid credentials", async ({page, loginPage, navbarPage})=>{
await navbarPage.clickNavbarMenu("Login");
await loginPage.loginToApp(currentEnv.email, currentEnv.password);
const isLogoutVisible = await navbarPage.isNavbarVisible("Logout");

expect(isLogoutVisible).toBeTruthy();
});
