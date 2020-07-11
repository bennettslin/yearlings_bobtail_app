import {
    getBoolFromStorage,
    getInitialIndicesFromRoutingOrStorage
} from '../../helpers/storage'
import { INITIAL_ANNOTATION_INDEX } from '../selected/default'
import { IS_ACCESS_ON } from '../../constants/store'

const IS_STORED_ACCESS_ON = getBoolFromStorage(IS_ACCESS_ON)

export const ACCESS_DOT_DEFAULTS = {
    accessedDotIndex: -1
}

export const ACCESS_NAV_DEFAULTS = {
    accessedNavIndex: -1
}

export const ACCESS_DEFAULTS = {
    ...ACCESS_DOT_DEFAULTS,
    ...ACCESS_NAV_DEFAULTS,
    isAccessOn: IS_STORED_ACCESS_ON,
    accessedKey: '',
    accessedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    accessedWikiWormholeIndex: 0
}

/** */

export const getAccessDefaults = songIndex => {
    const {
        initialAnnotationIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        ...ACCESS_DOT_DEFAULTS,
        ...ACCESS_NAV_DEFAULTS,
        isAccessOn: IS_STORED_ACCESS_ON,
        accessedKey: '',
        accessedAnnotationIndex: initialAnnotationIndex,
        accessedWikiWormholeIndex: 0
    }
}
