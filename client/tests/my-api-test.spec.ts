import test, { expect } from "@playwright/test";

test.describe('API Tests', () => {
    test('Get Songs', async ({ request }) => {
        const response = await request.get('http://localhost:8081/songs');
        expect(response.ok).toBeTruthy();
        expect(await response.json()).toContainEqual(expect.objectContaining({
            title: 'Nevermind'
        }))
    })

    test('Create song', async ({ request }) => {
        const myTestdata = { 
            title: "asd", 
            artist: "asd", 
            genre: "asd", 
            album: "asd", 
            albumImageUrl: "asd", 
            youtubeId: "asd", 
            lyrics: "asd", 
            tab: "asd" }
        const response = await request.post('http://localhost:8081/songs', {
            data: JSON.stringify(myTestdata)
        })
        expect(response.ok).toBeTruthy()
    })

    test.only('Reset songs', async ({request})=> {
        const response = await request.get('http://localhost:8081/reset');
        expect(response.ok()).toBeTruthy()
    })
});