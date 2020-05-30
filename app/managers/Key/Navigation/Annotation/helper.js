import { getWikiWormholesForAnnotation } from '../../../../album/api/annotations'
import { getCardsForAnnotation } from '../../../../album/api/cards'
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
                foundCardObject = wormholeLinks.find(wormholeLink => (
                    wormholeLink.sourceWormholeIndex === wikiWormholeIndex
                ))
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
