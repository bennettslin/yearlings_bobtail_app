import { navigate } from 'gatsby'
import { getPathForArtupSlide } from '../api/promo/artup'
import { getPathForArtup2Slide } from '../api/promo/artup2'
import { getWindow } from '../utils/browser'
import { getPromoPath } from '../utils/gatsby/promo'
import { getSongUrlPath } from './url'
import { ARTUP_2_SUBPATH, ARTUP_SUBPATH } from '../constants/routing'

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
        getSongUrlPath({
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
            getPromoPath(ARTUP_SUBPATH)
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
            getPromoPath(ARTUP_2_SUBPATH)
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
