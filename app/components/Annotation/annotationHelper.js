import {
    PORTAL,
    REFERENCE
} from '../../constants/dots'

import {
    getAnnotationObject,
    getAnnotationCardObject
} from '../../helpers/dataHelper'

export const getAccessibleAnnotationAnchorsLength = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys
}) => {

    const annotation = getAnnotationObject(
            selectedSongIndex,
            selectedAnnotationIndex
        ),
        { annotationAnchors } = annotation

    if (annotationAnchors) {
        return annotationAnchors.reduce((sum, annotationAnchor) => {
            const typeofAnnotationAnchor = typeof annotationAnchor

            return (
                (
                    // It's a wiki anchor, and reference dot is selected.
                    typeofAnnotationAnchor === 'string' &&
                    selectedDotKeys[REFERENCE]

                ) || (
                    // It's a portal index, and portal dot is selected.
                    typeofAnnotationAnchor === 'number' &&
                    selectedDotKeys[PORTAL]
                )
            ) ? sum + 1 : sum
        }, 0)

    } else {
        return 0
    }
}

export const getAnnotationCardPortalLinksArray = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    // Called by annotation portals block component.
    const cardObject = getAnnotationCardObject({
        songIndex,
        annotationIndex,
        cardIndex
    })

    return cardObject ? cardObject.portalLinks : null
}

export const getAnnotationCardPortalObject = ({
    songIndex,
    annotationIndex,
    cardIndex,
    portalLinkIndex
}) => {
    // Called by annotation portal component.
    const portalLinksArray = getAnnotationCardPortalLinksArray({
        songIndex,
        annotationIndex,
        cardIndex
    })

    return portalLinksArray ? portalLinksArray[portalLinkIndex] : null
}
