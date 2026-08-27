import { expect, test } from "playwright/test";

test.describe("FC001 — planejador por cenário", () => {
  test("exibe cenários e tarefas ligadas ao cofre", async ({ page }) => {
    await page.goto(process.env.BASE_URL ?? "http://127.0.0.1:8080/");

    const selector = page.getByLabel("Como você pretende usar o computador?");
    await expect(selector).toBeVisible();
    await expect(selector.locator("option")).toHaveCount(6);
    await expect(page.getByText("Confirmar backup no HD externo")).toBeVisible();

    await selector.selectOption("format-external-drive");
    await expect(page.getByText("Iniciar Start Linux Mint sem instalar")).toBeVisible();
    await expect(page.getByText("Escolher ext4 para Linux ou exFAT")).toBeVisible();
  });
});
