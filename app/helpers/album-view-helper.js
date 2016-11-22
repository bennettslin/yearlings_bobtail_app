// Parse album data for presentation.
import { ALBUM_BUILD_KEYS,
         LEFT,
         RIGHT } from './constants'
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
    return selectedSongIndex ?
        songs[selectedSongIndex - 1] : {}
}

export const getLyricsStartAtZero = (props, selectedSongIndex) => {
    const selectedSong = getSong({
        selectedSongIndex: selectedSongIndex || props.selectedSongIndex,
        songs: props.songs
    })

    return selectedSong.times ? selectedSong.times[1] === 0 : true
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
         * column.
         */
        let currentCounter = 0
        do {
            returnIndex = verse.currentAnnotationIndices[currentCounter]
            currentCounter++

        } while (currentCounter < verse.currentAnnotationIndices.length && !_shouldShowAnnotationForColumn(getAnnotation(props, returnIndex), lyricColumnShown))

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

export const getVerseIndexForDirection = (props, currentIndex = 1, direction, lyricColumnShown, noModulo) => {
    const selectedSong = getSong(props),
        lyricsStartAtZero = getLyricsStartAtZero(props)

    if (selectedSong.times) {
        const timesLength = selectedSong.times.length

        let returnIndex = currentIndex

        do {
            if (typeof direction === 'undefined') {
                direction = 0

            // If this is the second time around, begin incrementing backwards.
            } else if (direction === 0) {
                direction = -1
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
            !(direction !== 0 && currentIndex === returnIndex)
        )

        return returnIndex
    }

    return currentIndex
}

export const getVerseIndexForAnnotationIndex = (props, annotationIndex, lyricColumnShown) => {
    const annotation = getAnnotation({
        selectedSongIndex: props.selectedSongIndex,
        songs: props.songs
    }, annotationIndex)

    /**
     * Ensure that this verse index is not hidden. Otherwise, look backwards.
     */
    return getVerseIndexForDirection(props, annotation.verseIndex, undefined, lyricColumnShown)
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

export const getOverviewText = (props) => {
    const songOverview = getSong(props).overview
    return songOverview || props.overview
}
