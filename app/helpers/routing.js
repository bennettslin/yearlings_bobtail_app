import qs from 'qs'

import { getIsSongValid } from '../album/api/songs'
import { getIsVerseValid } from '../album/api/verses'
import { getIsAnnotationValid } from '../album/api/annotations'

export const getRoutingSongIndex = () => {
    const { pathname } = window.location,
        routingSongIndex = parseInt(pathname.replace(/\D/g, ''))
    return getIsSongValid(routingSongIndex) ? routingSongIndex : NaN
}

const _getQueryStringIndex = key => {
    const { search } = window.location
    if (!search) {
        return null
    }

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
