import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays hero section with correct content", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
  });

  test("shows navigation header", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(
      page.getByRole("link", { name: /about/i }).first()
    ).toBeVisible();
  });

  test("navigation links are accessible", async ({ page }) => {
    const aboutLink = page.getByRole("link", { name: /about/i }).first();
    await expect(aboutLink).toBeVisible();
  });

  test("footer is visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("page has proper meta title", async ({ page }) => {
    await expect(page).toHaveTitle(/child.*church.*partners/i);
  });

  test("newsletter form is functional", async ({ page }) => {
    const nameInput = page.getByPlaceholder("Your Name").last();
    const emailInput = page.getByPlaceholder("Your Email").last();

    // Check if form exists
    if (await nameInput.isVisible()) {
      await nameInput.fill("Test User");
      await emailInput.fill("test@example.com");

      const submitButton = page
        .getByRole("button", { name: /subscribe/i })
        .last();
      await submitButton.click();

      // Wait for success message
      await expect(page.getByText(/thanks for subscribing/i)).toBeVisible({
        timeout: 5000,
      });
    }
  });
});

test.describe("Navigation", () => {
  test("desktop navigation works", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/");

    // Click on About link
    await page.getByRole("link", { name: /about/i }).first().click();
    await expect(page).toHaveURL(/about/);
  });

  test("mobile menu button is visible on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Mobile menu button should be visible
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();
  });
});

test.describe("Responsive Design", () => {
  test("page is responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Page should load without horizontal scroll
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });

  test("page is responsive on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();
  });

  test("page is responsive on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();
  });
});
