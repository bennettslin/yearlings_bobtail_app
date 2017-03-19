import { getAnnotationIndexForDirection,
         getPopupAnchorIndexForDirection,
         getVerseIndexForDirection,
         getAnnotationIndexForVerseIndex,
         getVerseIndexForAnnotationIndex } from 'helpers/album-view-helper'

import { getIntegerForCharKey } from 'helpers/general-helper'

import { LYRIC_VERSE_ELEMENT,
         LYRIC_ANNOTATION_ELEMENT,

         ALL_DOT_KEYS,
         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER } from 'helpers/constants'

export default {

    handleKeyIfUniversal({
        keyName,
        selectOverview,
        selectDotsExpand,
        selectAudioOption,
        selectTips,
        togglePlay,
        toggleAdmin,
        selectTime,
        selectLyricExpand,
        selectBookColumn,
        selectNavExpand,
        selectedTimePlayed
    }) {
        // These keys will always fire, even if access is off.
        switch (keyName) {
            // FIXME: These are for dev purposes only.
            case '¼': // For Safari.
            case ',':
                selectTime(true, selectedTimePlayed - 1)
                break
            case '¾': // For Safari.
            case '.':
                selectTime(true, selectedTimePlayed + 1)
                break
            // Toggle nav expand.
            case 'v':
                selectNavExpand(true)
                break
            // Toggle lyric expand.
            case 'x':
                selectLyricExpand(true)
                break
            // Toggle book column.
            case 'k':
                selectBookColumn(true)
                break
            // Toggle selected overview index.
            case 'z':
                selectOverview(true)
                break
            // Toggle selected dots index.
            case 'u':
                selectDotsExpand(true)
                break
            // Toggle admin.
            case 'm':
                toggleAdmin()
                break
            // Toggle audio option index.
            case 'o':
                selectAudioOption()
                break
            // Toggle isPlaying.
            case 'p':
                togglePlay()
                break
            // Select tips.
            case 't':
                selectTips()
                break
        }

        return true
    },

    // handleSongAccess({
    //     keyName,
    //     songsLength,
    //     accessedSongIndex,
    //     selectSong,
    //     bookStartingIndices,
    //     selectedBookColumnIndex,
    //     selectBookColumn
    // }) {
    //
    //     const index = getIntegerForCharKey(keyName)
    //
    //     // Go straight to index if chosen.
    //     if (index >= 0 && index < songsLength) {
    //         selectSong(true, index)
    //         accessedSongIndex = index
    //
    //     } else {
    //         // Skip appropriate songs if showing single book column.
    //         switch (keyName) {
    //             case ARROW_LEFT:
    //                 accessedSongIndex = (accessedSongIndex + (songsLength - 1)) % songsLength
    //                 break
    //             case ARROW_RIGHT:
    //                 accessedSongIndex = (accessedSongIndex + 1) % songsLength
    //                 break
    //             case ENTER:
    //                 selectSong(true, accessedSongIndex)
    //                 break
    //         }
    //     }
    //
    //     // Select the book column that contains the accessed song index.
    //     if ((selectedBookColumnIndex === 1 && accessedSongIndex >= bookStartingIndices[1]) || (selectedBookColumnIndex === 2 && accessedSongIndex < bookStartingIndices[1])) {
    //         selectBookColumn()
    //     }
    //
    //     return {
    //         accessedSongIndex
    //     }
    // },

    handleLyricsAndAnnotationAccess({
        keyName,
        props,
        fromAnnotationSection,
        accessedAnnotationIndex,
        accessedLyricElement,
        accessedVerseIndex,
        lyricColumnShown,
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
                // Only select annotation if annotation is accessed element.
                if (accessedLyricElement === LYRIC_ANNOTATION_ELEMENT) {
                    toSelectAnnotation = !fromAnnotationSection
                } else {
                    return false
                }
                break
            default:
                return false
        }

        if (direction) {
            // If accessed element is already annotation, proceed.
            if (accessedLyricElement === LYRIC_ANNOTATION_ELEMENT) {
                accessedAnnotationIndex = getAnnotationIndexForDirection(props, accessedAnnotationIndex, direction, undefined, lyricColumnShown)

                if (!fromAnnotationSection) {
                    newState = {
                        accessedAnnotationIndex,
                        accessedVerseIndex: getVerseIndexForAnnotationIndex({
                            props,
                            index: accessedAnnotationIndex
                        })
                    }
                }

            /**
             * Otherwise, change the accessed element, and also choose the
             * annotation index based on the current accessed verse index.
             */
            } else {
                accessedAnnotationIndex = getAnnotationIndexForVerseIndex(props, accessedVerseIndex, direction, lyricColumnShown)

                newState = {
                    accessedLyricElement: LYRIC_ANNOTATION_ELEMENT,
                    accessedAnnotationIndex
                }
            }

            scrollElementIntoView('annotation', accessedAnnotationIndex)
        }

        /**
         * Select with arrow key from annotation section, and with "Enter" key
         * from lyric section. If from lyric section, also handle section
         * access.
         */
        if (toSelectAnnotation) {
            selectAnnotation (!fromAnnotationSection, accessedAnnotationIndex)
        }

        return newState || false
    },

    handleLyricsAccess({
        keyName,
        props,
        accessedAnnotationIndex,
        accessedVerseIndex,
        accessedLyricElement,
        selectVerse,
        selectLyricColumn,
        scrollElementIntoView,
        lyricColumnShown
    }) {
        let newState,
            toSelectVerse = false,
            direction

        switch (keyName) {
            case 'e':
                selectLyricColumn()
                break
            case ARROW_UP:
                direction = -1
                break
            case ARROW_DOWN:
                direction = 1
                break
            case ENTER:
                // Only select verse if verse is accessed element.
                if (accessedLyricElement === LYRIC_VERSE_ELEMENT) {
                    toSelectVerse = true
                } else {
                    return false
                }
                break
            default:
                return false
        }

        if (direction) {
            // If accessed element is already verse, proceed.
            if (accessedLyricElement === LYRIC_VERSE_ELEMENT) {
                accessedVerseIndex = getVerseIndexForDirection({
                    props,
                    index: accessedVerseIndex,
                    direction,
                    lyricColumnShown
                })
                newState = {
                    accessedVerseIndex,

                    // Also set accessed annotation index.
                    accessedAnnotationIndex: getAnnotationIndexForVerseIndex(props, accessedVerseIndex)
                }

            // Otherwise, do nothing other than change the accessed element.
            } else {
                accessedVerseIndex = getVerseIndexForAnnotationIndex({
                    props,
                    index: accessedAnnotationIndex,
                    direction,
                    lyricColumnShown
                })
                newState = {
                    accessedLyricElement: LYRIC_VERSE_ELEMENT,
                    accessedVerseIndex
                }
            }

            scrollElementIntoView('verse', accessedVerseIndex)
        }

        if (toSelectVerse) {
            selectVerse(true, accessedVerseIndex)
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
            default:
                return false
        }

        accessedPopupAnchorIndex = getPopupAnchorIndexForDirection(props, accessedPopupAnchorIndex, direction)

        return accessedPopupAnchorIndex
    },

    // handleAudioAccess({
    //     keyName,
    //     selectAudioOption,
    //     selectSong,
    //     selectVerse
    // }) {
    //     switch (keyName) {
    //         case ENTER:
    //             selectAudioOption()
    //             break
    //         case ARROW_LEFT:
    //             selectSong(true, undefined, -1)
    //             break
    //         case ARROW_RIGHT:
    //             selectSong(true, undefined, 1)
    //             break
    //         case ARROW_UP:
    //             selectVerse(true, undefined, -1)
    //             break
    //         case ARROW_DOWN:
    //             selectVerse(true, undefined, 1)
    //             break
    //     }
    // },

    // handleDotAccess({
    //     keyName,
    //     accessedDotIndex,
    //     selectDot
    // }) {
    //     const index = getIntegerForCharKey(keyName) - 1
    //
    //     // Go straight to index if chosen.
    //     if (index >= 0 && index < ALL_DOT_KEYS.length) {
    //         selectDot(undefined, ALL_DOT_KEYS[index])
    //         accessedDotIndex = index
    //
    //     } else {
    //         if (keyName === ENTER) {
    //             selectDot(undefined, ALL_DOT_KEYS[accessedDotIndex])
    //
    //         } else if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
    //             let direction
    //
    //             switch (keyName) {
    //                 case ARROW_LEFT:
    //                 direction = ALL_DOT_KEYS.length - 1
    //                 break
    //                 case ARROW_RIGHT:
    //                 direction = 1
    //                 break
    //             }
    //
    //             accessedDotIndex = (accessedDotIndex + direction) % ALL_DOT_KEYS.length
    //         }
    //     }
    //
    //     return {
    //         accessedDotIndex
    //     }
    // }
}
