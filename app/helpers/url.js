import qs from 'qs'
import {
    ALBUM_TITLE,
    URL_SONG_NAMES
} from '../constants/paths'
import {
    getSongIsLogue,
    getTitleForSong
} from '../api/album/songs'
import { VERSE_QUERY_FIELD, ANNOTATION_QUERY_FIELD } from './routing'

const getPathNameForSongIndex = songIndex => (
    `/${songIndex}_${URL_SONG_NAMES[songIndex]}`
)

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => (
    // Path is something like "9_GrasshoppersLieHeavy?verse=20&annotation=22."
    `${
        getPathNameForSongIndex(songIndex)
    }${
        qs.stringify({
            // Default verse is 0.
            ...verseIndex > 0 && {
                [VERSE_QUERY_FIELD]: verseIndex
            },

            // Only show if annotation is selected.
            ...annotationIndex > 0 && {
                [ANNOTATION_QUERY_FIELD]: annotationIndex
            }
        }, { addQueryPrefix: true })
    }`
)

export const getDocumentHead = songIndex => (
    getSongIsLogue(songIndex) ?
        ALBUM_TITLE :
        `${getTitleForSong(songIndex)} | ${ALBUM_TITLE}`
)
