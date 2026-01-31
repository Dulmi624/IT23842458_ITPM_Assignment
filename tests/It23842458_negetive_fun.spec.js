import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala (10)', () => {

  async function translate(page, input) {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    const inputBox = page.locator('textarea:not([readonly])');
    const outputBox = page.locator('textarea[readonly]');

    await inputBox.fill(input);

    // wait until system produces some output
    await expect(outputBox).not.toHaveValue('');

    return (await outputBox.inputValue()).trim();
  }

  test('NEG_FUN_0001 -  Convert Missing spaces / joined words (stress test) ', async ({ page }) => {
    const actual = await translate(page, 'mamagedharayanavaaikmanatamataparakkuyi');
    const correct = 'මමගෙදරයනවාඉක්මනටමටපරක්කුයි';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0002 - Verify clear functions', async ({ page }) => {
    const actual = await translate(page, 'oyata kohomadaaaaa?????');
    expect(actual).not.toBe('ඔයාට කොහොමද?????');
  });

  test('NEG_FUN_0003 - Empty input ', async ({ page }) => {
    const actual = await translate(page, '(no input)');
    const correct = '(no output)';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0004 -  Repeated characters', async ({ page }) => {
    const actual = await translate(page, 'aaaaaaa bbbbbbb ccccccc');
    const correct = 'aaaaaaa bbbbbbb ccccccc';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0005 - Numbers only', async ({ page }) => {
    const actual = await translate(page, '47578687789857600');
    expect(actual).not.toBe('47578687789857600');
  });

  test('NEG_FUN_0006 - Invalid word structure', async ({ page }) => {
    const actual = await translate(page, 'mamaaa yannnnneeee');
    const correct = 'මම යන්නෙ නෑ';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0007 - Mixed English + Sinhala randomly', async ({ page }) => {
    const actual = await translate(page, 'mama office yannawa today');
    const correct = 'මම වැඩට යනවා අද';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0008 - Meaningless sentence', async ({ page }) => {
    const actual = await translate(page, 'anna kanna dunna yanna');
    const correct = 'අන්න කන්න දුන්නා යන්න';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0009 - Special characters only', async ({ page }) => {
    const actual = await translate(page, '#$%%$!%^^@$^%!& oyaa enavaadha maath ekka gedhara yanna');
    const correct = 'ඔයා එනවාද මාත් එක්ක ගෙදර යන්න';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0010 - Multiple line breaks', async ({ page }) => {
    const actual = await translate(page, 'mmama yannawa           oya enne nadda');
    const correct = 'මම යන්නwඅ       ඔය එන්නෙ නඩ්ඩ';
    expect(actual).not.toBe(correct);
  });

});