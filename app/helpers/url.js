import qs from 'qs'
import {
    getSongIsLogue,
    getPathForSong,
    getTitleForSong,
} from '../api/album/songs'
import { getPathForPitchSegment } from '../api/pitch/segments'
import { ALBUM_TITLE } from '../constants/paths'
import {
    VERSE_QUERY_FIELD,
    ANNOTATION_QUERY_FIELD,
} from './routing'

const getPathForSongPage = songIndex => (
    `/${songIndex}-${getPathForSong(songIndex)}`
)

export const getPathForPitchPage = pitchSegmentIndex => (
    `/pitch/${pitchSegmentIndex}-${getPathForPitchSegment(pitchSegmentIndex)}`
)

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => {
    const
        queryStrings = qs.stringify({
            // Default verse is 0.
            ...verseIndex > 0 && {
                [VERSE_QUERY_FIELD]: verseIndex,
            },

            // Only show if annotation is selected.
            ...annotationIndex > 0 && {
                [ANNOTATION_QUERY_FIELD]: annotationIndex,
            },
        }, { addQueryPrefix: true })

    return (
        /**
         * Path is like "9-grasshoppers-lie-heavy/?verse=20&annotation=22." The
         * slash is needed before the query strings to prevent them from also
         * being removed by the plugin that removes trailing slashes.
         */
        `${
            getPathForSongPage(songIndex)
        }${
            queryStrings ? '/' : ''
        }${
            queryStrings
        }`
    )
}

export const getDocumentHead = songIndex => (
    getSongIsLogue(songIndex) ?
        ALBUM_TITLE :
        `${getTitleForSong(songIndex)} | ${ALBUM_TITLE}`
)
