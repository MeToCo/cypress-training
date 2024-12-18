import { expect, Page } from '@playwright/test'

export const checkIfSongExists = async (page: Page, title: string, artist: string, genre: string) => {
    await expect(page.locator('.song').locator('.song-title').getByText(title)).toBeVisible()
    await expect(page.locator('.song').locator('.song-artist').getByText(artist)).toBeVisible()
    await expect(page.locator('.song').locator('.song-genre').getByText(genre, { exact: true })).toBeVisible()
}

export const openSongByTitle = async (page: Page, title: string) => {
    await page.locator(`.song:has-text('${title}')`).locator(`button`).getByText('View', { exact: true }).click()
}
export const openSongByTitleInNewWindow = async (page: Page, title: string) => {
    await page
        .locator(`.song:has-text('${title}')`)
        .locator(`button`)
        .getByText('View in new Window', { exact: true })
        .click()
}

export const clickAddNewSongButton = async (page: Page)=>{
    await page.getByText('add').click();
}

export const openTabtracker = async (page: Page) => {
    await page.goto('http://localhost:8080');

}
