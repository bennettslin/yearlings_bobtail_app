import { navigate } from 'gatsby'
import { getWindow } from '../utils/browser'
import { getFormattedPromoPath } from '../utils/gatsby/promo'
import { getSongUrlPath } from './url'

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

export const navigateToPitchPage = (pitchKey, pitchSlideIndex) => {
    navigate(
        `/${getFormattedPromoPath(pitchKey, pitchSlideIndex)}`,
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
