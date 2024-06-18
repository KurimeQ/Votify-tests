import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { OnboardingPage } from '../page-objects/OnboardingPage';

test('Verify onboarding page title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(onboardingPage.title).toBeVisible();
});

test('Verify onboarding page texts', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(onboardingPage.onboardingTitle).toBeVisible();
  await expect(onboardingPage.onboardingText).toBeVisible();
});

test('Lets get started onboarding', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login()
  await expect(page).toHaveURL('https://app.votify.app/cs/onboarding?');
  await onboardingPage.clickOnLetsGetStarted();
  await expect(onboardingPage.profilHeader).toBeVisible()
});