import { Page } from "@playwright/test";

export const resetData = async (page: Page) => {
    await page.goto('http://localhost:8081/reset');
}