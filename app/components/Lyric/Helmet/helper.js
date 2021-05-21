import {
    getSongIsLogue,
    getTitleForSong,
} from '../../../api/album/songs'
import { getTitleForAlbum } from '../../../api/album/title'

export const getDocumentHead = songIndex => (
    getSongIsLogue(songIndex) ?
        getTitleForAlbum() :
        `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)
