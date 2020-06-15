const LYRIC = 'lyric',
    LYRIC_LEFT = 'lyricLeft',
    LYRIC_CENTRE = 'lyricCentre',
    LYRIC_RIGHT = 'lyricRight',
    ANCHOR = 'anchor'

module.exports = {

    LYRIC,
    LYRIC_LEFT,
    LYRIC_CENTRE,
    LYRIC_RIGHT,
    ANCHOR,

    WIKI: 'wiki',
    WIKI_INDEX: 'wikiIndex',

    IS_UNIT_DOT: 'isUnitDot',
    IS_VERSE_BEGINNING_SPAN: 'beginsVerse',
    IS_VERSE_ENDING_SPAN: 'endsVerse',

    REFRAIN: 'refrain',
    VERSES: 'verse',
    PRECHORUS: 'prechorus',
    CHORUS: 'chorus',
    POSTCHORUS: 'postchorus',
    BRIDGE: 'bridge',
    CODA: 'coda',
    INTRO: 'intro',
    OUTRO: 'outro',
    SOLO: 'solo',

    // subVerse type only
    RHYME: 'rhyme',

    // sideCard type only
    BACKING: 'backing',

    // subVerse or sideSubCard type
    RESPONSE: 'response',

    // This is the order by which annotations will be assigned.
    ANNOTATION_SEARCH_KEYS: [
        LYRIC,
        LYRIC_CENTRE,
        LYRIC_LEFT,
        LYRIC_RIGHT,
        'subVerse',
        'sideCard',
        'sideSubCard',
        'unitDot'
    ],

    /**
     * Lyrics text will only ever be under these keys. Includes both lyric keys
     * and general keys.
     */
    LYRIC_TEXT_KEYS: [
        LYRIC,
        LYRIC_CENTRE,
        LYRIC_LEFT,
        LYRIC_RIGHT,
        ANCHOR
    ],

    WORMHOLE_SEARCH_KEYS: [
        LYRIC,
        LYRIC_CENTRE,
        LYRIC_LEFT,
        LYRIC_RIGHT
    ],

    EAR_COLUMN_KEYS: [
        LYRIC_LEFT,
        LYRIC_RIGHT
    ],

    FLASHBACK_TO_WORMHOLE_PREFIX: 'flashback to',
    FORESHADOW_OF_WORMHOLE_PREFIX: 'foreshadow of'
}
