const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    SUB_CARD = 'subCard',
    SIDE_CARD = 'sideCard',
    DOT_UNIT = 'dotUnit'

module.exports = {

    LYRIC,
    LEFT,
    CENTRE,
    RIGHT,
    ANCHOR,
    ITALIC,

    WIKI: 'wiki',

    COLUMN_INDEX: 'columnIndex',
    WIKI_INDEX: 'wikiIndex',

    IS_DOT_UNIT: 'isDotUnit',
    IS_VERSE_BEGINNING_SPAN: 'isVerseBeginningSpan',
    IS_VERSE_ENDING_SPAN: 'isVerseEndingSpan',

    TITLE: 'title',
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

    // subCard type only
    RHYME: 'rhyme',

    // sideStanza type only
    BACKING: 'backing',

    // subCard or sideSubCard type
    RESPONSE: 'response',

    // This is the order by which annotations will be assigned.
    ALBUM_BUILD_KEYS: [
        LYRIC,
        LEFT,
        CENTRE,
        RIGHT,
        ITALIC,
        EMPHASIS,
        SUB_CARD,
        SIDE_CARD,
        DOT_UNIT
    ],

    /**
     * Lyrics text will only ever be under these keys. Includes both lyric keys
     * and general keys.
     */
    LYRIC_TEXT_KEYS: [
        LYRIC,
        LEFT,
        CENTRE,
        RIGHT,
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    WORMHOLE_SEARCH_KEYS: [
        LYRIC,
        LEFT,
        RIGHT,
        CENTRE
    ],

    EAR_COLUMN_KEYS: [
        LEFT,
        RIGHT
    ],

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    FLASHBACK_TO_WORMHOLE_PREFIX: 'flashback to',
    FORESHADOW_OF_WORMHOLE_PREFIX: 'foreshadow of'
}
