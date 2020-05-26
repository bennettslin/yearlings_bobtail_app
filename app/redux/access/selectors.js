export const IS_ACCESS_ON_SELECTOR = (
    { accessStore: { isAccessOn } }
) => isAccessOn

export const ACCESSED_DOT_INDEX_SELECTOR = (
    { accessStore: { accessedDotIndex } }
) => accessedDotIndex

export const ACCESSED_NAV_INDEX_SELECTOR = (
    { accessStore: { accessedNavIndex } }
) => accessedNavIndex

export const IS_ACCESSED_INDEXED_ANCHOR_SHOWN_SELECTOR = (
    { accessStore: { isAccessedIndexedAnchorShown } }
) => isAccessedIndexedAnchorShown

export const ACCESSED_KEY_SELECTOR = (
    { accessStore: { accessedKey } }
) => accessedKey

export const ACCESSED_ANNOTATION_INDEX_SELECTOR = (
    { accessStore: { accessedAnnotationIndex } }
) => accessedAnnotationIndex

export const ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR = (
    { accessStore: { accessedWikiWormholeIndex } }
) => accessedWikiWormholeIndex
