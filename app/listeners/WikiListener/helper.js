import { getAnnotationObject } from 'helpers/dataHelper'

export const getWikiUrl = ({
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    isMobileWiki

}) => {
    if (selectedWikiIndex) {
        // Since annotation index is 1-based, it's invalid if 0.
        const annotationIndex =
                carouselAnnotationIndex || selectedAnnotationIndex,

            annotation = getAnnotationObject(
                selectedSongIndex, annotationIndex
            ),

            partialPath = annotation.annotationAnchors[selectedWikiIndex - 1]

        let fullPath

        // It's a Wikipedia page.
        if (partialPath.indexOf('http') === -1) {
            const domainPath = isMobileWiki ? 'https://en.m.wikipedia.org/wiki/' : 'https://www.wikipedia.org/wiki/'

            fullPath = `${domainPath}${partialPath}`

        // It's its own URL.
        } else {
            fullPath = partialPath
        }

        return fullPath

    } else {
        return ''
    }
}
