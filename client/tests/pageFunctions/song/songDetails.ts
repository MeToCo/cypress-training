import { Page } from "@playwright/test";

export const clickEditSongButton = async (page: Page) => {
    await page.getByText('Edit').click();
}