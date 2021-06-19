import { navigate } from 'gatsby'
import { getPathForArtupSlide } from '../api/promo/artup'
import { getPathForArtup2Slide } from '../api/promo/artup2'
import { getWindow } from '../utils/browser'
import {
    getArtupFullPath,
    getArtup2FullPath,
} from '../utils/gatsby/promo'
import { getUrlPath } from './url'

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
    navigate(
        getUrlPath({
            songIndex,
            verseIndex,
            annotationIndex,
        }),
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
