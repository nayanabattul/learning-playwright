# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\tc2_login.spec.ts >> Verify login with valid credentials
- Location: tests\ui\tc2_login.spec.ts:4:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { test, expect } from "../../src/fixtures/pageFixture";
  2  | import { currentEnv } from "../../src/config/env";
  3  | 
  4  | test("Verify login with valid credentials", async ({page, loginPage, navbarPage})=>{
  5  | await navbarPage.clickNavbarMenu("Login");
  6  | await loginPage.loginToApp(currentEnv.email, currentEnv.password);
  7  | const isLogoutVisible = await navbarPage.isNavbarVisible("Logout");
  8  | 
> 9  | expect(isLogoutVisible).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  10 | });
  11 | 
```