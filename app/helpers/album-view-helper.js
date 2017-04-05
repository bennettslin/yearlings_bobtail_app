// Parse album data for presentation.
import { LYRIC_COLUMN_KEYS,

         PORTAL,
         REFERENCE } from './constants'

import { intersects } from './dot-helper'
import { getIsMobileWiki, getLyricSectionRect, getShowSingleLyricColumn } from './responsive-helper'

const _parseLyrics = (lyric, selectedVerseIndex) => {
    // Recurse until object with verse index is found.

    // Method does not apply to logues.
    if (lyric) {
        if (lyric.verseIndex === selectedVerseIndex) {
            return lyric

        } else if (Array.isArray(lyric)) {
            return lyric.reduce((childSelectedLyric, childLyric) => {
                return childSelectedLyric || _parseLyrics(childLyric, selectedVerseIndex)
            }, null)

            // Object with verseIndex key not found, so dig into subStanza.
        } else if (lyric.subStanza) {
            return _parseLyrics(lyric.subStanza, selectedVerseIndex)
        }
    }
}

export const getSong = ({ selectedSongIndex, songs }, nextSongIndex) => {
    return songs[isNaN(nextSongIndex) ? selectedSongIndex : nextSongIndex]
}

export const getIsLogue = ({ selectedSongIndex, songs }) => {
    return selectedSongIndex === 0 || selectedSongIndex === songs.length - 1
}

export const getSongTitle = (props, isLogue) => {
    const songIndex = props.songIndex || props.selectedSongIndex,
        song = props.song || props.songs[songIndex]

    return `${!isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getSelectedBookColumnIndex = (props, selectedSongIndex) => {
    const { bookStartingIndices } = props,
        songIndex = typeof selectedSongIndex !== 'undefined' ? selectedSongIndex : props.selectedSongIndex

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 1 : 2
}

export const getSongTimes = (props, nextSongIndex) => {
    const selectedSong = getSong(props, nextSongIndex)
    return selectedSong.times || []
}

export const getAnnotation = ({ selectedAnnotationIndex, selectedSong, ...other }, annotationIndex) => {
    selectedSong = selectedSong || getSong(other)
    return selectedSong.annotations ?
            selectedSong.annotations[(annotationIndex || selectedAnnotationIndex) - 1] : null
}

export const getAnnotationsDotKeys = (props) => {
    const selectedSong = props.selectedSong || getSong(props)

    return selectedSong ? selectedSong.annotations.map(annotation => {
        return annotation.dotKeys
    }) : null
}

const getAnnotationsLength = (props) => {
    const selectedSong = getSong(props)
    return selectedSong.annotations ? selectedSong.annotations.length : 0
}

export const getVerse = ({ selectedVerseIndex, ...other }, verseIndex) => {
    const { lyrics } = getSong(other)

    return _parseLyrics(lyrics, (!isNaN(verseIndex) && verseIndex > -1) ? verseIndex : selectedVerseIndex)
}

const _getCardFromIndex = ({ annotation, cardIndex }) => {
    const { cards } = annotation

    if (Array.isArray(cards)) {
        return cards[cardIndex]

    } else {
        return cards
    }
}

const _shouldShowAnnotationForColumn = (props, state, annotation, lyricColumnIndex) => {
    const showSingleLyricColumn = getShowSingleLyricColumn(props, state)

    return !annotation.column ||
        !showSingleLyricColumn ||
        annotation.column === LYRIC_COLUMN_KEYS[lyricColumnIndex]
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

    const selectedSong = getSong(props),

        // If a direction is given for this method, it has modulo.
        useModulo = !!direction

    if (selectedSong.annotations) {
        const annotationsLength = selectedSong.annotations.length,
            selectedDotKeys = props.selectedDotKeys,
            annotationsDotKeys = selectedSong.annotationsDotKeys

        let returnIndex = currentAnnotationIndex,
            directionSwitchCounter = 0,
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


            returnToLoop =
                // Continue if dots don't intersect...
                (!intersects(annotationsDotKeys[returnIndex - 1], selectedDotKeys) ||

                // Or if this annotation isn't in the shown column...
                !_shouldShowAnnotationForColumn(props, state, selectedSong.annotations[returnIndex - 1], lyricColumnIndex)) &&

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

        return returnIndex
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
    verseIndex,

    // Search backwards by default.
    direction = -1,
    lyricColumnIndex = props.selectedLyricColumnIndex
}) => {
    /**
     * Called:
     * - upon app load, if no annotation index is selected.
     * - when arrow key in lyric is pressed and turns on access, has direction.
     * - when any key is pressed and turns on access.
     * - when lyric column is switched.
     */

    const verse = getVerse({
            selectedVerseIndex: verseIndex,
            selectedSongIndex: props.selectedSongIndex,
            songs: props.songs
        }),
        annotationsLength = getAnnotationsLength(props)

    if (!verse) {
        return -1
    }

    let returnIndex,
        returnToLoop

    // If the verse has its own annotation, pick it.
    if (verse.currentAnnotationIndices) {
        /**
         * If prompted by left arrow, start left and search inward. If prompted
         * by right arrow, start right. If no direction given, start left.
         */
        let currentCounter = direction === 1 ? (verse.currentAnnotationIndices.length - 1) : 0

        /**
         * Loop through all the annotations in the verse, in case some are
         * hidden.
         */
        do {
            returnIndex = verse.currentAnnotationIndices[currentCounter]

            // Move inward, which is the opposite direction.
            currentCounter -= direction

            returnToLoop =
                currentCounter >= 0 &&
                currentCounter < verse.currentAnnotationIndices.length &&
                !_shouldShowAnnotationForColumn(props, state, getAnnotation(props, returnIndex), lyricColumnIndex)

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

    if (getIsLogue(props)) {
        return {
            beginTime: 0,
            endTime: 0
        }
    }

    const selectedSong = getSong(props),
        songTimes = selectedSong.times,

        beginTime = songTimes[verseIndex],
        endTime = verseIndex < songTimes.length - 1 ? songTimes[verseIndex + 1] : selectedSong.totalTime

    return {
        beginTime,
        endTime
    }
}

export const getVerseIndexForAnnotationIndex = (props, annotationIndex) => {
    const annotation = getAnnotation(props, annotationIndex),
        { verseIndex,
          mostRecentVerseIndex } = annotation

    return !isNaN(verseIndex) ? verseIndex : mostRecentVerseIndex
}

export const getVerseIndexForTime = (props, time) => {
    const selectedSong = getSong(props)

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
    const annotation = getAnnotation(props),
        selectedDotKeys = props.selectedDotKeys

    if (annotation && annotation.popupAnchors) {

        const { popupAnchors } = annotation,
            popupAnchorsLength = popupAnchors.length

        if (popupAnchorsLength < 2) {
            return popupAnchorsLength
        }

        let returnIndex = initialPopupAnchorIndex

        // Skip over deselected popup anchors.
        do {
            if (typeof direction === 'undefined') {
                direction = 0

            } else if (direction === 0) {
                direction = 1
            }

            // Remember that annotations are 1-based.
            returnIndex = (returnIndex + popupAnchorsLength + direction - 1) % popupAnchorsLength + 1

        /**
         * Skip wiki anchors if wiki dot not selected, and portal anchors if
         * portal dot not selected.
         */
     } while ((
            (typeof popupAnchors[returnIndex - 1] === 'string' && !selectedDotKeys[REFERENCE]) ||
            (typeof popupAnchors[returnIndex - 1] === 'object' && !selectedDotKeys[PORTAL])
        ) && (direction === 0 || initialPopupAnchorIndex !== returnIndex))

        return returnIndex
    }


    return initialPopupAnchorIndex
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
                    portalIndex } = portalLink,
                song = songs[songIndex],
                annotation = song.annotations[annotationIndex - 1],
                cardObject = _getCardFromIndex({
                    annotation,
                    cardIndex
                }),
                verseObject = getVerse({
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
                verseObject,
                cardObject
            }
        }) : null
    } else {
        return null
    }
}

export const getWikiUrl = (props) => {
    const { selectedWikiIndex } = props
    if (selectedWikiIndex) {
        const annotation = getAnnotation(props),
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
