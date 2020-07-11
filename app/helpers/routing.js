import qs from 'qs'

import { getIsVerseValid } from '../api/album/verses'
import { getIsAnnotationValid } from '../api/album/annotations'
import { getWindow } from '../utils/browser'

const _getQueryStringIndex = key => {
    const { search } = getWindow().location

    return search ?
        parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key]) :
        NaN
}

export const getRoutingVerseIndex = songIndex => {
    const routingVerseIndex = _getQueryStringIndex('v')
    return getIsVerseValid(
        songIndex,
        routingVerseIndex
    ) ? routingVerseIndex : NaN
}

export const getRoutingAnnotationIndex = songIndex => {
    const routingAnnotationIndex = _getQueryStringIndex('a')
    return getIsAnnotationValid(
        songIndex,
        routingAnnotationIndex
    ) ? routingAnnotationIndex : NaN
}
