import qs from 'qs'
import {
    getSongIsLogue,
    getPathForSong,
    getTitleForSong
} from '../api/album/songs'
import { getPathForPitchSegment } from '../api/pitch/segments'
import { ALBUM_TITLE } from '../constants/paths'
import {
    VERSE_QUERY_FIELD,
    ANNOTATION_QUERY_FIELD
} from './routing'

const getPathForSongPage = songIndex => (
    `/${songIndex}-${getPathForSong(songIndex)}`
)

export const getPathForPitchPage = pitchSegmentIndex => (
    `/Pitch/${pitchSegmentIndex}-${getPathForPitchSegment(pitchSegmentIndex)}`
)

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => (
    // Path is something like "9-grasshoppers-lie-heavy?verse=20&annotation=22."
    `${
        getPathForSongPage(songIndex)
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
