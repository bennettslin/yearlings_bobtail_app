import { getAnnotationIndexForDirection, getPopupAnchorIndexForDirection, getVerseIndexForDirection } from 'helpers/album-view-helper'

import { SONGS_SECTION,
         AUDIO_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         ANNOTATION_SECTION,
         WIKI_SECTION,
         SECTION_KEYS,

         LYRIC_VERSE_ELEMENT,
         LYRIC_ANNOTATION_ELEMENT,

         ALL_DOT_KEYS,
         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER,
         ESCAPE } from 'helpers/constants'

export default {

    handleKeyIfUniversal({
        keyName,
        canAccessSections,
        handleSectionAccess,
        selectOverview,
        selectAudioOption,
        togglePlay
    }) {

        // These keys will always fire, even if access is off.
        switch (keyName) {
            // Toggle selected overview index.
            case 'b':
            case 'B':
                selectOverview()
                break
            // Toggle audio option index.
            case 'o':
            case 'O':
                selectAudioOption()
                break
            // Toggle isPlaying.
            case 'p':
            case 'P':
                togglePlay()
                break
            default:
                /**
                 * Directly access sections. These keys fire only if no
                 * selected annotation or wiki.
                 */
                if (canAccessSections) {
                    let accessedSectionKey

                    switch (keyName) {
                        case 'a':
                        case 'A':
                            accessedSectionKey = AUDIO_SECTION
                            break
                        case 'd':
                        case 'D':
                            accessedSectionKey = DOTS_SECTION
                            break
                        case 'l':
                        case 'L':
                            accessedSectionKey = LYRICS_SECTION
                            break
                        case 's':
                        case 'S':
                            accessedSectionKey = SONGS_SECTION
                            break
                        default:
                        return false
                    }

                    handleSectionAccess({
                        accessedSectionKey,
                        accessOn: true
                    })
                } else {
                    return false
                }
        }

        return true
    },

    handleSectionAccess({
        selectedSongIndex,
        currentAccessedSectionIndex,
        accessedSectionKey,
        accessOn,
        handleAccessOn
    }) {
        let accessedSectionIndex = 0

        // If no section key specified, rotate through sections.
        if (!accessedSectionKey) {
            accessedSectionIndex = (currentAccessedSectionIndex + 1) % SECTION_KEYS.length

            // Skip lyrics and dots sections if no selected song.
            if (selectedSongIndex === 0) {
                while (SECTION_KEYS[accessedSectionIndex] === LYRICS_SECTION || SECTION_KEYS[accessedSectionIndex] === DOTS_SECTION) {
                    accessedSectionIndex = (accessedSectionIndex + 1) % SECTION_KEYS.length
                }
            }

            // Always skip annotation and wiki sections.
            while (SECTION_KEYS[accessedSectionIndex] === ANNOTATION_SECTION || SECTION_KEYS[accessedSectionIndex] === WIKI_SECTION) {
                accessedSectionIndex = (accessedSectionIndex + 1) % SECTION_KEYS.length
            }

        // Otherwise, find section index for section key.
        } else {
            while (SECTION_KEYS[accessedSectionIndex] !== accessedSectionKey && accessedSectionIndex < SECTION_KEYS.length) {
                accessedSectionIndex++
            }
        }

        // Access on if section accessed from universal key.
        if (accessOn) {
            handleAccessOn(1)
        }

        return accessedSectionIndex
    },

    handleSongAccess({
        keyName,
        songsLength,
        accessedSongIndex,
        selectedTimePlayed,
        selectTime,
        selectSong
    }) {
        switch (keyName) {
            case ARROW_UP:
                accessedSongIndex = (accessedSongIndex + (songsLength - 1)) % songsLength
                break
            case ARROW_DOWN:
                accessedSongIndex = (accessedSongIndex + 1) % songsLength
                break
            // FIXME: Left and right arrows are for dev purposes only.
            case ARROW_LEFT:
                selectTime(true, selectedTimePlayed - 1)
                break
            case ARROW_RIGHT:
                selectTime(true, selectedTimePlayed + 1)
                break
            case ENTER:
                selectSong(true, accessedSongIndex)
                break
        }

        return {
            accessedSongIndex
        }
    },

    handleLyricsAndAnnotationAccess({
        keyName,
        props,
        fromAnnotationSection,
        accessedAnnotationIndex,
        accessedLyricElement,
        selectAnnotation,
        scrollElementIntoView
    }) {
        let newState,
            toSelectAnnotation = false,
            direction

        // Both lyric and annotation sections can change accessed annotation.
        switch (keyName) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
                direction = keyName === ARROW_LEFT ? -1 : 1
                toSelectAnnotation = fromAnnotationSection
                break
            case ENTER:
                toSelectAnnotation = !fromAnnotationSection
                break
            default:
                return false
                break
        }

        if (direction) {
            // Change accessed lyric element to annotation.
            newState = { accessedLyricElement: LYRIC_ANNOTATION_ELEMENT }
            accessedAnnotationIndex = getAnnotationIndexForDirection(props, accessedAnnotationIndex, direction)
            scrollElementIntoView('annotation', accessedAnnotationIndex)
        }

        /**
         * Select with arrow key from annotation section, and with "Enter" key
         * from lyric section. If from lyric section, also handle section
         * access.
         */
        if (toSelectAnnotation) {
            selectAnnotation (!fromAnnotationSection, accessedAnnotationIndex)

        // Change accessed index with arrow key from lyric section.
        } else if (!fromAnnotationSection) {
            newState = newState || {}
            newState.accessedAnnotationIndex = accessedAnnotationIndex
        }

        return newState || false
    },

    handleLyricsAccess({
        keyName,
        props,
        accessedVerseIndex
    }) {
        let newState,
            direction

        switch (keyName) {
            case ARROW_UP:
                direction = -1
                break
            case ARROW_DOWN:
                direction = 1
                break
            case ENTER:
                break
            default:
                return false
                break
        }

        if (direction) {
            newState = { accessedLyricElement: LYRIC_VERSE_ELEMENT,
                         accessedVerseIndex: getVerseIndexForDirection(props, accessedVerseIndex, direction) }
        }

        return newState || false
    },

    handleAnnotationAccess({
        keyName,
        props,
        accessedPopupAnchorIndex,
        selectWikiOrPortal
    }) {
        let direction

        switch (keyName) {
            case ARROW_UP:
                direction = -1
                break
            case ARROW_DOWN:
                direction = 1
                break
            case ENTER:
                selectWikiOrPortal()
                return false
                break
            default:
                return false
                break
        }

        accessedPopupAnchorIndex = getPopupAnchorIndexForDirection(props, accessedPopupAnchorIndex, direction)

        return accessedPopupAnchorIndex
    },

    handleAudioAccess({
        keyName,
        togglePlay,
        selectAudioOption
    }) {
        switch (keyName) {
            case ENTER:
                togglePlay()
                break
            case ARROW_LEFT:
                selectAudioOption(undefined, -1)
                break
            case ARROW_RIGHT:
                selectAudioOption()
                break
        }
    },

    handleDotAccess({
        keyName,
        accessedDotIndex,
        selectDot
    }) {
        if (keyName === ENTER) {
            selectDot(undefined, ALL_DOT_KEYS[accessedDotIndex])

        } else if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            let direction

            switch (keyName) {
                case ARROW_LEFT:
                    direction = ALL_DOT_KEYS.length - 1
                    break
                case ARROW_RIGHT:
                    direction = 1
                    break
            }

            accessedDotIndex = (accessedDotIndex + direction) % ALL_DOT_KEYS.length
        }

        return {
            accessedDotIndex
        }
    },

    handleOverviewAccess({
        keyName,
        selectOverview
    }) {
        if (keyName === ENTER) {
            selectOverview()
        }
    },

    handleWikiAccess({
        keyName
    }) {

    }
}
