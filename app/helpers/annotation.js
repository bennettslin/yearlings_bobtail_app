import {
    getAnnotationObject,
    getAnnotationColumnIndex,
    getAnnotationsCount
} from 'helpers/data'
import { intersects } from 'helpers/dot'

export const getShowAnnotationForColumn = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    earColumnIndex,
    isEarShown
}) => {

    const columnIndex = getAnnotationColumnIndex(
            selectedSongIndex,
            selectedAnnotationIndex
        ),

        /**
         * Show annotation if both columns are shown, no column is given, or
         * column is given and it's the shown column.
         */
        showAnnotationForColumn =
            !isEarShown ||
            isNaN(columnIndex) ||
            columnIndex === earColumnIndex

    return showAnnotationForColumn
}

const _getAnnotationDotKeys = (
    songIndex,
    annotationIndex
) => {
    const annotation = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotation ? annotation.dotKeys : null
}

export const getAnnotationIndexForDirection = ({
    isEarShown,
    currentAnnotationIndex = 1,
    selectedSongIndex,
    selectedDotKeys,
    earColumnIndex,

    direction,

    // Called from getAnnotationIndexForVerseIndex.
    specifiedDirection
}) => {

    const annotationsCount = getAnnotationsCount(selectedSongIndex),

        // If a direction is given for this method, it has modulo.
        useModulo = Boolean(direction)

    /**
     * Begin with a valid annotation index, in case there is no current
     * accessed annotation index.
     */
    if (currentAnnotationIndex < 1) {
        currentAnnotationIndex = 1
    }

    if (annotationsCount) {
        let returnIndex = currentAnnotationIndex,
            directionSwitchCounter = 0,
            doesIntersect,
            returnToLoop

        // Skip over deselected annotations.
        do {
            /**
             * This gets called upon initial load and upon deselecting a dot, so
             * allow for the possibility that we don't need to change the index.
             */
            if (isNaN(direction)) {
                direction = 0

            // But if this is the second time around, then begin incrementing.
            } else if (direction === 0) {

                /**
                 * Unless specified, search backward. It will be specified when
                 * called from getAnnotationIndexForVerseIndex, which already
                 * knows the annotation index it wants, and should not iterate
                 * unless that annotation index is unavailable.
                 */
                direction = specifiedDirection || -1
            }

            // Called from a user-inputted direction.
            if (useModulo) {
                // Remember that annotations are 1-based.
                returnIndex = (returnIndex + annotationsCount + direction - 1) % annotationsCount + 1

            // Searching for the closest one, in the direction we prefer.
            } else {
                returnIndex = returnIndex + direction

                // We've reached the end.
                if (returnIndex < 1 && direction === -1 || returnIndex > annotationsCount && direction === 1) {

                    // Reset index and switch direction.
                    if (direction === -1) {
                        returnIndex = 1
                        direction = 1
                    } else {
                        returnIndex = annotationsCount
                        direction = -1
                    }

                    // Add to counter.
                    directionSwitchCounter++
                }
            }

            // Check that this annotation is enabled, given selected dot keys.
            doesIntersect = intersects(_getAnnotationDotKeys(
                selectedSongIndex,
                returnIndex
            ), selectedDotKeys)

            returnToLoop =
                // Continue if dots don't intersect...
                (!doesIntersect ||

                // Or if this annotation isn't in the shown column...
                !getShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedAnnotationIndex: returnIndex,
                    earColumnIndex,
                    isEarShown
                })) &&

                // And if modulo...
                (useModulo ?

                    // As long as we haven't exhausted all indices.
                    !(direction !== 0 && currentAnnotationIndex === returnIndex) :

                    // We've switched directions less than twice.
                    directionSwitchCounter < 2
                )

        /**
         * Prevent index from incrementing forever by stopping after return
         * index is once again current index, with direction set.
         */
        } while (returnToLoop)

        /**
         * Allow for the possibility that all dots are deselected, such that no
         * annotation can be accessed.
         */
        return doesIntersect ? returnIndex : -1
    }

    return currentAnnotationIndex
}
