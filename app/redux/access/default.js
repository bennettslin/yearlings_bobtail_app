import { getBoolFromStorage } from '../../utils/storage'
import { IS_ACCESS_ON } from '../../constants/store'

export const ACCESS_DOT_DEFAULTS = {
    accessedDotIndex: -1,
}

export const ACCESS_NAV_DEFAULTS = {
    accessedNavIndex: -1,
}

export const getAccessDefaults = initialAnnotationIndex => ({
    ...ACCESS_DOT_DEFAULTS,
    ...ACCESS_NAV_DEFAULTS,
    isAccessOn: getBoolFromStorage(IS_ACCESS_ON),
    accessedKey: '',
    accessedAnnotationIndex: initialAnnotationIndex,
    accessedWikiWormholeIndex: 0,
})
