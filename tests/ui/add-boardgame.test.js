const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('http://localhost:8085/add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  