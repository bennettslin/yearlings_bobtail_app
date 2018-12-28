const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ANCHOR = 'anchor',

    SUB_CARD = 'subVerse',
    SIDE_CARD = 'sideCard',
    SIDE_SUB_CARD = 'sideSubCard',
    DOT_UNIT = 'unitDot'

module.exports = {

    LYRIC,
    LEFT,
    CENTRE,
    RIGHT,
    ANCHOR,

    WIKI: 'wiki',

    COLUMN_INDEX: 'columnIndex',
    WIKI_INDEX: 'wikiIndex',

    IS_UNIT_DOT: 'isUnitDot',
    IS_VERSE_BEGINNING_SPAN: 'isVerseBeginningSpan',
    IS_VERSE_ENDING_SPAN: 'isVerseEndingSpan',

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
        LEFT,
        RIGHT,
        SUB_CARD,
        SIDE_CARD,
        SIDE_SUB_CARD,
        DOT_UNIT
    ],

    /**
     * Lyrics text will only ever be under these keys. Includes both lyric keys
     * and general keys.
     */
    LYRIC_TEXT_KEYS: [
        LYRIC,
        LEFT,
        RIGHT,
        ANCHOR
    ],

    WORMHOLE_SEARCH_KEYS: [
        LYRIC,
        LEFT,
        RIGHT
    ],

    EAR_COLUMN_KEYS: [
        LEFT,
        RIGHT
    ],

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        ANCHOR
    ],

    FLASHBACK_TO_WORMHOLE_PREFIX: 'flashback to',
    FORESHADOW_OF_WORMHOLE_PREFIX: 'foreshadow of'
}
