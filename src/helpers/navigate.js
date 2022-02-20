import { navigate } from 'gatsby'
import { getPathForArtupSlide } from '../endpoint/promo/artup'
import { getPathForParetoSlide } from '../endpoint/promo/pareto'
import { getWindow } from '../utils/browser'
import { getPromoPath } from '../utils/gatsby/promo'
import { getSongUrlPath } from './url'
import { ARTUP_SUBPATH, PARETO_SUBPATH } from '../constants/routing'

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

export const navigateToParetoPage = paretoSlideIndex => {
    navigate(
        `/${
            getPromoPath(PARETO_SUBPATH)
        }/${
            paretoSlideIndex
        }-${
            getPathForParetoSlide(paretoSlideIndex)
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
