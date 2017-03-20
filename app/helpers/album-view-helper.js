// Parse album data for presentation.
import { LEFT,
         LYRIC_COLUMN_KEYS,

         PORTAL,
         REFERENCE } from './constants'

import { intersects } from 'helpers/dot-helper'
import { getIsMobileWiki, getLyricSectionRect } from 'helpers/responsive-helper'

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

export const getVerseIndexForDirection = ({
    props,
    index,
    recentIndex,
    direction,
    lyricColumnShown,
    noModulo
}) => {
    const selectedSong = getSong(props),
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
            !_shouldShowVerseForColumn(getVerse(props, returnIndex), lyricColumnShown) &&

            // Or if index is zero when lyrics start at zero.
            // (returnIndex === 0 && lyricsStartAtZero)) &&

            // And as long as we haven't exhausted all indices.
            !(direction !== 0 && index === returnIndex)
        )

        return returnIndex
    }

    return index
}

export const getSliderRatioForScreenX = (screenX, sliderLeft, sliderWidth) => {
    const sliderX = screenX - sliderLeft,
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
     } while ((
            (typeof popupAnchors[returnIndex - 1] === 'string' && !selectedDotKeys[REFERENCE]) ||
            (typeof popupAnchors[returnIndex - 1] === 'object' && !selectedDotKeys[PORTAL])
        ) && (direction === 0 || currentIndex !== returnIndex))

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
