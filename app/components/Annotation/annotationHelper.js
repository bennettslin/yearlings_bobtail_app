import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

import {
    getAnnotationObject,
    getAnnotationCardObject
} from 'helpers/dataHelper'

export const getAccessibleAnnotationAnchorsLength = ({
    songIndex,
    annotationIndex,
    dotKeys
}) => {

    const annotation = getAnnotationObject(
            songIndex,
            annotationIndex
        ),
        { annotationAnchors } = annotation

    if (annotationAnchors) {
        return annotationAnchors.reduce((sum, annotationAnchor) => {
            const typeofAnnotationAnchor = typeof annotationAnchor

            return (
                (
                    // It's a wiki anchor, and reference dot is selected.
                    typeofAnnotationAnchor === 'string' &&
                    dotKeys[REFERENCE]

                ) || (
                    // It's a wormhole index, and wormhole dot is selected.
                    typeofAnnotationAnchor === 'number' &&
                    dotKeys[WORMHOLE]
                )
            ) ? sum + 1 : sum
        }, 0)

    } else {
        return 0
    }
}

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
