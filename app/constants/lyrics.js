const LYRIC = 'lyric',
      LEFT = 'left',
      CENTRE = 'centre',
      RIGHT = 'right',
      ITALIC = 'italic',
      EMPHASIS = 'emphasis',
      ANCHOR = 'anchor',

      DOT_STANZA = 'dotStanza',
      TOP_SIDE_STANZA = 'topSideStanza',
      BOTTOM_SIDE_STANZA = 'bottomSideStanza',
      SUB_STANZA = 'subStanza',

      LEFT_COLUMN = 'leftColumn',
      RIGHT_COLUMN = 'rightColumn'

module.exports = {

    LYRIC,
    LEFT,
    CENTRE,
    RIGHT,
    ANCHOR,

    DOT_STANZA,
    TOP_SIDE_STANZA,
    BOTTOM_SIDE_STANZA,
    SUB_STANZA,

    LEFT_COLUMN,
    RIGHT_COLUMN,

    IS_DOT_STANZA: '***DOT_STANZA***',
    HAS_SIDE_STANZAS: 'hasSideStanzas',
    IS_DOUBLESPEAKER: 'isDoublespeaker',
    IS_VERSE_BEGINNING_SPAN: 'isVerseBeginningSpan',
    IS_VERSE_ENDING_SPAN: 'isVerseEndingSpan',
    PROPER_NOUN: 'properNoun',

    OVERLAP: 'overlap',

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

    // substanza type only
    RHYME: 'rhyme',

    // sideStanza type only
    BACKING: 'backing',

    // substanza or sideSubstanza type
    RESPONSE: 'response',

    // Temporary.
    ALBUM_BUILD_KEYS: [
        LYRIC,
        LEFT,
        CENTRE,
        RIGHT,
        ITALIC,
        EMPHASIS,
        DOT_STANZA,
        TOP_SIDE_STANZA,
        BOTTOM_SIDE_STANZA,
        SUB_STANZA
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

    LYRIC_COLUMN_KEYS: [
        LEFT,
        RIGHT
    ],

    DOUBLESPEAKER_KEYS: [
        LEFT,
        RIGHT
    ],

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        ITALIC,
        EMPHASIS,
        ANCHOR
    ],

    FLASHBACK_TO_PORTAL_PREFIX: 'flashback to',
    FORESHADOW_OF_PORTAL_PREFIX: 'foreshadow of',
}
