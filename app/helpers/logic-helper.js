// General file for calculating stuff.
// TODO: Break into smaller files.

import { PORTAL,
         REFERENCE } from '../constants/dots'
import { LYRIC_COLUMN_KEYS, COLUMN_INDEX } from '../constants/lyrics'
import { getAnnotationObject,
         getSongIsLogue,
         getVerseObject,
         getSongsNotLoguesCount,
         getAnnotationDotKeys,
         getAnnotationsCount } from './data-helper'
import { intersects } from './dot-helper'
import { getIsPhone, getIsOverlayingAnnotation, getLyricSectionRect, getShowOneOfTwoLyricColumns } from './responsive-helper'

export const getNextPlayerToRender = (
    selectedSongIndex,
    canPlayThroughsObject
) => {
    /**
     * Given an array of players that have passed canPlayThrough, return
     * the next player in the queue to be rendered, starting with the
     * selected song.
     */

    const songsCount = getSongsNotLoguesCount(),
        isLogue = getSongIsLogue(selectedSongIndex)

    /**
     * If logue, set to first song. Song indices are 1-based.
     */
    let currentSongIndex = isLogue ? 1 : selectedSongIndex,
        nextPlayerToRender,
        counter = 0

    do {
        // Counter song can play through, so increment.
        if (canPlayThroughsObject[currentSongIndex]) {
            currentSongIndex = (currentSongIndex % songsCount) + 1

        /**
         * This is the first song that hasn't passed canPlayThrough
         * that is either the selected song or coming after it.
         */
        } else {
            nextPlayerToRender = currentSongIndex
        }

        counter++

    } while (!nextPlayerToRender && counter < songsCount)

    /**
     * Return next song in the queue, or else -1 if all are now rendered.
     */
    nextPlayerToRender = nextPlayerToRender || -1

    return nextPlayerToRender
}

export const shouldShowAnnotationForColumn = ({

    selectedSongIndex,
    selectedLyricColumnIndex,
    annotationIndex,
    deviceIndex

}) => {

    const showOneOfTwoLyricColumns = getShowOneOfTwoLyricColumns(selectedSongIndex, deviceIndex),
        annotation = getAnnotationObject(selectedSongIndex, annotationIndex),
        columnIndex = annotation[COLUMN_INDEX],

        /**
         * Show annotation if both columns are shown, no column is given, or
         * column is given and it's the shown column.
         */
        showAnnotationForColumn =
            !showOneOfTwoLyricColumns ||
            isNaN(columnIndex) ||
            columnIndex === selectedLyricColumnIndex

    return showAnnotationForColumn
}

export const getAnnotationIndexForDirection = ({
    deviceIndex,

    currentAnnotationIndex = 1,
    selectedSongIndex,
    selectedDotKeys,
    lyricColumnIndex,

    direction,

    // Called from getAnnotationIndexForVerseIndex.
    specifiedDirection
}) => {
    /**
     * Called:
     * - upon app load, if annotation index is selected.
     * - when arrow key in lyric is pressed and access is already on, has direction.
     * - when annotation index is selected, has direction.
     * - from getAnnotationIndexForVerseIndex.
     */

    const annotationsCount = getAnnotationsCount(selectedSongIndex),

        // If a direction is given for this method, it has modulo.
        useModulo = !!direction

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
            doesIntersect = intersects(getAnnotationDotKeys(
                selectedSongIndex,
                returnIndex
            ), selectedDotKeys)

            returnToLoop =
                // Continue if dots don't intersect...
                (!doesIntersect ||

                // Or if this annotation isn't in the shown column...
                !shouldShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedLyricColumnIndex: lyricColumnIndex,
                    annotationIndex: returnIndex,
                    deviceIndex
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

export const getAnnotationIndexForVerseIndex = ({
    /**
     * State is just needed for the deviceIndex, to determine whether one or
     * two lyric columns are shown.
     */
    deviceIndex,

    // Search backwards by default.
    verseIndex,
    selectedSongIndex,
    selectedDotKeys,
    lyricColumnIndex,

    direction = -1
}) => {
    /**
     * Called:
     * - upon app load, if no annotation index is selected.
     * - when arrow key in lyric is pressed and turns on access, has direction.
     * - when any key is pressed and turns on access.
     * - when lyric column is switched.
     */

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
                showAnnotationForColumn = shouldShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedLyricColumnIndex: lyricColumnIndex,
                    annotationIndex: returnIndex,
                    deviceIndex
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
        deviceIndex,
        currentAnnotationIndex: returnIndex,
        selectedSongIndex,
        selectedDotKeys,
        lyricColumnIndex,
        specifiedDirection: direction
    })
}

export const getSliderRatioForClientX = (clientX, sliderLeft, sliderWidth) => {
    const sliderX = clientX - sliderLeft,
        ratio = sliderX / sliderWidth

    if (ratio < 0) {
        return 0
    } else if (ratio > 1) {
        return 1
    } else {
        return ratio
    }
}

export const getVerseBarStatus = ({
    deviceIndex,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    verseElement
}) => {

    // If lyric is collapsed and heightless, verse bars should never show.
    if (isHeightlessLyricColumn && !isLyricExpanded) {
        return {
            isVerseBarAbove: false,
            isVerseBarBelow: false
        }
    }

    const lyricSectionRect = getLyricSectionRect({
            deviceIndex,
            windowHeight,
            isLyricExpanded
        }),

        selectedVerseRect = verseElement.getBoundingClientRect(),
        selectedVerseMidHeight = (selectedVerseRect.top + selectedVerseRect.bottom) / 2,

        isVerseBarAbove = selectedVerseMidHeight < lyricSectionRect.top,
        isVerseBarBelow = selectedVerseMidHeight > lyricSectionRect.bottom

        return {
            isVerseBarAbove,
            isVerseBarBelow
        }
}

/**
 * This method is only used to get the closest verse index for an accessed
 * annotation index.
 */
export const getVerseIndexForAccessedAnnotationIndex = (songIndex, annotationIndex) => {
    const annotation = getAnnotationObject(songIndex, annotationIndex),
        { verseIndex,
          mostRecentVerseIndex } = annotation

    return !isNaN(verseIndex) ? verseIndex : mostRecentVerseIndex
}

export const getAnnotationAnchorIndexForDirection = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    initialAnnotationAnchorIndex = 1,
    direction
}) => {
    const annotation = getAnnotationObject(selectedSongIndex, selectedAnnotationIndex)

    if (annotation && annotation.annotationAnchors) {

        const { annotationAnchors } = annotation,
            annotationAnchorsCount = annotationAnchors.length

        let returnIndex = initialAnnotationAnchorIndex,
            counter = 0

        // Consider each anchor index only once.
        while (counter < annotationAnchorsCount) {

            // If no direction given, start at first index...
            if (isNaN(direction)) {
                direction = 0

            // ... then proceed in forward direction.
            } else if (direction === 0) {
                direction = 1
            }

            // Remember that annotations are 1-based.
            returnIndex = (returnIndex + annotationAnchorsCount + direction - 1) % annotationAnchorsCount + 1

            /**
             * It's valid if it's a wiki anchor and reference dot is selected,
             * or it's a portal index and portal dot is selected.
             */
            if ((typeof annotationAnchors[returnIndex - 1] === 'string' && selectedDotKeys[REFERENCE]) ||
                (typeof annotationAnchors[returnIndex - 1] === 'number' && selectedDotKeys[PORTAL])) {

                return returnIndex
            }

            counter++
        }
    }

    // There are no valid anchor indices to return.
    return -1
}

export const getWikiUrl = ({

    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    isMobileWiki

}) => {
    if (selectedWikiIndex) {
        // Since annotation index is 1-based, it's invalid if 0.
        const annotationIndex = carouselAnnotationIndex || selectedAnnotationIndex,
            annotation = getAnnotationObject(selectedSongIndex, annotationIndex),
            partialPath = annotation.annotationAnchors[selectedWikiIndex - 1]

        let fullPath

        // It's a Wikipedia page.
        if (partialPath.indexOf('http') === -1) {
            const domainPath = isMobileWiki ? 'https://en.m.wikipedia.org/wiki/' : 'https://www.wikipedia.org/wiki/'

            fullPath = `${domainPath}${partialPath}`

        // It's its own URL.
        } else {
            fullPath = partialPath
        }

        return fullPath

    } else {
        return null
    }
}

export const getSingleShownLyricColumnKey = ({
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex
}) => {
    return showOneOfTwoLyricColumns && selectedLyricColumnIndex >= 0 ? LYRIC_COLUMN_KEYS[selectedLyricColumnIndex % 2] : ''
}

export const getShowOverlay = ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => {
    const isOverlayingAnnotation = getIsOverlayingAnnotation({
            deviceIndex,
            isLyricExpanded
        })

    return !!selectedTitleIndex ||
           !!selectedScoreIndex ||
           !!selectedWikiIndex ||
           (!!selectedAnnotationIndex && isOverlayingAnnotation)
}

export const getIsTimerInAudio = ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => {
    const showOverlay = getShowOverlay({
            deviceIndex,
            isLyricExpanded,
            selectedAnnotationIndex,
            selectedScoreIndex,
            selectedTitleIndex,
            selectedWikiIndex
        })

    return showOverlay && getIsPhone(deviceIndex)
}

export const getIsSomethingBeingShown = ({
    props,
    calledByOverview = false,
    calledByTips = false
}) => {
    return props.isLyricExpanded ||
           props.selectedDotsIndex ||
           props.selectedScoreIndex ||
           props.selectedTitleIndex ||
           props.selectedWikiIndex ||
           (!props.selectedCarouselIndex && props.selectedAnnotationIndex) ||
           (calledByOverview && !props.selectedTipsIndex) ||

           /**
            * Since overview can technically still be shown while tips is
            * actually being shown, check that tips is not shown.
            */
           (calledByTips && !props.selectedOverviewIndex && props.selectedTipsIndex)
}
