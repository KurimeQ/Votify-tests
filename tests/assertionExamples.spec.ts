import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  await page.goto('https://auth.votify.app');
  await expect(page.getByPlaceholder('name@gmail.com')).toBeVisible();
  await expect(page.getByTestId('passwordInput')).toBeEditable();
  await expect(page.getByTestId('submitAction')).toHaveCount(1);
  await expect(page.locator('#submitAction')).not.toBeVisible();
});

