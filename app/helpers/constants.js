// Constants used by all components.

const LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor'

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    SELECTED_SONG_INDEX: 'selectedSongIndex',
    SELECTED_ANNOTATION_INDEX: 'selectedAnnotationIndex',
    SELECTED_TIME: 'selectedTime',
    SELECTED_DOT_KEYS: 'selectedDotKeys',
    SELECTED_OVERVIEW_INDEX: 'selectedOverviewIndex',
    SELECTED_WIKI_URL: 'selectedWikiUrl',
    DEFAULT_OVERVIEW_INDEX: 1,

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

    OVERVIEW_KEYS: [
        'narrative',
        'music'
    ],

    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' '
}
