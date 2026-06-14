# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\tc1_register_user.spec.ts >> Verify Register
- Location: tests\ui\tc1_register_user.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Account Created!', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for practice automation" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=e9]
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
  - generic [ref=e37]:
    - generic [ref=e41]:
      - heading "Enter Account Information" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - generic [ref=e45]: Title
          - generic [ref=e47]:
            - radio "Mr." [ref=e49]
            - text: Mr.
          - generic [ref=e51]:
            - radio "Mrs." [ref=e53]
            - text: Mrs.
        - generic [ref=e54]:
          - generic [ref=e55]:
            - text: Name
            - superscript [ref=e56]: "*"
          - textbox "Name *" [ref=e57]: User1781414360982
        - generic [ref=e58]:
          - generic [ref=e59]:
            - text: Email
            - superscript [ref=e60]: "*"
          - textbox "Email *" [disabled] [ref=e61]: user1781414360982@gmail.com
        - generic [ref=e62]:
          - generic [ref=e63]:
            - text: Password
            - superscript [ref=e64]: "*"
          - textbox "Password *" [ref=e65]: Welcome@1781414370754
        - generic [ref=e66]:
          - generic [ref=e67]: Date of Birth
          - generic [ref=e68]:
            - combobox [ref=e71]:
              - option "Day"
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8" [selected]
              - option "9"
              - option "10"
              - option "11"
              - option "12"
              - option "13"
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21"
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=e74]:
              - option "Month"
              - option "January"
              - option "February"
              - option "March"
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August" [selected]
              - option "September"
              - option "October"
              - option "November"
              - option "December"
            - combobox [ref=e77]:
              - option "Year"
              - option "2021"
              - option "2020"
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004"
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995" [selected]
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=e78]:
          - checkbox "Sign up for our newsletter!" [checked] [ref=e79]
          - text: Sign up for our newsletter!
        - generic [ref=e80]:
          - checkbox "Receive special offers from our partners!" [checked] [ref=e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=e82]
        - paragraph [ref=e83]:
          - generic [ref=e84]:
            - text: First name
            - superscript [ref=e85]: "*"
          - textbox "First name *" [ref=e86]: Nayana
        - paragraph [ref=e87]:
          - generic [ref=e88]:
            - text: Last name
            - superscript [ref=e89]: "*"
          - textbox "Last name *" [ref=e90]: Battul
        - paragraph [ref=e91]:
          - generic [ref=e92]: Company
          - textbox "Company" [ref=e93]
        - paragraph [ref=e94]:
          - generic [ref=e95]:
            - text: Address
            - superscript [ref=e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=e97]: xyz
        - paragraph [ref=e98]:
          - generic [ref=e99]: Address 2
          - textbox "Address 2" [ref=e100]
        - paragraph [ref=e101]:
          - generic [ref=e102]:
            - text: Country
            - superscript [ref=e103]: "*"
          - combobox "Country *" [ref=e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=e105]:
          - generic [ref=e106]:
            - text: State
            - superscript [ref=e107]: "*"
          - textbox "State *" [ref=e108]: Maharashtra
        - paragraph [ref=e109]:
          - generic [ref=e110]:
            - text: City
            - superscript [ref=e111]: "*"
          - textbox "City * Zipcode *" [ref=e112]: Solapur
        - paragraph [ref=e113]:
          - generic [ref=e114]:
            - text: Zipcode
            - superscript [ref=e115]: "*"
          - textbox [ref=e116]: "12345"
        - paragraph [ref=e117]:
          - generic [ref=e118]:
            - text: Mobile Number
            - superscript [ref=e119]: "*"
          - textbox "Mobile Number *" [active] [ref=e120]
        - button "Create Account" [ref=e121] [cursor=pointer]
    - generic:
      - insertion:
        - generic:
          - iframe
  - contentinfo [ref=e122]:
    - generic [ref=e127]:
      - heading "Subscription" [level=2] [ref=e128]
      - generic [ref=e129]:
        - textbox "Your email address" [ref=e130]
        - button "" [ref=e131] [cursor=pointer]:
          - generic [ref=e132]: 
        - paragraph [ref=e133]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e137]: Copyright © 2021 All rights reserved
  - link "" [ref=e138] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e139]: 
  - insertion [ref=e140]:
    - iframe [ref=e143]:
      - iframe [ref=f40e1]:
        - generic [ref=f45e2]:
          - link "Advertisement" [ref=f45e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvFer4_ViDnohkxLV_hY8tC-zxq0vYG8wlxSL3Y8X4ZA_gB3hHx2O6i62Y3egk65lTU9WbsrIu6F3IqWQxzjDRK-TQ5MYvDEJRAxCjvj8Icfe9c-QO5YtNOsX7DYoaGiHIzON_qe8pcGPAmXy5xKSStdZZUQa0vP4XbiS7FaxtGlQXHtTAlJBqrE5_VOQSGIgan2KPA7nfzQnWMsnwgtU7extsBaCRv6eaxMywWLX511EavZufhns_pwHXETrdakb1Xlm5vkD8tCSpDdfUWrM5n8jntgkItv4ZO2mLVPzVgqDW3xdRYcP5WbjLomQYJA-sMLgb6LWn1GHy2GgIXLluFr1fTsUXT8dRBmfzNuoArR1zpjl_hEGnEnSd0em4OtFCrPbsaEy4cyKqer3n3wcdW4XKSIgKeDeS349FoI2yhCQIQ7BAXtw9lOp-njQMSh2NrfhuuG7YZRTMbap0DEWqoWYpuPALM3wTZvfEIKa11ATfTrKSR0OnIV7y9vH-OlRpatPHI0m47bz06r-5qtGrCejamnlg-cjvSTsKBL468jaR91VueTuv0YeoopXqI7K8n2GRZMb6NN1nTsFq7d_7TlZHmpPyv-ETxTtwEEl9DVjsuGl6DeNU06MeFNCr4DuzsGKnSal8p8ww4kcS9tcCJKCzgg7Ihjc-y_73lLeBLx0y8x61_v64yA85sWEzVuHgcWEKmH_6Nsy4AkwHRS61zvr1dCo0J-kFv50rYUf-LB8ooadUtrheMW-Um4dn8h1QHYXGatWoWb9lvgnnAZdrQ3OIQmis0RcRf6aI4I03edhiqy5EgTevLnXZo_ysWb-3LbxylD6uUMf4xUodXplPX1ECH9DV4GwYm0_XB-2EIJABWaXIk4KRD95aHi8oPkvlfB_hV-hdnu9c29byiwg0CIPoKBpbSC4XrDHMcNq9WPTgAduA-su66jTBU6zK8sqOWpE479rzZVzhGdyvhwAqOn4IooaSSz7SOHlE3a2-j2mhFqmIhGHy17xpruQ1DMAHhW_rB3aRVz7chA0Vwf4OYAwGvlrCiflzqdFc5BUNilS7Rpemb4FfowZ92hyGpTrOu9HMt3u0tJLCGa_stAhibIQ-_Zz4U1Ei_W1klOAAxef4hTCCxHSn6qYBPcRz11AprFzFwly74V0q9r-0X9Bz5N_7OtHvOa2I-CqcHbVO_stxK82OGK9V7FKsUclW2LafSr2_--ay1YSuy29w7ygmXupdit0V6TsEZK7da3n8NjIN5E18MvOq65VhbPWhRQrK2uRYTum9Ki-CnkITpTr_wtlRTvUmeOBXAMulASltdB1-FBI7UEpFqF0c-yDGSZnbdFy5H8gs7U_lvfeDbfYztZU8D6IHGXjYPLj3sKKCBvIOaYx_FeKmf2lLyhsSENircrcQGbsm668B1NJT65kDnZzds3aV59kmvSFiGL-AHIgB70D21shdxZAgKrofQRUjDMgImWNja-qUEiSiq6CjlN0UnuW05kA7XO-0I_y0UFPaCTZfD24PK0SgOrFc9mqrfOafUGKAJJAGov7VmMkZrZCfM2lmAS-g8RoHtBotZVpppFSEWYwMX3L9y_GTQudC9Aw4qo_Vbku57c_vpAsseo2-hCs570gPh5g1vtK_bVUka1aESyD06tku58diGt5u-hKAl1Ebk9G1QquANeWUWM3-Ac9Zpz3uQUqKjCEM4OJ9aFFVoXHcdgOfsKbUBdzkgWvRLGqPBU5sZfaHejRvh-d5a3jDOLnGI97z_DstG1J1BRnLUSL-jJb4ksF0&sai=AMfl-YRAD__VqiKIp_IG26Y6FAckM1jp1i-zw2cT_Gx4vhku8nM0x5Lc6kIhjq8YDgSqkcP1Da-Hhkzyn8uBlyqVGzwCbnAVIUCaEGHblEBl6GM-09Ekrr4Px1NcS3cVSIMPvf7zjtbo_cL6MhUkubKORrXukMsOb6Li42yyk9dqCLkuxDTmAZl2p3KfDb8HvG89OcAc22BgyEs8icXm-a-gE34rAFhbFU-2_1FKOz3j3IqUfYgGoUeUWjI5QWfeOFLqdyvxEHg9UnSuWKeDPd1Nc6T_GqFr5sJ_P1i5R8pC07wuIb8sxwFw1XQ3J6U2vJQpsqWTz2HPdzJE2yRCAKdSGHnOcCllKq45pSphKrxPpH8pHfAy2jfJUDQ8FinbDQaMDIc45YDesBDfPFY1EI9NWulGDBUKg33pTpaD_3eWXdGJita____F2MiQEWIetVXvzCme1vhJFrW1DZOTSZhMhnMCrbS0Ax6sfkh_XXQXzB8is0ah27AXBCw1U5EccjgRut2e8Qvf0o9oeZMPjU8vrLYVZRQdraJCGR2ImYheuquxOAD8Ls3UcEObi9V2d3kY7V09AyjAT2hzu_xRbg_oa5OqxUGxYmML76F-BefeUUZr2PZec7r3Pu87N0cMmfEdY1x6pDvvlwrbkxpLlU40OLW16GImDfnmRT_Qs_AgCYJl5_iCWkXgNOk9JJZhPtQHf66Pyrmvd_8wR0Mo-AmWfcvL27Ia7ynTdyhJ9SP2aVQEfcAm7-8seGcNMwYPz3hZtbBSfwOThsS63xpEopj0cxbxSCgrguqmjJs27ICL6QOEMh6sITXLrohsjSzPExgYgfGg_ZB3IGF_jFR7WJ_ur4iVl8xQN30V_jlah-nQaE4u1ICOsQh6E1OjkpTN5MhNsLW1nlCvkUkCTcq0Mhn8LfUI1EF_f1asQr8aXZq5dGvgxA&sig=Cg0ArKJSzP65CxcjYIuM&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly90aS5jb20&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
            - img "Advertisement" [ref=f45e5]
          - generic [ref=f45e6]:
            - generic:
              - img [ref=f45e10] [cursor=pointer]
              - button [ref=f45e12] [cursor=pointer]:
                - img [ref=f45e13]
```

# Test source

```ts
  20  |     readonly  txtCity: Locator;
  21  |     readonly txtZipcode:Locator;
  22  |     readonly txtMobile: Locator;
  23  |     readonly btnCreateAccount: Locator;
  24  |     readonly txtAccountCreated: Locator;
  25  |     constructor(page: Page){
  26  |         this.page=page;
  27  |         this.txtUserName=page.getByPlaceholder("Name");
  28  |         this.txtEmail=page.getByPlaceholder("Email Address").nth(1);
  29  |         this.btnSignUP = page.getByRole("button", {name: "Signup"});
  30  |         this.txtHeading = page.getByText("Enter Account Information");
  31  |         this.rdoFTitle = page.getByRole("radio").nth(1);
  32  |         this.txtPassword = page.locator("#password");
  33  |         this.ddDay = page.locator("#days");
  34  |         this.ddMonth  = page.locator("#months");
  35  |         this.ddYear = page.locator("#years");
  36  |         this.chkNewsLetter = page.getByRole("checkbox", {name: "newsletter"});
  37  |         this.chkOption = page.locator("#optin");
  38  |         this.txtFirstName = page.locator("#first_name");
  39  |         this.txtLastName = page.locator("#last_name");
  40  |         this.txtAddress1  = page.locator("#address1");
  41  |         this.txtState  = page.locator("#state");
  42  |         this.txtCity  = page.locator("#city");
  43  |         this.txtZipcode = page.locator("#zipcode");
  44  |         this.txtMobile  = page.locator("//input[@id='mobile_number']");
  45  |         this.btnCreateAccount  = page.locator("//button[text()='Create Account']");
  46  |         this.txtAccountCreated = page.getByText("Account Created!", {exact: true});
  47  |     }
  48  | 
  49  |     async enterName(name: string){
  50  |         await this.txtUserName.fill(name);
  51  |     }
  52  | 
  53  |     async enterEmail(email: string){
  54  |         await this.txtEmail.fill(email);
  55  |     }
  56  | 
  57  |     async clickSignUp(){
  58  |         await this.btnSignUP.click();
  59  |     }
  60  | 
  61  |     async getHeading(): Promise<string>{
  62  |         console.log(this.txtHeading.innerText())
  63  |         return await this.txtHeading.innerText();
  64  |     }
  65  | 
  66  |     async checkFRadio(){
  67  |         await this.rdoFTitle.check();
  68  |     }
  69  | 
  70  |     async enterPassword(password: string){
  71  |         await this.txtPassword.fill(password);
  72  |     }
  73  | 
  74  |     async selectDDday(){
  75  |         await this.ddDay.selectOption("8");
  76  |     }
  77  |     async selectDDmonth(){
  78  |         await this.ddMonth.selectOption({value: "8"});
  79  |     }
  80  |     async selectDDyear() {
  81  |         await this.ddYear.selectOption({label: "1995"});
  82  |     }
  83  |     async checkNewsletter(){
  84  |         await this.chkNewsLetter.click();
  85  |     }
  86  | 
  87  |     async checkOption(){
  88  |         await this.chkOption.click();
  89  |     }
  90  | 
  91  |     async enterFName(fname: string){
  92  |         await this.txtFirstName.fill(fname);
  93  |     }
  94  | 
  95  |     async enterLName(lname: string){
  96  |         await this.txtLastName.fill(lname);
  97  |     }
  98  |     async  enterAddress1(){
  99  |         await this.txtAddress1.fill("xyz");
  100 |     }
  101 |     async enterState(){
  102 |         await this.txtState.fill("Maharashtra");
  103 |     }
  104 |     async enterCity(){
  105 |         await this.txtCity.fill("Solapur")
  106 |     }
  107 |     
  108 |     async enterZipcode(){
  109 |         await this.txtZipcode.fill("12345");
  110 |     }
  111 | 
  112 |     async enterMobile(){
  113 |         await this.txtMobile.fill("1234567891");
  114 |     }
  115 | 
  116 |     async clickCreateAccount(){
  117 |         await this.btnCreateAccount.click();
  118 |     }
  119 |      async getHeadingAccountCreated(): Promise<string>{
> 120 |         return await this.txtAccountCreated.innerText();
      |                                             ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  121 |     }
  122 | 
  123 | }
```