import { expect, Locator, test, Page, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, TestType } from "@playwright/test";
import { clickSaveCreateSongForm, fillCreateSongForm } from "./pageFunctions/song/createSong";
import { SongType } from "./pageFunctions/song/songType";
import { checkIfSongExists, clickAddNewSongButton, openTabtracker, openSongByTitle } from "./pageFunctions/song/songList";
import { clickEditSongButton } from "./pageFunctions/song/songDetails";
import { clickEditSongFormSave, fillEditSongForm } from "./pageFunctions/song/editSong";
import { resetData } from "./pageFunctions/utils/testdataUtils";

const testData: SongType = {
    title: 'Goali',
    artist: 'Züri West',
    genre: 'Rock',
    album: 'Goali',
    imgUrl: 'https://vinyltosecond.com/storage/images/image?remote=https%3A%2F%2Fvinyltosecond.com%2FWebRoot%2FStore3%2FShops%2F182625%2F63CA%2FB59F%2F2844%2F17F3%2F639B%2F0A01%2F080F%2FB063%2FR-5294226-1389816886-6782.jpeg.jpg&shop=182625&width=500&height=2560',
    youtube: 'https://www.youtube.com/watch?v=Y9oQ6Uj9yDY',
    tab: 'test',
    lyrics: `E härzlechen Applous däm alte Goalie
U chly meh Glück für ds nächste Mal
Bis denn isch är de wider besser zwäg
U när verwütscht är dä uf jede Fall
Es isch e schöne Schuss gsi mues me säge
Aber di Parade won är zeigt het oh
Leider het är ne nid chönne häbe
Är het ne irgendwie nid rächt gse cho
Aber itz steit är emu wider
Dänen ufem Parkplatz
Früsch düschelet ufem Wäg für hei
U jetz ladt är syni Täschen yy
U ds Regi laht der Charen aa
U när fahre si dervo di zwöi
Das wär e schöne Schluss gsy muess me säge
Vilech eine für nes angers Mal
Im nächschte Fium oder im nächschte Läbe
Verwütscht är dä uf jede Fall
Chumm Goalie

Jetz steit är emu wider
Dert änen ufem Parkplatz
Früsch düschelet ufem Wäg für hei
U jetz ladt är syni Täschen yy
U ds Regi laht der Charen aa
U när fahre si dervo di zwöi
E härzlechen Applous däm alte Goalie
U chly meh Glück für ds nächste Mal
Bis denn isch er de wider besser zwäg
U när verwütscht är dä uf jede Fall
Bis denn isch er de wider besser zwäg
U när verwütscht är dä uf jede Fall
Bis denn isch er de wider besser zwäg
U när verwütscht är dä uf jede Fall`
}

test.describe('CRUD Test Songs', () => {
    test.describe.configure({ mode: "serial" });
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        resetData(page);
    });
    test('create', async () => {

        await openTabtracker(page);
        await clickAddNewSongButton(page)

        await fillCreateSongForm(page, testData)
        await clickSaveCreateSongForm(page)
    })
    test('read', async () => {
        await checkIfSongExists(page, testData.title, testData.artist, testData.genre)
    })
    test('update', async () => {
        const myUpdateTestdata: SongType = {
            album: 'myAlbum',
            artist: 'myArtist',
            genre: 'myGenre',
            imgUrl: 'abc',
            tab: 'test',
            lyrics: 'hello world',
            title: 'asdasd',
            youtube: 'asdasd'
        }
        await openSongByTitle(page, testData.title);
        await clickEditSongButton(page);

        await fillEditSongForm(page, myUpdateTestdata)
        await clickEditSongFormSave(page);

        await openTabtracker(page);
        await checkIfSongExists(page, myUpdateTestdata.title, myUpdateTestdata.artist, myUpdateTestdata.genre)
    })
    test('delete', async () => {
        await resetData(page);
    })

})

