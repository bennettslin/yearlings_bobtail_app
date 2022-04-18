import { getIsSongValid } from '../../../endpoint/album/songs'
import { getIsVerseValid } from '../../../endpoint/album/verses'
import { getIsAnnotationValid } from '../../../endpoint/album/annotations'
import { getIsSlideValid } from '../../../endpoint/promo/pitches'
import { getPromoPath } from '../promo'
import {
    getIndexFromPath,
    getIndexFromQueryString,
} from '../path'
import {
    ARTUP_SUBPATH,
    ONESHEET_SUBPATH,
    VERSE_QUERY_FIELD,
    VERSE_QUERY_INITIAL,
    ANNOTATION_QUERY_FIELD,
    ANNOTATION_QUERY_INITIAL,
    PARETO_SUBPATH,
} from '../../../constants/routing'

export const getRoutingSongIndex = pathname => {
    const routingSongIndex = getIndexFromPath({ pathname })
    return getIsSongValid(routingSongIndex) ? routingSongIndex : NaN
}

export const getRoutingVerseIndex = (search, songIndex) => {
    const routingVerseIndex = getIndexFromQueryString(
        search,
        [
            VERSE_QUERY_FIELD,
            VERSE_QUERY_INITIAL,
        ],
    )
    return getIsVerseValid(
        songIndex,
        routingVerseIndex,
    ) ? routingVerseIndex : NaN
}

export const getRoutingAnnotationIndex = (search, songIndex) => {
    const routingAnnotationIndex = getIndexFromQueryString(
        search,
        [
            ANNOTATION_QUERY_FIELD,
            ANNOTATION_QUERY_INITIAL,
        ],
    )
    return getIsAnnotationValid(
        songIndex,
        routingAnnotationIndex,
    ) ? routingAnnotationIndex : NaN
}

export const getRoutingPitchIndex = (pitchKey, pathname) => {
    const routingIndex = getIndexFromPath({
        pathname,
        rootPath: getPromoPath(pitchKey),
    })
    return getIsSlideValid(pitchKey, routingIndex) ? routingIndex : NaN
}

export const getRoutingPromoKey = pathname => {
    if (pathname.includes(ONESHEET_SUBPATH)) {
        return ONESHEET_SUBPATH
    } else if (pathname.includes(ARTUP_SUBPATH)) {
        return ARTUP_SUBPATH
    } else if (pathname.includes(PARETO_SUBPATH)) {
        return PARETO_SUBPATH
    } else {
        return ''
    }
}
