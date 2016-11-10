// Parse album data for presentation.
import { ALBUM_BUILD_KEYS } from './constants'
import { intersects } from 'helpers/dot-helper'

/**
 * Recurse until object with verse index is found.
 */
const _parseLyrics = (lyric, selectedVerseIndex) => {
    if (lyric.verseIndex === selectedVerseIndex) {
        return lyric
    } else if (Array.isArray(lyric)) {
        return lyric.reduce((childSelectedLyric, childLyric) => {
            return childSelectedLyric || _parseLyrics(childLyric, selectedVerseIndex)
        }, null)
    }
}

export const getSong = ({ selectedSongIndex, songs }) => {
    return selectedSongIndex ?
        songs[selectedSongIndex - 1] : {}
}

export const getAnnotationsDotKeys = (props) => {
    const selectedSong = props.selectedSong || getSong(props)

    return selectedSong ? selectedSong.annotations.map(annotation => {
        return annotation.dotKeys
    }) : null
}

export const getAnnotationIndexForDirection = (props, currentIndex = 1, direction) => {
    const selectedSong = getSong(props),
        annotationsLength = selectedSong.annotations ? selectedSong.annotations.length : 0,
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
            direction = 1
        }

        // Remember that annotations are 1-based.
        returnIndex = (returnIndex + annotationsLength + direction - 1) % annotationsLength + 1
    } while (!intersects(annotationsDotKeys[returnIndex - 1], selectedDotKeys))

    return returnIndex
}

export const getAnnotation = ({ selectedAnnotationIndex, selectedSong, ...other }) => {
    selectedSong = selectedSong || getSong(other)
    return selectedSong.annotations ?
            selectedSong.annotations[selectedAnnotationIndex - 1] : null
}

export const getVerse = ({ selectedVerseIndex, ...other }) => {
    const { lyrics } = getSong(other)
    return _parseLyrics(lyrics, selectedVerseIndex)
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
