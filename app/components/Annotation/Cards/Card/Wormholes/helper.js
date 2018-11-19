import { getAnnotationCardObject } from 'helpers/dataHelper'

export const getAnnotationCardWormholeLinksArray = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    // Called by annotation wormholes block component.
    const cardObject = getAnnotationCardObject({
        songIndex,
        annotationIndex,
        cardIndex
    })

    return cardObject ? cardObject.wormholeLinks : null
}
