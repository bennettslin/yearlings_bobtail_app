import qs from 'qs'
import { getPathForSong } from '../api/album/songs'
import { getPathForArtupSlide } from '../api/artup/slides'
import { getArtupFullPath } from '../utils/gatsby/marketing'
import {
    ANNOTATION_QUERY_FIELD,
    VERSE_QUERY_FIELD,
} from '../constants/routing'

const getUrlPathForSongPage = songIndex => (
    `/${songIndex}-${getPathForSong(songIndex)}`
)

export const getUrlPathForArtupPage = artupSlideIndex => (
    `/${getArtupFullPath()}/${artupSlideIndex}-${getPathForArtupSlide(artupSlideIndex)}`
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
            getUrlPathForSongPage(songIndex)
        }${
            queryStrings ? '/' : ''
        }${
            queryStrings
        }`
    )
}
