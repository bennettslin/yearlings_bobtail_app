import qs from 'qs'
import { navigate } from 'gatsby'
import { getFullPathForSong } from '../api/album/songs'
import { getPathForArtupSlide } from '../api/promo/artup'
import { getPathForArtup2Slide } from '../api/promo/artup2'
import { getWindow } from '../utils/browser'
import {
    getArtupFullPath,
    getArtup2FullPath,
} from '../utils/gatsby/promo'
import {
    ANNOTATION_QUERY_FIELD,
    VERSE_QUERY_FIELD,
} from '../constants/routing'

export const reloadFromRoot = () => {
    /**
     * Navigation cannot be done through gatsby, since it does not
     * change store provider. Push, not replace, in history.
     */
    getWindow().location.href = '/'
}

export const navigateToAlbumPage = (
    songIndex,
    verseIndex,
    annotationIndex,
) => {
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
        }, { addQueryPrefix: true }),

        /**
         * Path is like "9-grasshoppers-lie-heavy/?verse=20&annotation=22." The
         * slash is needed before the query strings to prevent them from also
         * being removed by the plugin that removes trailing slashes.
         */
        albumUrl = `/${
            getFullPathForSong(songIndex)
        }${
            queryStrings ? `/${queryStrings}` : ''
        }`

    navigate(
        albumUrl,
        // Replace, not push, in history.
        { replace: true },
    )
}

export const navigateToArtupPage = artupSlideIndex => {
    navigate(
        `/${
            getArtupFullPath()
        }/${
            artupSlideIndex
        }-${
            getPathForArtupSlide(artupSlideIndex)
        }`,
        // Replace, not push, in history.
        { replace: true },
    )
}

export const navigateToArtup2Page = artup2SlideIndex => {
    navigate(
        `/${
            getArtup2FullPath()
        }/${
            artup2SlideIndex
        }-${
            getPathForArtup2Slide(artup2SlideIndex)
        }`,
        // Replace, not push, in history.
        { replace: true },
    )
}

export const navigateToPathname = pathname => {
    navigate(
        pathname ? `/${pathname}` : '',
        // Replace, not push, in history.
        { replace: true },
    )
}
