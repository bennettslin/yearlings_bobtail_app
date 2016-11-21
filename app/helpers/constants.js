// Constants used by all components.

const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    WIKI = 'wiki',

    AUDIO_SECTION = 'audio-section',
    NAV_SECTION = 'nav-section',
    OVERVIEW_SECTION = 'overview-section',
    LYRICS_SECTION = 'lyrics-section',
    DOTS_SECTION = 'dots-section',
    ANNOTATION_SECTION = 'annotation-section',
    WIKI_SECTION = 'wiki-section',

    CONTINUE = 'continue',
    REPEAT = 'repeat',
    PAUSE_AT_END = 'pause_at_end'

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    LYRIC_VERSE_ELEMENT: 'verse_element',
    LYRIC_ANNOTATION_ELEMENT: 'annotation_element',

    CONTINUE,
    REPEAT,
    PAUSE_AT_END,

    AUDIO_OPTIONS: [
        CONTINUE,
        REPEAT,
        PAUSE_AT_END
    ],

    NAV_SECTION,
    AUDIO_SECTION,
    OVERVIEW_SECTION,
    LYRICS_SECTION,
    DOTS_SECTION,
    ANNOTATION_SECTION,
    WIKI_SECTION,
    SECTION_KEYS: [
        NAV_SECTION,
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
    SELECTED_LYRIC_COLUMN_INDEX: 'selectedLyricColumnIndex',
    SELECTED_TIPS_INDEX: 'selectedTipsIndex',
    ACCESSED_ON: 'accessedOn',
    ACCESSED_SECTION_INDEX: 'accessedSectionIndex',

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    LYRIC,
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
        LYRIC,
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

    WIKI,

    ALL_DOT_KEYS: [
        'pun',
        'backstory', // My perspective while making the album.
        'narrative', // My perspective in the story.
        'foreshadow',
        'music',
        'pulpit',
        WIKI,
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
