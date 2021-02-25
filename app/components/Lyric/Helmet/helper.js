import {
    getSongIsLogue,
    getTitleForSong,
} from '../../../api/album/songs'
import { ALBUM_TITLE } from '../../../constants/paths'

export const getDocumentHead = songIndex => (
    getSongIsLogue(songIndex) ?
        ALBUM_TITLE :
        `${getTitleForSong(songIndex)} | ${ALBUM_TITLE}`
)
