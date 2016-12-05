// Parse album data for presentation.
import { ALBUM_BUILD_KEYS,
         LEFT,
         RIGHT,

         PHONE_WIDTH_OBJECT,
         MINI_WIDTH_OBJECT,
         TABLET_WIDTH_OBJECT,
         LAPTOP_WIDTH_OBJECT,
         MONITOR_WIDTH_OBJECT } from './constants'

import { intersects } from 'helpers/dot-helper'

const _parseLyrics = (lyric, selectedVerseIndex) => {
    // Recurse until object with verse index is found.

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

export const getSong = ({ selectedSongIndex, songs }) => {
    return songs[selectedSongIndex]
}

export const getIsLogue = ({ selectedSongIndex, songs }) => {
    return selectedSongIndex === 0 || selectedSongIndex === songs.length - 1
}

export const getSongTitle = (props, isLogue) => {
    const songIndex = props.songIndex || props.selectedSongIndex,
        song = props.song || props.songs[songIndex]

    return `${!isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getLyricsStartAtZero = (props, selectedSongIndex) => {
    const selectedSong = getSong({
        selectedSongIndex: selectedSongIndex || props.selectedSongIndex,
        songs: props.songs
    })

    return selectedSong.times ? selectedSong.times[1] === 0 : true
}

export const getIsLyricExpandable = ({ isAdmin, deviceWidth }) => {
    return !isAdmin && (deviceWidth === PHONE_WIDTH_OBJECT.className || deviceWidth === MINI_WIDTH_OBJECT.className || deviceWidth === TABLET_WIDTH_OBJECT.className)
}

export const getShowSingleLyricColumn = (props, state) => {
    // if is admin, return showSingleLyricColumn
    if (state.isAdmin) {
        return state.showSingleLyricColumnInAdmin

    } else {
        const selectedSong = getSong(props),
            { hasSideStanzas,
              isDoublespeaker,
              forceSingleColumn } = selectedSong,
            { deviceWidth } = state

        let showSingleLyricColumn = false

        // Applies to Vegan Proclamation.
        if (forceSingleColumn) {
            showSingleLyricColumn = true

        // Applies to Uncanny Valley Boy.
        } else if (hasSideStanzas && !isDoublespeaker) {
            return deviceWidth === PHONE_WIDTH_OBJECT.className

        // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
        } else if (isDoublespeaker) {
            /**
             * In tablet width, lyrics section takes up full width of bottom,
             * while in monitor width, the screen is wide enough as well.
             */
            return deviceWidth !== MONITOR_WIDTH_OBJECT.className && deviceWidth !== TABLET_WIDTH_OBJECT.className
        }

        return showSingleLyricColumn
    }
}

export const getSelectedBookColumnIndex = (props, selectedSongIndex) => {
    const { songs,
            bookStartingIndices } = props,
        songIndex = typeof selectedSongIndex !== 'undefined' ? selectedSongIndex : props.selectedSongIndex

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 1 : 2
}

export const getShowSingleBookColumn = (state) => {
    const { deviceWidth,
            windowWidth } = state

    // FIXME: Revisit these numbers.
    if (deviceWidth === MONITOR_WIDTH_OBJECT.className) {
        return windowWidth < 1597

    } else if (deviceWidth === LAPTOP_WIDTH_OBJECT.className) {
        return true

    } else {
        return windowWidth < 852
    }
}

export const getShrinkNavIcon = (state) => {
    const { deviceWidth,
            windowWidth } = state

    // FIXME: Revisit these numbers.
    if (deviceWidth === MONITOR_WIDTH_OBJECT.className) {
        return windowWidth >= 1597 && windowWidth < 1765

    } else if (deviceWidth === LAPTOP_WIDTH_OBJECT.className) {
        return windowWidth < 1176

    } else {
        return windowWidth < 606 || (windowWidth >= 852 && windowWidth < 1020)
    }
}

export const getSongTimes = (props) => {
    const selectedSong = getSong(props)
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
    return _parseLyrics(lyrics, verseIndex || selectedVerseIndex)
}

const _shouldShowAnnotationForColumn = (annotation, lyricColumnShown) => {
    if (!lyricColumnShown || !annotation.column) {
        return true
    }
    return annotation.column === lyricColumnShown
}

const _shouldShowVerseForColumn = (verse, lyricColumnShown) => {
    if (!lyricColumnShown) {
        return true
    }

    return lyricColumnShown === LEFT ? !verse.rightColumn : !verse.leftColumn
}

export const getAnnotationIndexForDirection = (props, currentIndex = 1, direction, unpresentDirection, lyricColumnShown) => {
    const selectedSong = getSong(props)

    if (selectedSong.annotations) {
        const annotationsLength = selectedSong.annotations.length,
            selectedDotKeys = props.selectedDotKeys,
            annotationsDotKeys = selectedSong.annotationsDotKeys

        let returnIndex = currentIndex

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

                // Unless specified, search forward.
                direction = unpresentDirection || 1
            }

            // Remember that annotations are 1-based.
            returnIndex = (returnIndex + annotationsLength + direction - 1) % annotationsLength + 1

        /**
         * Prevent index from incrementing forever by stopping after return
         * index is once again current index, with direction set.
         */
        } while (
            // Continue if dots don't intersect...
            (!intersects(annotationsDotKeys[returnIndex - 1], selectedDotKeys) ||

            // Or if this annotation isn't in the shown column...
            !_shouldShowAnnotationForColumn(selectedSong.annotations[returnIndex - 1], lyricColumnShown)) &&

            // And as long as we haven't exhausted all indices.
            !(direction !== 0 && currentIndex === returnIndex)
        )

        return returnIndex
    }

    return currentIndex
}

export const getAnnotationIndexForVerseIndex = (props, verseIndex, direction, lyricColumnShown) => {
    const verse = getVerse({
            selectedVerseIndex: verseIndex,
            selectedSongIndex: props.selectedSongIndex,
            songs: props.songs
        }),
        annotationsLength = getAnnotationsLength(props)

    let returnIndex

    // If the verse has its own annotation, pick it.
    if (verse.currentAnnotationIndices) {
        /**
         * Rotate through all current indices, in case some are in the hidden
         * column. Start from leftmost if initial direction is left, and
         * rightmost if initial direction is right.
         */
        /**
         * If prompted by left arrow, start left and search inward. If prompted
         * by right arrow, start right.
         */
        let currentCounter = direction === -1 ? 0 : (verse.currentAnnotationIndices.length - 1)

        do {
            returnIndex = verse.currentAnnotationIndices[currentCounter]

            // Move inward, which is the opposite direction.
            currentCounter -= direction

        } while (currentCounter >= 0 && currentCounter < verse.currentAnnotationIndices.length && !_shouldShowAnnotationForColumn(getAnnotation(props, returnIndex), lyricColumnShown))

    // Otherwise, return either previous or next depending on direction.
    } else if (direction) {
        const annotationIndex = direction === -1 ? verse.lastAnnotationIndex : ((verse.lastAnnotationIndex + 1) % annotationsLength)

        returnIndex = annotationIndex

    } else {
        returnIndex = verse.lastAnnotationIndex
    }

    /**
     * Ensure that this annotation index is present. Otherwise, specify
     * direction that we will search if this annotation index is not present.
     */
    return getAnnotationIndexForDirection(props, returnIndex, undefined, direction, lyricColumnShown)
}

export const getVerseIndexForDirection = ({
    props,
    index,
    recentIndex,
    direction,
    lyricColumnShown,
    noModulo
}) => {
    const selectedSong = getSong(props),
        lyricsStartAtZero = getLyricsStartAtZero(props),
        specifiedDirection = direction

    if (selectedSong.times) {
        const timesLength = selectedSong.times.length

        let returnIndex

        // We know which verse index we want.
        if (!isNaN(index)) {
            returnIndex = index

            // We are coming from an annotation, so stay put the first time.
            if (recentIndex === false) {
                direction = undefined
            }

        // If no verse index, pick the closest index based on direction.
        } else {
            returnIndex = (!direction || direction === -1) ? recentIndex : (recentIndex + 1) % timesLength
        }

        do {
            /**
             * If no specified direction, or if we have just picked the closest
             * index, then stay put the first time around.
             */
            if (typeof direction === 'undefined' || !isNaN(recentIndex)) {
                // Reset recent index to prevent infinite loop.
                recentIndex = undefined
                direction = 0

            /**
             * If this is the second time around, begin incrementing in the
             * direction of the originally specified direction, if any. Default
             * is backwards.
             */
            } else if (direction === 0) {
                direction = specifiedDirection || -1
            }

            // Verse indices are 0-based.
            if (noModulo) {
                returnIndex = returnIndex + direction
            } else {
                returnIndex = (returnIndex + timesLength + direction) % timesLength
            }

        } while (
            // If no modulo, make sure return index is within range.
            returnIndex >= 0 && returnIndex < timesLength &&

            // Continue if this verse is in the hidden column.
            (!_shouldShowVerseForColumn(getVerse(props, returnIndex), lyricColumnShown) ||

            // Or if index is zero when lyrics start at zero.
            (returnIndex === 0 && lyricsStartAtZero)) &&

            // And as long as we haven't exhausted all indices.
            !(direction !== 0 && index === returnIndex)
        )

        return returnIndex
    }

    return index
}

export const getVerseIndexForAnnotationIndex = ({
    props,
    index,
    direction,
    lyricColumnShown
}) => {
    const annotation = getAnnotation({
        selectedSongIndex: props.selectedSongIndex,
        songs: props.songs
    }, index)

    /**
     * Ensure that this verse index is not hidden. Otherwise, search in the
     * specified direction.
     */
    return getVerseIndexForDirection({
        props,
        index: annotation.verseIndex,
        recentIndex: annotation.mostRecentVerseIndex || false,
        direction,
        lyricColumnShown
    })
}

export const getPopupAnchorIndexForDirection = (props, currentIndex = 1, direction) => {
    const annotation = getAnnotation(props),
        selectedDotKeys = props.selectedDotKeys

    if (annotation && annotation.popupAnchors) {

        const { popupAnchors } = annotation,
            popupAnchorsLength = popupAnchors.length

        if (popupAnchorsLength < 2) {
            return popupAnchorsLength
        }

        let returnIndex = currentIndex

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
        } while (((typeof popupAnchors[returnIndex - 1] === 'string' && !selectedDotKeys.wiki) || (typeof popupAnchors[returnIndex - 1] === 'object' && !selectedDotKeys.portal)) && !(direction !== 0 && currentIndex === returnIndex))
        return returnIndex
    }

    return currentIndex
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
                    portalIndex } = portalLink,
                song = songs[songIndex - 1],
                annotation = song.annotations[annotationIndex - 1]

            return {
                songIndex,
                annotationIndex,
                portalIndex,
                songTitle: song.title,
                annotationTitle: annotation.title
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
            wikiPath = annotation.popupAnchors[selectedWikiIndex - 1]
        return `https://en.m.wikipedia.org/wiki/${wikiPath}`
    } else {
        return null
    }
}
