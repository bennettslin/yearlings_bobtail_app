import qs from 'qs'
import { getFullPathForSong } from '../api/album/songs'

import {
    ANNOTATION_QUERY_FIELD,
    ANNOTATION_QUERY_INITIAL,
    VERSE_QUERY_FIELD,
    VERSE_QUERY_INITIAL,
} from '../constants/routing'

const YEARLINGS_BOBTAIL_DOMAIN = `https://www.yearlingsbobtail.com`

export const getUrl = path => (
    `${YEARLINGS_BOBTAIL_DOMAIN}${path[0] === '/' ? path : `/${path}`}`
)

export const getSongUrlPath = ({
    songIndex,
    verseIndex,
    annotationIndex,
    isShort,
}) => {
    const
        queryStrings = qs.stringify({
            // Default verse is 0.
            ...verseIndex > 0 && {
                [isShort ? VERSE_QUERY_INITIAL : VERSE_QUERY_FIELD]: verseIndex,
            },

            // Only show if annotation is selected.
            ...annotationIndex > 0 && {
                [isShort ? ANNOTATION_QUERY_INITIAL : ANNOTATION_QUERY_FIELD]: annotationIndex,
            },
        }, { addQueryPrefix: true })

    /**
     * Path is like "9-grasshoppers-lie-heavy/?verse=20&annotation=22." The
     * slash is needed before the query strings to prevent them from also
     * being removed by the plugin that removes trailing slashes.
     */
    return `/${
        isShort ? songIndex : getFullPathForSong(songIndex)
    }${
        queryStrings ? `/${queryStrings}` : ''
    }`
}

export const getSongUrl = ({
    songIndex,
    verseIndex,
    annotationIndex,
    isShort,

}) => {
    const urlPath = getSongUrlPath({
        songIndex,
        verseIndex,
        annotationIndex,
        isShort,
    })

    return getUrl(urlPath)
}
