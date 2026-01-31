import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 -  Convert simple daily sentence ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  // 1. Type Singlish
  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama office yanna hadhanne'
  );

  // 2. WAIT until Sinhala text appears (THIS IS THE KEY)
  const sinhalaText = page.locator('text=මම office යන්න හදන්නෙ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  // 3. Read the FULL output text
  const output = await sinhalaText.innerText();

  // 4. Assertion
  expect(output).toContain('මම office යන්න හදන්නෙ');
});

test('Pos_Fun_0002 - Interrogative (questions) forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'oyaa adha ammalaagee gedhara yanavaadha?'
  );

  const sinhalaText = page.locator('text=ඔයා අද අම්මලාගේ ගෙදර යනවාද?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ඔයා අද අම්මලාගේ ගෙදර යනවාද?');
});

test('Pos_Fun_0003 - Convert a short request phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'oyaata gihin car eka aran enna puluvandha?'
  );

  const sinhalaText = page.locator('text=ඔයාට ගිහින් car එක අරන් එන්න පුලුවන්ද?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ඔයාට ගිහින් car එක අරන් එන්න පුලුවන්ද?');
});

test('Pos_Fun_0004 -  Plural usage and pronoun variations ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api yanna hadhadhdhi eyaalaath ennam kivvaa'
  );

  const sinhalaText = page.locator('text=අපි යන්න හදද්දි එයාලාත් එන්නම් කිව්වා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි යන්න හදද්දි එයාලාත් එන්නම් කිව්වා');
});

test('Pos_Fun_0005 - Sentences containing places and common English words ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'apee ayiyaa heta kandy yanavaa kivvaa matath yanna aasayi'
  );

  const sinhalaText = page.locator('text=අපේ අයියා හෙට kandy යනවා කිව්වා මටත් යන්න ආසයි');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපේ අයියා හෙට kandy යනවා කිව්වා මටත් යන්න ආසයි');
});

test('Pos_Fun_0006 - Units of measurements', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'akkaa edhdhi siini 1kg k geennam kivvaa'
  );

  const sinhalaText = page.locator('text=අක්කා එද්දි සීනි 1kg ක් ගේන්නම් කිව්වා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අක්කා එද්දි සීනි 1kg ක් ගේන්නම් කිව්වා');
});

test('Pos_Fun_0007 - Dates ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api novaembar 24 thamaa trip eka yanna hithaagena innee'
  );

  const sinhalaText = page.locator('text=අපි නොවැම්බර් 24 තමා trip එක යන්න හිතාගෙන ඉන්නේ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි නොවැම්බර් 24 තමා trip එක යන්න හිතාගෙන ඉන්නේ.');
});

test('Pos_Fun_0008 -Line breaks (multi-line input)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'oyaa udhee 8.30 vedhdhi campus ekee inna.mama innam oyaa enakan'
  );

  const sinhalaText = page.locator('text=ඔයා උදේ 8.30 වෙද්දි campus එකේ ඉන්න.මම ඉන්නම් ඔයා එනකන්');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ඔයා උදේ 8.30 වෙද්දි campus එකේ ඉන්න.මම ඉන්නම් ඔයා එනකන්');
});

test('Pos_Fun_0009 -  Inputs containing punctuation marks ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'elakiri,supiri kiri machan!!!'
  );

  const sinhalaText = page.locator('text=එලකිරි,සුපිරි කිරි මචන්!!!');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('එලකිරි,සුපිරි කිරි මචන්!!!');
});

test('Pos_Fun_0010 - Convert Polite phrasing ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'please mata podi help ekak karanna puluvandha oyaata?'
  );

  const sinhalaText = page.locator('text=please මට පොඩි help එකක් කරන්න පුලුවන්ද ඔයාට?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('please මට පොඩි help එකක් කරන්න පුලුවන්ද ඔයාට?');
});

test('Pos_Fun_0011 - Convert Imperative command sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'karuNaakaralaa yanna'
  );

  const sinhalaText = page.locator('text=කරුණාකරලා යන්න');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('කරුණාකරලා යන්න');
});

test('Pos_Fun_0012 - Convert simple daily activity sentence ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'thaaththaa kadee innee.'
  );

  const sinhalaText = page.locator('text=තාත්තා කඩේ ඉන්නේ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('තාත්තා කඩේ ඉන්නේ');
});

test('Pos_Fun_0013 - Convert compound sentence with description', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'ethana loku accident ekak unaa.polisiye ayayi gamee ayayi okkoma ethana vatavelaa hitiyaa'
  );

  const sinhalaText = page.locator('text=එතන ලොකු accident එකක් උනා.පොලිසියෙ අයයි ගමේ අයයි ඔක්කොම එතන වටවෙලා හිටියා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('එතන ලොකු accident එකක් උනා.පොලිසියෙ අයයි ගමේ අයයි ඔක්කොම එතන වටවෙලා හිටියා');
});

test('Pos_Fun_0014 -  Convert Paragraph-style input  ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'magee jiivithee mama aasama kaalee thamayi magee saamaanya pela liyapu kaalee.ee kaalee mama godak sathuten hitiyaa vageema mata kisima dhukak kalakiriimak thibbee naee . dhaen vagee loku vagakiim godak anaagathee gaena loku bayak ee kaalee mata thibbee naee.mama harima sathuten thamayi hitiyee.'
  );

  const sinhalaText = page.locator('text=මගේ ජීවිතේ මම ආසම කාලේ තමයි මගේ සාමාන්ය පෙල ලියපු කාලේ.ඒ කාලේ මම ගොඩක් සතුටෙන් හිටියා වගේම මට කිසිම දුකක් කලකිරීමක් තිබ්බේ නෑ . දැන් වගේ ලොකු වගකීම් ගොඩක් අනාගතේ ගැන ලොකු බයක් ඒ කාලේ මට තිබ්බේ නෑ.මම හරිම සතුටෙන් තමයි හිටියේ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මගේ ජීවිතේ මම ආසම කාලේ තමයි මගේ සාමාන්ය පෙල ලියපු කාලේ.ඒ කාලේ මම ගොඩක් සතුටෙන් හිටියා වගේම මට කිසිම දුකක් කලකිරීමක් තිබ්බේ නෑ . දැන් වගේ ලොකු වගකීම් ගොඩක් අනාගතේ ගැන ලොකු බයක් ඒ කාලේ මට තිබ්බේ නෑ.මම හරිම සතුටෙන් තමයි හිටියේ.');
});

test('Pos_Fun_0015 - Convert question with multiple ideas ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama dhaen thamaa kaeema kanna hadhannee.oyath enavadha kaeema kanna?'
  );

  const sinhalaText = page.locator('text=මම දැන් තමා කෑම කන්න හදන්නේ.ඔයත් එනවද කෑම කන්න?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම දැන් තමා කෑම කන්න හදන්නේ.ඔයත් එනවද කෑම කන්න?');
});

test('Pos_Fun_0016 - Convert English abbreviations and short forms with description', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'apee ammaa OTP eka ara manussayata dhiilaa dhan.maara prashnayak velaa thiyennee.'
  );

  const sinhalaText = page.locator('text=අපේ අම්මා OTP එක අර මනුස්සයට දීලා දන්.මාර ප්‍රශ්නයක් වෙලා තියෙන්නේ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපේ අම්මා OTP එක අර මනුස්සයට දීලා දන්.මාර ප්‍රශ්නයක් වෙලා තියෙන්නේ.');
});


test('Pos_Fun_0017 - Convert sentences with multiple spaces ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama   vaedata   yanavaa.'
  );

  const sinhalaText = page.locator('text=මම   වැඩට   යනවා.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම   වැඩට   යනවා.');
});

test('Pos_Fun_0018 - Convert multiline polite request ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'karuNaakaralaa meeka ganna.mama kaemaeththen nee dhennee.'
  );

  const sinhalaText = page.locator('text=මට මේක කරන්න පුළුවන්');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('කරුණාකරලා මේක ගන්න.මම කැමැත්තෙන් නේ දෙන්නේ.');
});

test('Pos_Fun_0019 - Convert multiline polite Slang and colloquial phrasing ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'appatasiri, eyaa ehema kenek kiyalaa mama dhaenan hitiyee naeenee yakoo.'
  );

  const sinhalaText = page.locator('text=අප්පටසිරි, එයා එහෙම කෙනෙක් කියලා මම දැනන් හිටියේ නෑනේ යකෝ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අප්පටසිරි, එයා එහෙම කෙනෙක් කියලා මම දැනන් හිටියේ නෑනේ යකෝ.');
});

test('Pos_Fun_0020 - Translate sentence with pronoun variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api adha dhivvemu'
  );

  const sinhalaText = page.locator('text=අපි අද දිව්වෙමු');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි අද දිව්වෙමු');
});

test('Pos_Fun_0021 - Convert paragraph about daily routine ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'dhaen mama enavaa.mama aavaata pasu api kanna yamu.iitapasse api film eka balala nidhaaganna ammalaage gedhara yamu.'
  );

  const sinhalaText = page.locator('text=දැන් මම එනවා.මම ආවාට පසු අපි කන්න යමු.ඊටපස්සෙ අපි film එක බලල නිදාගන්න අම්මලාගෙ ගෙදර යමු.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('දැන් මම එනවා.මම ආවාට පසු අපි කන්න යමු.ඊටපස්සෙ අපි film එක බලල නිදාගන්න අම්මලාගෙ ගෙදර යමු.');
});

test('Pos_Fun_0022 -Convert Paragraph-style input (medium/long)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'ganvathura nisaa avathaen vuu janathaavata rajayen sahana saelasiimata piyavara gena aetha.'
  );

  const sinhalaText = page.locator('text=ගන්වතුර නිසා අවතැන් වූ ජනතාවට රජයෙන් සහන සැලසීමට පියවර ගෙන ඇත');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ගන්වතුර නිසා අවතැන් වූ ජනතාවට රජයෙන් සහන සැලසීමට පියවර ගෙන ඇත');
}); 

test('Pos_Fun_0023 -  Convert Singular/plural usage and pronoun variations ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama yanna hadhannee.'
  );

  const sinhalaText = page.locator('text=මම යන්න හදන්නේ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම යන්න හදන්නේ.');
});