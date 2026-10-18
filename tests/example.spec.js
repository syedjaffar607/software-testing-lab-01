// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/' , {waitUntil: 'domcontentloaded' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://playwright.dev/' , {waitUntil: 'domcontentloaded' });

  // Click the get started link.
  await Promise.all([page.waitForLoadState('domcontentloaded'),
    page.getByRole('link', { name: 'Get started' }).click() ]);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
