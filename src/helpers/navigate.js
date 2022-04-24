import { navigate } from 'gatsby'
import { getWindow } from '../utils/browser'
import { getTrimmedPathname } from '../utils/gatsby/path'
import { getFormattedPromoPath } from '../utils/gatsby/promo'
import { getSongUrlPath } from './url'

export const reloadRootPage = () => {
    logGeneral('Reload from root page.')
    /**
     * Navigation from promo back to album cannot be done through gatsby, since
     * it does not change store provider.
     */
    getWindow().location.href = '/'
}

export const navigateToAlbumPage = (
    songIndex,
    verseIndex,
    annotationIndex,
    replace = false,
) => {
    logGeneral(`Manually ${replace ? 'replaced in' : 'pushed to'} navigation history: ${getTrimmedPathname(getSongUrlPath({
        songIndex,
        verseIndex,
        annotationIndex,
    }))}`)
    navigate(
        getSongUrlPath({
            songIndex,
            verseIndex,
            annotationIndex,
        }),
        { replace },
    )
}

export const navigateToPromoPage = (
    pitchKey,
    pitchSlideIndex,
    replace = false,
) => {
    logGeneral(`Manually ${replace ? 'replaced in' : 'pushed to'} navigation history: ${`${getFormattedPromoPath(pitchKey, pitchSlideIndex)}`}`)
    navigate(
        `/${getFormattedPromoPath(pitchKey, pitchSlideIndex)}`,
        { replace },
    )
}

// Used by 404 and deprecated browser page.
export const navigateToStandalonePage = (
    pathname,
    replace = true,
) => {
    logGeneral(`Manually replaced in navigation history: ${pathname ? `${pathname}` : ''}`)
    navigate(
        pathname ? `/${pathname}` : '',
        { replace },
    )
}
