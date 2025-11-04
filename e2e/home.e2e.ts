import { test, expect } from "@playwright/test";

test("home page renders", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Create Next App/i); // <- updated
  await expect(page.locator("body")).toBeVisible();
});
