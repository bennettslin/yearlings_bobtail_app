import { getIsSongValid } from '../../../api/album/songs'
import { getIsVerseValid } from '../../../api/album/verses'
import { getIsAnnotationValid } from '../../../api/album/annotations'
import { getIsArtupSlideValid } from '../../../api/artup/slides'
import { getArtupFullPath } from '../marketing'
import {
    getIndexFromPath,
    getIndexFromQueryString,
} from '../path'
import {
    ANNOTATION_QUERY_FIELD,
    VERSE_QUERY_FIELD,
} from '../../../constants/routing'

export const getRoutingSongIndex = pathname => {
    const routingSongIndex = getIndexFromPath({ pathname })
    return getIsSongValid(routingSongIndex) ? routingSongIndex : NaN
}

export const getRoutingVerseIndex = (search, songIndex) => {
    const routingVerseIndex = getIndexFromQueryString(
        search,
        VERSE_QUERY_FIELD,
    )
    return getIsVerseValid(
        songIndex,
        routingVerseIndex,
    ) ? routingVerseIndex : NaN
}

export const getRoutingAnnotationIndex = (search, songIndex) => {
    const routingAnnotationIndex = getIndexFromQueryString(
        search,
        ANNOTATION_QUERY_FIELD,
    )
    return getIsAnnotationValid(
        songIndex,
        routingAnnotationIndex,
    ) ? routingAnnotationIndex : NaN
}

export const getRoutingArtupIndex = pathname => {
    const routingArtupIndex = getIndexFromPath({
        pathname,
        rootPath: getArtupFullPath(),
    })
    return getIsArtupSlideValid(routingArtupIndex) ? routingArtupIndex : NaN
}
