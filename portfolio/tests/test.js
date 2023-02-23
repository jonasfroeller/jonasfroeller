// Test
import { expect, test } from '@playwright/test';
// Translation
import { base } from '$app/paths'; // basePath

test('test projects page', async ({ page }) => {
	await page.goto(`${base}/en/projects`);
	await expect(page).toHaveTitle(/Projects/);
});
