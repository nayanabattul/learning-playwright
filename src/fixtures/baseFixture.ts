import { test as base } from "@playwright/test"
import { currentEnv } from "../config/env"

export const test = base.extend({
    page: async ({page}, use)=>{
        //test.setTimeout(60000);
        //console.log("Base URL:", currentEnv.baseURL);
        //await page.waitForTimeout(2000);
        await page.goto(currentEnv.baseURL, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
        });
        await use(page);

    },
});

export const expect = test.expect;