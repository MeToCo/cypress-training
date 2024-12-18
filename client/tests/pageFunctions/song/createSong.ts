import { Page } from "@playwright/test";
import { SongType } from "./songType";

export const fillCreateSongForm = async (page: Page, formData: SongType) => {
    await page.locator('#sngTitle').fill(formData.title)
    await page.locator('#sngArtist').fill(formData.artist)
    await page.locator('#sngGenre').fill(formData.genre)
    await page.locator('#sngAlbum').fill(formData.album)
    await page.locator('#sngAlbumImg').fill(formData.imgUrl)
    await page.locator('#sngYoutube').fill(formData.youtube)
    await page.locator('#sngTab').fill(formData.tab)
    await page.locator('#sngLyrics').fill(formData.lyrics)
}

export const clickSaveCreateSongForm = async (page: Page) => {
    await page.getByText('Create Song').click()
}