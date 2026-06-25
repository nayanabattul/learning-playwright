import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';

interface LoginCredentials {
  username: string;
  password: string;
  expectedResult?: string;
}

/**
 * Loads login credentials from a CSV file
 * CSV format: username,password,expectedResult
 * @param csvFilePath - Path to the CSV file
 * @returns Array of login credentials
 */
export function loadLoginDataFromCSV(csvFilePath: string): LoginCredentials[] {
  const absolutePath = path.resolve(csvFilePath);
  
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`CSV file not found: ${absolutePath}`);
  }

  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  const lines = fileContent.split('\n').filter(line => line.trim());

  // Skip header row if present
  const dataLines = lines.slice(1);

  return dataLines.map(line => {
    const [username, password, expectedResult] = line.split(',').map(value => value.trim());
    return {
      username,
      password,
      expectedResult: expectedResult || 'success'
    };
  });
}

/**
 * Performs login on the specified page
 * @param page - Playwright page object
 * @param username - Username
 * @param password - Password
 * @param loginUrl - URL of the login page
 * @param usernameSelector - CSS selector for username field
 * @param passwordSelector - CSS selector for password field
 * @param submitSelector - CSS selector for submit button
 */
export async function performLogin(
  page: Page,
  username: string,
  password: string,
  loginUrl: string,
  usernameSelector: string = '#username',
  passwordSelector: string = '#password',
  submitSelector: string = 'button[type="submit"]'
): Promise<void> {
  await page.goto(loginUrl);
  
  // Fill username field
  await page.fill(usernameSelector, username);
  
  // Fill password field
  await page.fill(passwordSelector, password);
  
  // Click submit button
  await page.click(submitSelector);
  
  // Wait for navigation
  await page.waitForLoadState('networkidle');
}

/**
 * Performs login and validates the result
 * @param page - Playwright page object
 * @param credentials - Login credentials
 * @param loginUrl - URL of the login page
 * @param successIndicator - Text or selector to verify successful login
 * @param usernameSelector - CSS selector for username field
 * @param passwordSelector - CSS selector for password field
 * @param submitSelector - CSS selector for submit button
 */
export async function loginWithValidation(
  page: Page,
  credentials: LoginCredentials,
  loginUrl: string,
  successIndicator: string = 'Dashboard',
  usernameSelector: string = '#username',
  passwordSelector: string = '#password',
  submitSelector: string = 'button[type="submit"]'
): Promise<boolean> {
  try {
    await performLogin(
      page,
      credentials.username,
      credentials.password,
      loginUrl,
      usernameSelector,
      passwordSelector,
      submitSelector
    );

    // Check for success indicator
    const isSuccessful = await page.locator(`text=${successIndicator}`).isVisible().catch(() => false);
    
    return isSuccessful;
  } catch (error) {
    console.error(`Login failed for user: ${credentials.username}`, error);
    return false;
  }
}

/**
 * Batch login test with multiple credentials
 * @param page - Playwright page object
 * @param credentials - Array of login credentials
 * @param loginUrl - URL of the login page
 * @param successIndicator - Text or selector to verify successful login
 * @param usernameSelector - CSS selector for username field
 * @param passwordSelector - CSS selector for password field
 * @param submitSelector - CSS selector for submit button
 */
export async function batchLoginTest(
  page: Page,
  credentials: LoginCredentials[],
  loginUrl: string,
  successIndicator: string = 'Dashboard',
  usernameSelector: string = '#username',
  passwordSelector: string = '#password',
  submitSelector: string = 'button[type="submit"]'
): Promise<Map<string, boolean>> {
  const results = new Map<string, boolean>();

  for (const credential of credentials) {
    const isSuccessful = await loginWithValidation(
      page,
      credential,
      loginUrl,
      successIndicator,
      usernameSelector,
      passwordSelector,
      submitSelector
    );
    results.set(credential.username, isSuccessful);

    // Logout or reset for next test
    await page.goto(loginUrl);
  }

  return results;
}
