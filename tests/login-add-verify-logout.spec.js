const { test, expect } = require('@playwright/test');

test('login -> add one product -> verify cart -> logout', async ({ page }) => {
  const base = 'https://www.saucedemo.com/';
  const username = 'standard_user';
  const password = 'secret_sauce';

  // 1) Go to login page
  await page.goto(base);

  // 2) Login
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');

  // Ensure reached inventory page
  await expect(page).toHaveURL(/.*inventory.html/);

  // 3) Add first product to cart
  const firstItem = page.locator('.inventory_item').first();
  const itemName = await firstItem.locator('.inventory_item_name').innerText();
  await firstItem.locator('button:has-text("Add to cart")').click();

  // 4) Go to cart
  await page.click('#shopping_cart_container a, .shopping_cart_link');
  await expect(page).toHaveURL(/.*cart.html/);

  // 5) Verify product name in cart matches
  const cartItemName = await page.locator('.cart_item .inventory_item_name').innerText();
  expect(cartItemName.trim()).toBe(itemName.trim());

  // 6) Logout: open menu and click logout
  await page.click('#react-burger-menu-btn');
  await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });
  await page.click('#logout_sidebar_link');

  // Verify returned to login
  await expect(page.locator('#login-button')).toBeVisible();
});
