import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';


test('Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login()
  await expect(page).toHaveURL('https://app.votify.app/cs/onboarding?');
});

test('Unsuccessful login with valid username nad invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterValidUsername();
  await loginPage.enterInvalidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessageLocator).toBeVisible();
});

test('Unsuccessful login with invalid username nad valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessageLocator).toBeVisible();
});

test('Unsuccessful login with corrupted email', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterCorruptedUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidEmailLocator).toBeVisible();
});

test('Unsuccessful login with invalid username and invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterInvalidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.errorMessageLocator).toBeVisible(); 
});

test('Unsuccessful login with blank fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.doubleClickLoginButton();
  await expect(loginPage.requiredCredentialsLocator).toBeVisible(); 
});

test('Showing password with an Eye Icon', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterValidPassword();
  await loginPage.clickEyeIcon();
  
  const passwordValue = await loginPage.passwordInput.inputValue();
  expect(passwordValue).toBe('12345678');
  await loginPage.clickEyeIcon();
});

test('Successful click on sign up button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.clickSignUpButton();
  await expect(page).toHaveURL('https://auth.votify.app/sign-up?');
});

test('Successful click on forget password button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.clickForgetPasswordButton();
  await expect(page).toHaveURL('https://auth.votify.app/forgot-password?');
});



