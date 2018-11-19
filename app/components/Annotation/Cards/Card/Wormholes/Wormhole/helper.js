import { getAnnotationCardWormholeLinksArray } from '../helper'

export const getAnnotationCardWormholeObject = ({
    songIndex,
    annotationIndex,
    cardIndex,
    wormholeLinkIndex
}) => {
    // Called by annotation wormhole component.
    const wormholeLinksArray = getAnnotationCardWormholeLinksArray({
        songIndex,
        annotationIndex,
        cardIndex
    })

    return wormholeLinksArray ? wormholeLinksArray[wormholeLinkIndex] : null
}
