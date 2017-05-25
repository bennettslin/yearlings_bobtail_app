// Parse album data for presentation.
import { LYRIC_COLUMN_KEYS,

         PORTAL,
         REFERENCE } from './constants'

import { getSongObject, getIsLogue, getAnnotationObject, getVerseObject } from './data-helper'
import { intersects } from './dot-helper'
import { getIsMobileWiki, getLyricSectionRect, getShowSingleLyricColumn } from './responsive-helper'

const _getCardFromIndex = ({ annotation, cardIndex }) => {
    const { cards } = annotation

    if (Array.isArray(cards)) {
        return cards[cardIndex]

    } else {
        return cards
    }
}

export const shouldShowAnnotationForColumn = (props, state, annotation) => {
    const showSingleLyricColumn = getShowSingleLyricColumn(props, state)

    return !annotation.column ||
        !showSingleLyricColumn ||
        annotation.column === LYRIC_COLUMN_KEYS[props.selectedLyricColumnIndex]
}

export const getAnnotationIndexForDirection = ({
    props,
    state,
    currentAnnotationIndex = 1,
    direction,

    // Called from getAnnotationIndexForVerseIndex.
    specifiedDirection,
    lyricColumnIndex = props.selectedLyricColumnIndex
}) => {
    /**
     * Called:
     * - upon app load, if annotation index is selected.
     * - when arrow key in lyric is pressed and access is already on, has direction.
     * - when annotation index is selected, has direction.
     * - from getAnnotationIndexForVerseIndex.
     */

    const selectedSong = getSongObject(props.selectedSongIndex),

        // If a direction is given for this method, it has modulo.
        useModulo = !!direction

    /**
     * Begin with a valid annotation index, in case there is no current
     * accessed annotation index.
     */
    if (currentAnnotationIndex < 1) {
        currentAnnotationIndex = 1
    }

    if (selectedSong.annotations) {
        const annotationsLength = selectedSong.annotations.length,
            selectedDotKeys = props.selectedDotKeys,
            annotationsDotKeys = selectedSong.annotationsDotKeys

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
            if (typeof direction === 'undefined') {
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
                returnIndex = (returnIndex + annotationsLength + direction - 1) % annotationsLength + 1

            // Searching for the closest one, in the direction we prefer.
            } else {
                returnIndex = returnIndex + direction

                // We've reached the end.
                if (returnIndex < 1 && direction === -1 || returnIndex > annotationsLength && direction === 1) {

                    // Reset index and switch direction.
                    if (direction === -1) {
                        returnIndex = 1
                        direction = 1
                    } else {
                        returnIndex = annotationsLength
                        direction = -1
                    }

                    // Add to counter.
                    directionSwitchCounter++
                }
            }

            doesIntersect = intersects(annotationsDotKeys[returnIndex - 1], selectedDotKeys)

            returnToLoop =
                // Continue if dots don't intersect...
                (!doesIntersect ||

                // Or if this annotation isn't in the shown column...
                !shouldShowAnnotationForColumn({
                    songs: props.songs,
                    selectedSongIndex: props.selectedSongIndex,
                    selectedLyricColumnIndex: lyricColumnIndex
                }, state, selectedSong.annotations[returnIndex - 1])) &&

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
    props,

    /**
     * State is just needed for the deviceIndex, to determine whether one or
     * two lyric columns are shown.
     */
    state,

    // Search backwards by default.
    direction = -1,
    verseIndex = props.selectedVerseIndex,
    lyricColumnIndex = props.selectedLyricColumnIndex
}) => {
    /**
     * Called:
     * - upon app load, if no annotation index is selected.
     * - when arrow key in lyric is pressed and turns on access, has direction.
     * - when any key is pressed and turns on access.
     * - when lyric column is switched.
     */

    const verse = getVerseObject({
            selectedVerseIndex: verseIndex,
            selectedSongIndex: props.selectedSongIndex,
            songs: props.songs
        }),
        annotationsLength = _getAnnotationsLength(props)

    if (!verse) {
        return -1
    }

    let returnIndex,
        returnToLoop

    // If the verse has its own annotation, pick it.
    if (verse.currentAnnotationIndices) {
        const currentAnnotationIndicesLength = verse.currentAnnotationIndices.length

        /**
         * If prompted by left arrow, start left and search inward. If prompted
         * by right arrow, start right. If no direction given, start left.
         */
        let currentCounter = direction === 1 ? (currentAnnotationIndicesLength - 1) : 0

        /**
         * Loop through all the annotations in the verse, in case some are
         * hidden.
         */
        do {
            returnIndex = verse.currentAnnotationIndices[currentCounter]

            // Move inward, which is the opposite direction.
            currentCounter -= direction

            const annotation = getAnnotationObject(props.selectedSongIndex, returnIndex),
                showAnnotationForColumn = shouldShowAnnotationForColumn({
                    songs: props.songs,
                    selectedSongIndex: props.selectedSongIndex,
                    selectedLyricColumnIndex: lyricColumnIndex
                }, state, annotation),
                doesIntersect = intersects(annotation.dotKeys, props.selectedDotKeys)

            /**
             * Return while not shown for column or dot keys don't intersect,
             * and current counter is valid.
             */
            returnToLoop =
                currentCounter >= 0 &&
                currentCounter < currentAnnotationIndicesLength &&
                (!showAnnotationForColumn || !doesIntersect)

        } while (returnToLoop)

    // Otherwise, return either previous or next depending on direction.
    } else {
        returnIndex = direction === -1 ?
            verse.lastAnnotationIndex :
            (verse.lastAnnotationIndex + 1) % annotationsLength
    }

    /**
     * Ensure that this annotation index is present. Otherwise, specify
     * direction that we will search if this annotation index is not present.
     */
    return getAnnotationIndexForDirection({
        props,
        state,
        currentAnnotationIndex: returnIndex,
        specifiedDirection: direction,
        lyricColumnIndex
    })
}

const _getAnnotationsLength = (props) => {
    const selectedSong = getSongObject(props.selectedSongIndex)
    return selectedSong.annotations ? selectedSong.annotations.length : 0
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

export const getVerseBarStatus = (props, selectedVerseElement) => {
    const lyricSectionRect = getLyricSectionRect(props),
        selectedVerseRect = selectedVerseElement.getBoundingClientRect(),

        selectedVerseMidHeight = (selectedVerseRect.top + selectedVerseRect.bottom) / 2,

        isSelectedVerseAbove = selectedVerseMidHeight < lyricSectionRect.top,
        isSelectedVerseBelow = selectedVerseMidHeight > lyricSectionRect.bottom

        return {
            isSelectedVerseAbove,
            isSelectedVerseBelow
        }
}

export const getVerseBeginAndEndTimes = (props, verseIndex) => {

    if (getIsLogue(props.selectedSongIndex)) {
        return {
            beginTime: 0,
            endTime: 0
        }
    }

    const selectedSong = getSongObject(props.selectedSongIndex),
        songTimes = selectedSong.times,

        beginTime = songTimes[verseIndex],
        endTime = verseIndex < songTimes.length - 1 ? songTimes[verseIndex + 1] : selectedSong.totalTime

    return {
        beginTime,
        endTime
    }
}

export const getVerseIndexForAnnotationIndex = (props, annotationIndex) => {
    const annotation = getAnnotationObject(props.selectedSongIndex, props.selectedAnnotationIndex, annotationIndex),
        { verseIndex,
          mostRecentVerseIndex } = annotation

    return !isNaN(verseIndex) ? verseIndex : mostRecentVerseIndex
}

export const getVerseIndexForTime = (props, time) => {
    const selectedSong = getSongObject(props.selectedSongIndex)

    if (time >= 0 && time <= selectedSong.totalTime) {
        let selectedVerseIndex = 0

        // Select corresponding verse.
        while (selectedVerseIndex < selectedSong.times.length - 1 && time >= selectedSong.times[selectedVerseIndex + 1]) {
            selectedVerseIndex++
        }

        return selectedVerseIndex

    } else {
        return null
    }
}

export const getPopupAnchorIndexForDirection = (
    props,
    initialPopupAnchorIndex = 1,
    direction
) => {
    const annotation = getAnnotationObject(props.selectedSongIndex, props.selectedAnnotationIndex),
        selectedDotKeys = props.selectedDotKeys

    if (annotation && annotation.popupAnchors) {

        const { popupAnchors } = annotation,
            popupAnchorsLength = popupAnchors.length

        let returnIndex = initialPopupAnchorIndex,
            counter = 0

        // Consider each anchor index only once.
        while (counter < popupAnchorsLength) {

            // If no direction given, start at first index...
            if (typeof direction === 'undefined') {
                direction = 0

            // ... then proceed in forward direction.
            } else if (direction === 0) {
                direction = 1
            }

            // Remember that annotations are 1-based.
            returnIndex = (returnIndex + popupAnchorsLength + direction - 1) % popupAnchorsLength + 1

            /**
             * It's valid if it's a wiki anchor and reference dot is selected,
             * or it's a portal anchor and portal dot is selected.
             */
            if ((typeof popupAnchors[returnIndex - 1] === 'string' && selectedDotKeys[REFERENCE]) ||
                (typeof popupAnchors[returnIndex - 1] === 'object' && selectedDotKeys[PORTAL])) {

                return returnIndex
            }

            counter++
        }
    }

    // There are no valid anchor indices to return.
    return -1
}

export const getTasks = (selectedSong, tasks) => {
    const songTasks = selectedSong.tasks

    // If no song tasks, then return album tasks.
    return songTasks ? songTasks : tasks
}

export const getPortalLinks = (card, songs) => {
    if (card) {
        const { portalLinks } = card

        // Each portal link contains a portal title and index.
        return portalLinks ? portalLinks.map((portalLink) => {
            const { songIndex,
                    annotationIndex,
                    cardIndex,
                    verseIndex,
                    column,
                    columnIndex,
                    portalIndex,
                    portalPrefix } = portalLink,
                song = songs[songIndex],
                annotation = song.annotations[annotationIndex - 1],
                cardObject = _getCardFromIndex({
                    annotation,
                    cardIndex
                }),
                verseObject = getVerseObject({
                    songs,
                    selectedSongIndex: songIndex,
                    selectedVerseIndex: verseIndex
                })

            return {
                portalIndex,
                songIndex,
                annotationIndex,
                verseIndex,
                songTitle: song.title,
                column,
                columnIndex,
                portalPrefix,
                verseObject,
                cardObject
            }
        }) : null
    } else {
        return null
    }
}

export const getWikiUrl = (props) => {
    const { selectedWikiIndex,
            carouselAnnotationIndex } = props
    if (selectedWikiIndex) {
        const annotation = getAnnotationObject(props.selectedSongIndex, props.selectedAnnotationIndex, carouselAnnotationIndex),
            partialPath = annotation.popupAnchors[selectedWikiIndex - 1]

        let fullPath

        // It's a Wikipedia page.
        if (partialPath.indexOf('http') === -1) {
            const isMobileWiki = getIsMobileWiki(props),
                domainPath = isMobileWiki ? 'https://en.m.wikipedia.org/wiki/' : 'https://www.wikipedia.org/wiki/'

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

export const getHiddenLyricColumnKey = ({
    showSingleLyricColumn,
    selectedLyricColumnIndex
}) => {
    return showSingleLyricColumn && selectedLyricColumnIndex >= 0 ? LYRIC_COLUMN_KEYS[(selectedLyricColumnIndex + 1) % 2] : null
}
