import {
    getAnnotationCountForSong,
    getDotKeysForAnnotation
} from '../../../api/album/annotations'
import {
    getLastAnnotationIndexForVerse,
    getAnnotationIndicesForVerse
} from '../../../api/album/verses'
import {
    getShowAnnotationForColumn,
    getAnnotationIndexForDirection
} from '../../../helpers/annotation'
import { intersects } from '../../../helpers/dot'

export const getAnnotationIndexForVerseIndex = ({
    isEarShown,

    // Search backwards by default.
    verseIndex,
    selectedSongIndex,
    selectedDotKeys,
    earColumnIndex,

    direction = -1
}) => {
    const annotationsCount = getAnnotationCountForSong(selectedSongIndex)
    let returnIndex,
        returnToLoop

    // If the verse has its own annotation, pick it.
    const
        lastAnnotationIndex = getLastAnnotationIndexForVerse(
            selectedSongIndex,
            verseIndex
        ),
        verseAnnotationIndices = getAnnotationIndicesForVerse(
            selectedSongIndex,
            verseIndex
        )

    if (verseAnnotationIndices) {
        const annotationIndicesCount = verseAnnotationIndices.length

        /**
         * If prompted by left arrow, start left and search inward. If prompted
         * by right arrow, start right. If no direction given, start left.
         */
        let currentCounter = direction === 1 ? (annotationIndicesCount - 1) : 0

        /**
         * Loop through all the annotations in the verse, in case some are
         * hidden.
         */
        do {
            returnIndex = verseAnnotationIndices[currentCounter]

            // Move inward, which is the opposite direction.
            currentCounter -= direction

            const annotationDotKeys = getDotKeysForAnnotation(
                    selectedSongIndex,
                    returnIndex
                ),
                showAnnotationForColumn = getShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedAnnotationIndex: returnIndex,
                    earColumnIndex,
                    isEarShown
                }),
                doesIntersect = intersects(annotationDotKeys, selectedDotKeys)

            /**
             * Return while not shown for column or dot keys don't intersect,
             * and current counter is valid.
             */
            returnToLoop =
                currentCounter >= 0 &&
                currentCounter < annotationIndicesCount &&
                (!showAnnotationForColumn || !doesIntersect)

        } while (returnToLoop)

    // Otherwise, return either previous or next depending on direction.
    } else {
        returnIndex = direction === -1 ?
            lastAnnotationIndex :
            (lastAnnotationIndex + 1) % annotationsCount
    }

    /**
     * Ensure that this annotation index is present. Otherwise, specify
     * direction that we will search if this annotation index is not present.
     */
    return getAnnotationIndexForDirection({
        isEarShown,
        currentAnnotationIndex: returnIndex,
        selectedSongIndex,
        selectedDotKeys,
        earColumnIndex,
        specifiedDirection: direction
    })
}
