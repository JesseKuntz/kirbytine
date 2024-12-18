import { expect, test } from "@playwright/test";

test("Create reading", async ({ page }) => {
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);

  await page.goto("/");

  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("This is an e2e test message!");
  await page.getByRole("button", { name: "Get Link" }).click();
  await page.getByRole("button", { name: "Copy Link" }).click();

  const clipboardContent = await page.evaluate(() =>
    navigator.clipboard.readText()
  );
  await page.goto(clipboardContent);

  await page.getByRole("button", { name: "Open ❤️" }).click();
  const text = await page.getByText("This is an e2e test message!");
  await expect(text).toBeVisible();
});
