# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Verify login scenarios nayanabattul@gmail.com
- Location: tests\ui\login.spec.ts:14:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [active] [ref=e44]: nayanabattul@gmail.com
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - iframe [ref=e75]:
      
  - insertion [ref=e76]:
    - iframe [ref=e79]:
      - iframe [ref=f15e1]:
        
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
  22 |         await this.page.goto(baseURL);
  23 |     }
  24 |     async enterEmailAddress(email: string){
  25 |         await this.txtLoginEmail.fill(email);
  26 |     }
  27 | 
  28 |     async enterPassword(password: string){
> 29 |         await this.txtLoginPassword.fill(password);
     |                                     ^ Error: locator.fill: value: expected string, got undefined
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