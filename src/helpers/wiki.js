import { getWikiWormholesForAnnotation } from '../endpoint/album/annotations'

export const getWikiUrl = ({
    songIndex,
    annotationIndex,
    wikiIndex,
    isMobileWiki,

}) => {
    if (wikiIndex) {
        // Since annotation index is 1-based, it's invalid if 0.
        const
            annotationWikiWormholes = getWikiWormholesForAnnotation(
                songIndex,
                annotationIndex,
            ),

            partialPath = annotationWikiWormholes[wikiIndex - 1],

            domainPath = isMobileWiki ?
                'https://en.m.wikipedia.org/wiki/' :
                'https://www.wikipedia.org/wiki/'

        return `${domainPath}${partialPath}`

    } else {
        return ''
    }
}
