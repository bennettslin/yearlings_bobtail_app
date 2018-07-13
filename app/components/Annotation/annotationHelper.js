import {
    PORTAL,
    REFERENCE
} from '../../constants/dots'

import { getAnnotationObject } from '../../helpers/dataHelper'

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
