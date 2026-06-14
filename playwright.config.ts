import { defineConfig, devices } from '@playwright/test';
import { 
  ARGS,
  FULLY_PARALLEL, 
  HEADLESS, 
  RETRIES,
  SCREENSHOT_MODE, 
  SLOWMO, 
  TRACE_MODE, 
  VIDEO_MODE, 
  WORKERS 
} from './src/config/constants/framework.constants';
import { REPORTER_CONFIG } from './src/config/constants/report.constants';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: FULLY_PARALLEL,
  retries: RETRIES,
  workers: WORKERS,
  reporter: REPORTER_CONFIG,
  use: {
    headless: HEADLESS,
    screenshot: SCREENSHOT_MODE,
    video: VIDEO_MODE,
    trace: TRACE_MODE,
    launchOptions: {
      args: ARGS,
      slowMo: SLOWMO
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
