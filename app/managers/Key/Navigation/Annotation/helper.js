import {
    getCardsForAnnotation,
    getWikiWormholesForAnnotation
} from '../../../../album/api/annotations'
import { mapWormholeLinkForDispatch } from '../../../../helpers/wormhole'

export const getWormholeLinkFromIndex = ({
    songIndex,
    annotationIndex,
    wikiWormholeIndex
}) => {

    const cards = getCardsForAnnotation(
            songIndex,
            annotationIndex
        ),

        // Loop through cards until we find the wormhole card.
        wormholeLink = cards.reduce((foundCardObject, cardObject) => {
            const { wormholeLinks } = cardObject

            if (wormholeLinks) {
                /**
                 * Loop through wormhole links until we find the wormhole index
                 * we want.
                 */
                foundCardObject = wormholeLinks.reduce((
                    foundWormholeLink, wormholeLink
                ) => {
                    if (
                        wormholeLink.sourceWormholeIndex === wikiWormholeIndex
                    ) {
                        foundWormholeLink = wormholeLink
                    }

                    return foundWormholeLink
                }, null)
            }

            return foundCardObject
        }, null)

    return mapWormholeLinkForDispatch(wormholeLink)
}

export const getWikiWormholeEntity = ({
    songIndex,
    annotationIndex,
    accessedIndex

}) => {
    const annotationWikiWormholes = getWikiWormholesForAnnotation(
        songIndex,
        annotationIndex
    )

    if (annotationWikiWormholes) {
        return annotationWikiWormholes[accessedIndex - 1]
    }

    return null
}
