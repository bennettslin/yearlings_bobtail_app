import {
    getCardWormholeLinksArray,
    parseWormholeLinkForDispatch
} from 'helpers/wormhole'

export const getCardWormholeLink = ({
    songIndex,
    annotationIndex,
    cardIndex,
    wormholeLinkIndex
}) => {
    // Called by annotation wormhole component.
    const wormholeLinksArray = getCardWormholeLinksArray({
        songIndex,
        annotationIndex,
        cardIndex
    })

    if (wormholeLinksArray) {
        // Rename keys for dispatch.
        const wormholeLink = wormholeLinksArray[wormholeLinkIndex]
        return parseWormholeLinkForDispatch(wormholeLink)

    } else {
        return null
    }
}
