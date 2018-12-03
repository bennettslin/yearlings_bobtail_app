import {
    getAnnotationObject,
    getVerseObject,
    getAnnotationsCount
} from 'helpers/data'
import {
    getShowAnnotationForColumn,
    getAnnotationIndexForDirection
} from 'helpers/annotation'
import { intersects } from 'helpers/dot'

export const getAnnotationIndexForVerseIndex = ({
    isEarShown,

    // Search backwards by default.
    verseIndex,
    selectedSongIndex,
    selectedDotKeys,
    earColumnIndex,

    direction = -1
}) => {
    const verse = getVerseObject(selectedSongIndex, verseIndex),
        annotationsCount = getAnnotationsCount(selectedSongIndex)

    if (!verse) {
        return -1
    }

    let returnIndex,
        returnToLoop

    // If the verse has its own annotation, pick it.
    if (verse.currentAnnotationIndices) {
        const currentAnnotationIndicesCount = verse.currentAnnotationIndices.length

        /**
         * If prompted by left arrow, start left and search inward. If prompted
         * by right arrow, start right. If no direction given, start left.
         */
        let currentCounter = direction === 1 ? (currentAnnotationIndicesCount - 1) : 0

        /**
         * Loop through all the annotations in the verse, in case some are
         * hidden.
         */
        do {
            returnIndex = verse.currentAnnotationIndices[currentCounter]

            // Move inward, which is the opposite direction.
            currentCounter -= direction

            const annotation = getAnnotationObject(selectedSongIndex, returnIndex),
                showAnnotationForColumn = getShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedAnnotationIndex: returnIndex,
                    earColumnIndex,
                    isEarShown
                }),
                doesIntersect = intersects(annotation.dotKeys, selectedDotKeys)

            /**
             * Return while not shown for column or dot keys don't intersect,
             * and current counter is valid.
             */
            returnToLoop =
                currentCounter >= 0 &&
                currentCounter < currentAnnotationIndicesCount &&
                (!showAnnotationForColumn || !doesIntersect)

        } while (returnToLoop)

    // Otherwise, return either previous or next depending on direction.
    } else {
        returnIndex = direction === -1 ?
            verse.lastAnnotationIndex :
            (verse.lastAnnotationIndex + 1) % annotationsCount
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
