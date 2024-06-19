import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { OnboardingPage } from '../page-objects/OnboardingPage';

test('Verify onboarding page title', async ({ page }) => {
  test.info().annotations.push({
    type: 'Test',
    description: 'This test verifies the onboarding page title is visible after login.'
  })
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await test.step('Go to login page', async () => {
    await loginPage.gotoLoginPage();
  });
  await test.step('Click login button', async () => {
    await loginPage.login();
  });
  await test.step('Verify onboarding is visible', async () => {
    await expect(onboardingPage.title, 'Onboarding was not shown or there is invalid link').toBeVisible();
  });
});

test('Verify onboarding page texts', async ({ page }) => {
  test.info().annotations.push({
    type: 'Test',
    description: 'This test verifies the onboarding page texts are visible and contain expected content.'
  })
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await test.step('Go to login page', async () => {
    await loginPage.gotoLoginPage();
  });
  await test.step('Click login button', async () => {
    await loginPage.login();
  });
  await test.step('Verify onboarding Title is visible', async () => {
    await expect(onboardingPage.onboardingTitle, 'Onboarding Title was not shown').toBeVisible();
  });
  await test.step('Verify onboarding Text is visible', async () => {
    await expect(onboardingPage.onboardingText, 'Onboarding Text was not shown').toBeVisible();
  });
});

test.slow('Lets get started onboarding', async ({ page }) => {
  test.info().annotations.push({
    type: 'Test',
    description: 'This test verifies clicking "Lets get started" button navigates to the next screen.'
  })
  const loginPage = new LoginPage(page);
  const onboardingPage = new OnboardingPage(page);
  await test.step('Go to login page', async () => {
    await loginPage.gotoLoginPage();
  });
  await test.step('Click login button', async () => {
    await loginPage.login();
  });
  await test.step('Verify that correct link was presented', async () => {
    await expect(page, 'Onboarding was not shown or there is invalid link').toHaveURL('https://app.votify.app/cs/onboarding?');
  });  
  await test.step('Click Lets get started', async () => {
    await onboardingPage.clickOnLetsGetStarted();
  });
  await test.step('Profil header is visible', async () => {
    await expect(onboardingPage.profilHeader, 'Profil header is not visible').toBeVisible();
  });
});