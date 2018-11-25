const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    SUB_CARD = 'subCard',
    DOT_CARD = 'dotCard',
    TOP_SIDE_CARD = 'topSideCard',
    BOTTOM_SIDE_CARD = 'bottomSideCard'

module.exports = {

    LYRIC,
    LEFT,
    CENTRE,
    RIGHT,
    ANCHOR,
    ITALIC,

    WIKI: 'wiki',

    SUB_CARD,
    DOT_CARD,
    TOP_SIDE_CARD,
    BOTTOM_SIDE_CARD,

    COLUMN_INDEX: 'columnIndex',
    LEFT_COLUMN: 'leftColumn',
    RIGHT_COLUMN: 'rightColumn',

    WIKI_INDEX: 'wikiIndex',
    DESTINATION_WORMHOLE_INDEX: 'destinationWormholeIndex',
    SOURCE_WORMHOLE_INDEX: 'sourceWormholeIndex',

    IS_DOT_CARD: 'isDotCard',
    HAS_SIDE_CARDS: 'hasSideCards',
    IS_DOUBLESPEAKER: 'isDoublespeaker',
    IS_VERSE_BEGINNING_SPAN: 'isVerseBeginningSpan',
    IS_VERSE_ENDING_SPAN: 'isVerseEndingSpan',
    PROPER_NOUN: 'properNoun',

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
        TOP_SIDE_CARD,
        BOTTOM_SIDE_CARD,
        DOT_CARD
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
