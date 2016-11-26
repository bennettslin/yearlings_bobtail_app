import { getAnnotationIndexForDirection,
         getPopupAnchorIndexForDirection,
         getVerseIndexForDirection,
         getAnnotationIndexForVerseIndex,
         getVerseIndexForAnnotationIndex } from 'helpers/album-view-helper'

import { NAV_SECTION,
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
        selectTips,
        togglePlay,
        toggleAdmin,
        selectTime,
        selectLyricExpand,
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
            // Toggle lyric expand.
            case 'x':
                selectLyricExpand()
                break
            // Toggle selected overview index.
            case 'z':
                selectOverview()
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
            default:
                /**
                 * Directly access sections. These keys fire only if no
                 * selected annotation or wiki.
                 */
                if (canAccessSections) {
                    let accessedSectionKey

                    switch (keyName) {
                        case 'w':
                            accessedSectionKey = AUDIO_SECTION
                            break
                        case 'j':
                            accessedSectionKey = DOTS_SECTION
                            break
                        case 'l':
                            accessedSectionKey = LYRICS_SECTION
                            break
                        case 's':
                            accessedSectionKey = NAV_SECTION
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
        selectSong
    }) {

        const index = this.getIntegerForCharKey(keyName)

        // Go straight to index if chosen.
        if (index >= 0 && index < songsLength) {
            selectSong(true, index)
            accessedSongIndex = index

        } else {
            switch (keyName) {
                case ARROW_UP:
                    accessedSongIndex = (accessedSongIndex + (songsLength - 1)) % songsLength
                    break
                case ARROW_DOWN:
                    accessedSongIndex = (accessedSongIndex + 1) % songsLength
                    break
                case ENTER:
                    selectSong(true, accessedSongIndex)
                    break
            }
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
                break
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
                break
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
        selectAudioOption,
        selectSong,
        selectVerse
    }) {
        switch (keyName) {
            case ENTER:
                selectAudioOption()
                break
            case ARROW_LEFT:
                selectSong(true, undefined, -1)
                break
            case ARROW_RIGHT:
                selectSong(true, undefined, 1)
                break
            case ARROW_UP:
                selectVerse(true, undefined, -1)
                break
            case ARROW_DOWN:
                selectVerse(true, undefined, 1)
                break
        }
    },

    handleDotAccess({
        keyName,
        accessedDotIndex,
        selectDot
    }) {
        const index = this.getIntegerForCharKey(keyName) - 1

        // Go straight to index if chosen.
        if (index >= 0 && index < ALL_DOT_KEYS.length) {
            selectDot(undefined, ALL_DOT_KEYS[index])
            accessedDotIndex = index

        } else {
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
        }

        return {
            accessedDotIndex
        }
    },

    getNextSectionKey(props) {
        /**
         * If there's a popup, return lyrics section. Otherwise, return the
         * next section.
         */
        return props.selectedAnnotationIndex || props.selectedWikiIndex ? LYRICS_SECTION : SECTION_KEYS[this.handleSectionAccess({
            selectedSongIndex: props.selectedSongIndex,
            currentAccessedSectionIndex: (props.accessedSectionIndex) % SECTION_KEYS.length
        })]
    },

    getIntegerForCharKey(keyName) {
        if (keyName.length > 1) {
            return -1
        }

        const charCode = keyName.charCodeAt(0)

        // Char codes for numbers are 48 to 57.
        if (charCode >= 48 && charCode <= 57) {
            return charCode - 48

        // Char codes for lowercase are 97 to 122.
        } else if (charCode >= 97 && charCode <= 122) {
            return charCode - 87

        } else {
            return -1
        }
    }
}
