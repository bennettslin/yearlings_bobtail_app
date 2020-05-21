import {
    INITIAL_ANNOTATION_INDEX,
    IS_STORED_ACCESS_ON
} from '../../constants/storage'

export const ACCESS_DOT_DEFAULTS = {
    accessedDotIndex: -1
}

export const ACCESS_NAV_DEFAULTS = {
    accessedNavIndex: -1
}

export const ACCESS_DEFAULTS = {
    ...ACCESS_DOT_DEFAULTS,
    ...ACCESS_NAV_DEFAULTS,
    isAccessOn: IS_STORED_ACCESS_ON || false,
    isAccessedIndexedAnchorShown: false,
    accessedKey: '',
    accessedAnnotationIndex: INITIAL_ANNOTATION_INDEX || 0,
    accessedWikiWormholeIndex: 0
}
