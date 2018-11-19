import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

import { getAnnotationObject } from 'helpers/dataHelper'

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
