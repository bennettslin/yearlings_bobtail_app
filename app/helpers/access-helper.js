import { SONGS_SECTION,
         AUDIO_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,

         ALL_DOT_KEYS,
         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER,
         ESCAPE,
         SPACE } from 'helpers/constants'

export default {

    handleKeyIfUniversal({
        keyName,
        handleSectionAccess,
        selectOverview,
        selectAudioOption,
        togglePlay
    }) {
        // These keys will always fire, even if access is off.
        switch (keyName) {
            // Directly access sections.
            case 'a':
            case 'A':
                handleSectionAccess(AUDIO_SECTION, true)
                break
            case 'd':
            case 'D':
                handleSectionAccess(DOTS_SECTION, true)
                break
            case 'l':
            case 'L':
                handleSectionAccess(LYRICS_SECTION, true)
                break
            case 's':
            case 'S':
                handleSectionAccess(SONGS_SECTION, true)
                break
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
                return false
                break
        }

        return true
    },

    handleSongAccess({
        keyName,
        songsLength,
        accessedSongIndex,
        selectedTimePlayed,
        selectTime,
        selectSong,
        setState
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
                selectTime(undefined, selectedTimePlayed - 1)
                break
            case ARROW_RIGHT:
                selectTime(undefined, selectedTimePlayed + 1)
                break
            case ENTER:
                selectSong(undefined, accessedSongIndex)
                break
        }

        setState({
            accessedSongIndex
        })
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
        selectDot,
        setState
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

            setState({
                accessedDotIndex
            })
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

    handleAnnotationAccess({
        keyName
    }) {

    },

    handleWikiAccess({
        keyName
    }) {

    },

    handleLyricsAccess({
        keyName,
        selectedAnnotationIndex,
        annotationsLength,
        accessedAnnotationIndex,
        accessedAnnotationOutlined,
        selectAnnotation,
        scrollElementIntoView,
        setState
    }) {
        let willSelectAnnotation = false,
            willScrollToAnchor = false

        switch (keyName) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
                if (!selectedAnnotationIndex && !accessedAnnotationOutlined) {
                    accessedAnnotationIndex = accessedAnnotationIndex || 1
                } else {
                    willScrollToAnchor = true
                    if (keyName === ARROW_LEFT) {
                        accessedAnnotationIndex--
                        if (accessedAnnotationIndex <= 0) {
                            accessedAnnotationIndex = annotationsLength
                        }
                    } else if (keyName === ARROW_RIGHT) {
                        accessedAnnotationIndex++
                        if (accessedAnnotationIndex > annotationsLength) {
                            accessedAnnotationIndex = 1
                        }
                    }
                    if (selectedAnnotationIndex) {
                        willSelectAnnotation = true
                    }
                }
                accessedAnnotationOutlined = true
                break
            case ENTER:
                // Select or deselect annotation, but keep access outline.
                if (accessedAnnotationOutlined) {
                    if (selectedAnnotationIndex) {
                        selectAnnotation()
                    } else {
                        willScrollToAnchor = true
                        willSelectAnnotation = true
                    }
                }
                break
            case ESCAPE:
                // Deselect annotation, and lose access outline.
                accessedAnnotationOutlined = false
                if (selectedAnnotationIndex) {
                    selectAnnotation()
                }
                break
        }

        if (willSelectAnnotation) {
            selectAnnotation(undefined, accessedAnnotationIndex)
        }

        if (willScrollToAnchor) {
            scrollElementIntoView('annotation', accessedAnnotationIndex)
        }

        setState({
            accessedAnnotationIndex,
            accessedAnnotationOutlined
        })
    }
}
