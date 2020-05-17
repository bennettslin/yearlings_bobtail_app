import { getWikiWormholesForAnnotation } from '../../../album/api/annotations'

export const getWikiUrl = ({
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    isMobileWiki

}) => {
    if (selectedWikiIndex) {
        // Since annotation index is 1-based, it's invalid if 0.
        const
            annotationIndex =
                carouselAnnotationIndex ||
                selectedAnnotationIndex,

            annotationWikiWormholes = getWikiWormholesForAnnotation(
                selectedSongIndex,
                annotationIndex
            ),

            partialPath = annotationWikiWormholes[selectedWikiIndex - 1],

            domainPath = isMobileWiki ?
                'https://en.m.wikipedia.org/wiki/' :
                'https://www.wikipedia.org/wiki/'

        return `${domainPath}${partialPath}`

    } else {
        return ''
    }
}
