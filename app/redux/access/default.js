import { getBoolFromStorage } from '../../utils/storage'
import { IS_ACCESS_ON } from '../../constants/store'

const IS_STORED_ACCESS_ON = getBoolFromStorage(IS_ACCESS_ON)

export const ACCESS_DOT_DEFAULTS = {
    accessedDotIndex: -1,
}

export const ACCESS_NAV_DEFAULTS = {
    accessedNavIndex: -1,
}

export const getAccessDefaults = initialAnnotationIndex => ({
    ...ACCESS_DOT_DEFAULTS,
    ...ACCESS_NAV_DEFAULTS,
    isAccessOn: IS_STORED_ACCESS_ON,
    accessedKey: '',
    accessedAnnotationIndex: initialAnnotationIndex,
    accessedWikiWormholeIndex: 0,
})

export const ACCESS_PROMO_PAGE_DEFAULTS = {
    isAccessOn: IS_STORED_ACCESS_ON,
}

