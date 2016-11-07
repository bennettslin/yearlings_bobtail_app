// Constants used by all components.

const LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    AUDIO_SECTION = 'audio_section',
    SONGS_SECTION = 'songs_section',
    OVERVIEW_SECTION = 'overview_section',
    LYRICS_SECTION = 'lyrics_section',
    DOTS_SECTION = 'dots_section',
    ANNOTATION_SECTION = 'annotation_section',
    WIKI_SECTION = 'wiki_section'

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    SONGS_SECTION,
    AUDIO_SECTION,
    OVERVIEW_SECTION,
    LYRICS_SECTION,
    DOTS_SECTION,
    ANNOTATION_SECTION,
    WIKI_SECTION,
    SECTION_KEYS: [
        SONGS_SECTION,
        AUDIO_SECTION,
        OVERVIEW_SECTION,
        LYRICS_SECTION,
        DOTS_SECTION,
        ANNOTATION_SECTION,
        WIKI_SECTION
    ],

    SELECTED_SONG_INDEX: 'selectedSongIndex',
    SELECTED_OVERVIEW_INDEX: 'selectedOverviewIndex',
    SELECTED_ANNOTATION_INDEX: 'selectedAnnotationIndex',
    SELECTED_WIKI_INDEX: 'selectedWikiIndex',
    SELECTED_VERSE_INDEX: 'selectedVerseIndex',
    SELECTED_TIME_PLAYED: 'selectedTimePlayed',
    SELECTED_DOT_KEYS: 'selectedDotKeys',
    SELECTED_AUDIO_OPTION_INDEX: 'selectedAudioOptionIndex',
    ACCESSED_ON: 'accessedOn',
    ACCESSED_SECTION_INDEX: 'accessedSectionIndex',

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    LEFT,
    CENTRE,
    RIGHT,
    OVERLAP: 'overlap',

    TITLE: 'title',
    REFRAIN: 'refrain',
    VERSES: 'verses',
    PRECHORUS: 'prechorus',
    CHORUS: 'chorus',
    POSTCHORUS: 'postchorus',
    BRIDGE: 'bridge',
    OUTRO: 'outro',
    RHYME: 'rhyme',
    RESPONSE: 'response',
    BACKING: 'backing',

    // Temporary.
    ALBUM_BUILD_KEYS: [
        'lyric',
        LEFT,
        CENTRE,
        RIGHT,
        ITALIC,
        EMPHASIS,
        ANCHOR,
        'dotStanza',
        'topSideStanza',
        'bottomSideStanza',
        'subStanza'
    ],

    /**
     * Lyrics text will only ever be under these keys. Includes both lyric keys
     * and general keys.
     */
    LYRIC_TEXT_KEYS: [
        'lyric',
        LEFT,
        CENTRE,
        RIGHT,
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    LYRIC_COLUMN_KEYS: [
        LEFT,
        RIGHT
    ],

    DOUBLESPEAKER_KEYS: [
        LEFT,
        CENTRE,
        RIGHT
    ],

    ALL_DOT_KEYS: [
        'pun',
        'backstory', // My perspective while making the album.
        'narrative', // My perspective in the story.
        'foreshadow',
        'music',
        'pulpit',
        'wiki',
        'portal',
        'afterword' // My perspective while making this website.
    ],

    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' '
}
