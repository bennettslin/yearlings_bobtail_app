import qs from 'qs'
import { getIsSongValid } from '../api/album/songs'
import { getIsVerseValid } from '../api/album/verses'
import { getIsAnnotationValid } from '../api/album/annotations'
import { getIsPitchSegmentValid } from '../api/pitch/segments'
import { getWindow } from '../utils/browser'

export const VERSE_QUERY_FIELD = 'verse'
export const ANNOTATION_QUERY_FIELD = 'annotation'

export const getRoutingSongIndex = () => {
    const { pathname } = getWindow().location,
        routingSongIndex = parseInt(pathname.replace(/\D/g, ''))

    return getIsSongValid(routingSongIndex) ? routingSongIndex : NaN
}

const _getQueryStringIndex = key => {
    const { search } = getWindow().location

    return search ?
        parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key]) :
        NaN
}

export const getRoutingVerseIndex = songIndex => {
    const routingVerseIndex = _getQueryStringIndex(VERSE_QUERY_FIELD)
    return getIsVerseValid(
        songIndex,
        routingVerseIndex
    ) ? routingVerseIndex : NaN
}

export const getRoutingAnnotationIndex = songIndex => {
    const routingAnnotationIndex = _getQueryStringIndex(ANNOTATION_QUERY_FIELD)
    return getIsAnnotationValid(
        songIndex,
        routingAnnotationIndex
    ) ? routingAnnotationIndex : NaN
}

export const getRoutingPitchIndex = () => {
    const { pathname } = getWindow().location,
        routingPitchIndex = parseInt(pathname.replace(/\D/g, ''))

    return getIsPitchSegmentValid(routingPitchIndex) ? routingPitchIndex : NaN
}
