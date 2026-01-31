import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Sinhala output updates automatically in real-time  ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mata gedhara yanna ona'
  );

  const sinhalaText = page.locator('text=මට ගෙදර යන්න ඔන');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මට ගෙදර යන්න ඔන');

});