import { Page } from '@playwright/test'
import { SongType } from './songType'

export const fillEditSongForm = async (page: Page, formData: SongType) => {
    await page.locator(`[aria-label="Title"]`).fill(formData.title);
    await page.locator(`[aria-label="Artist"]`).fill(formData.artist);
    await page.locator(`[aria-label="Genre"]`).fill(formData.genre);
    await page.locator(`[aria-label="Album"]`).fill(formData.album);
    await page.locator(`[aria-label="Album Image Url"]`).fill(formData.imgUrl);
    await page.locator(`[aria-label="YouTube ID"]`).fill(formData.youtube);
    await page.locator(`[aria-label="Tab"]`).fill(formData.tab);
    await page.locator(`[aria-label="Lyrics"]`).fill(formData.lyrics);
};

export const clickEditSongFormSave = async (page: Page) => {
    await page.locator('button').getByText('Save Song').click();
}
