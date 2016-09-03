// Constants used by all components.

const LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor'

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    ACTIVE_SONG_INDEX: 'activeSongIndex',
    ACTIVE_ANNOTATION_INDEX: 'activeAnnotationIndex',
    ACTIVE_TIME: 'activeTime',
    ACTIVE_DOT_KEYS: 'activeDotKeys',
    ACTIVE_OVERVIEW_INDEX: 'activeOverviewIndex',
    ACTIVE_WIKI_URL: 'activeWikiUrl',

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

    REFRAIN: 'refrain-section',
    VERSE: 'verse-section',
    PRECHORUS: 'prechorus-section',
    CHORUS: 'chorus-section',
    POSTCHORUS: 'postchorus-section',
    BRIDGE: 'bridge-section',
    OUTRO: 'outro-section',

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
        'title'
        // 'afterword' // My perspective while making this website.
    ],

    OVERVIEW_KEYS: [
        'narrative',
        'music'
    ]
}
