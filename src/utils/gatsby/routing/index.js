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
    ANNOTATION_QUERY_FIELD,
    ANNOTATION_QUERY_INITIAL,
    PITCH_KEYS,
    VERSE_QUERY_FIELD,
    VERSE_QUERY_INITIAL,
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

export const getRoutingPromoKey = rawPathname => {
    const pathname = rawPathname.replace('promo', '').replace('/', '')

    // It's the homepage.
    if (!pathname) {
        return pathname
    }

    // It's a pitch page.
    if (PITCH_KEYS.some(pitchKey => pathname.includes(pitchKey))) {
        return PITCH_KEYS.reduce((matchedPitchKey, pitchKey) => (
            pathname.includes(pitchKey) ? pitchKey : matchedPitchKey
        ), '')
    }

    // It's a single page.
    return pathname
}

export const getRoutingPitchIndex = (pitchKey, pathname) => {
    const routingIndex = getIndexFromPath({
        pathname,
        rootPath: getPromoPath(pitchKey),
    })
    return getIsSlideValid(pitchKey, routingIndex) ? routingIndex : NaN
}
