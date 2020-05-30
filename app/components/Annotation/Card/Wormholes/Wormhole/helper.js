import { mapWormholeLinkForDispatch } from '../../../../../helpers/wormhole'
import { getWormholeLinksForAnnotationCard } from '../../../../../album/api/cards'

export const getCardWormholeLink = ({
    songIndex,
    annotationIndex,
    cardIndex,
    wormholeLinkIndex
}) => {
    // Called by annotation wormhole component.
    const wormholeLinks = getWormholeLinksForAnnotationCard(
        songIndex,
        annotationIndex,
        cardIndex
    )

    if (wormholeLinks) {
        // Rename keys for dispatch.
        const wormholeLink = wormholeLinks[wormholeLinkIndex]
        return mapWormholeLinkForDispatch(wormholeLink)

    } else {
        return null
    }
}
