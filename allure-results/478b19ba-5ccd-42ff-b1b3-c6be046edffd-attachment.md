# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Verify login with valid credentials
- Location: tests\ui\login.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: automationexercise.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | import {Locator, Page} from "@playwright/test"
  2  | 
  3  | export class LoginPage{
  4  | 
  5  |     readonly page: Page;
  6  |     readonly txtLoginEmail: Locator;
  7  |     readonly txtLoginPassword: Locator;
  8  |     readonly btnLogin: Locator;
  9  |     readonly loginFormParent : Locator;
  10 |     readonly txtInvalidLogin: Locator;
  11 | 
  12 |     constructor(page: Page){
  13 |         this.page = page
  14 |         this.loginFormParent = page.locator("[class='login-form']")
  15 |         this.txtLoginEmail = this.loginFormParent.getByPlaceholder("Email Address");
  16 |         this.txtLoginPassword = this.loginFormParent.getByPlaceholder("Password");
  17 |         this.btnLogin = this.loginFormParent.locator("[data-qa='login-button']");
  18 |         this.txtInvalidLogin = page.locator("//p[text()='Your email or password is incorrect!']");
  19 |     }
  20 | 
  21 |     async hitURL(baseURL: string): Promise<void>{
> 22 |         await this.page.goto(baseURL);
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://automationexercise.com/
  23 |     }
  24 |     async enterEmailAddress(email: string){
  25 |         await this.txtLoginEmail.fill(email);
  26 |     }
  27 | 
  28 |     async enterPassword(password: string){
  29 |         await this.txtLoginPassword.fill(password);
  30 |     }
  31 | 
  32 |     async clickLogin(){
  33 |         await this.btnLogin.click();
  34 |     }
  35 | 
  36 |     async loginToApp(email: string, password: string){
  37 |         await this.enterEmailAddress(email);
  38 |         await this.enterPassword(password);
  39 |         await this.clickLogin();
  40 |     }
  41 | 
  42 |     async getText(): Promise<string>{
  43 |        return this.txtInvalidLogin.innerText();
  44 |     }
  45 | 
  46 |     
  47 | }
  48 | 
```