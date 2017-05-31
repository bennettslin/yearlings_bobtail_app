const LYRIC = 'lyric',
      LEFT = 'left',
      CENTRE = 'centre',
      RIGHT = 'right',
      ITALIC = 'italic',
      EMPHASIS = 'emphasis',
      ANCHOR = 'anchor'

module.exports = {
    IS_DOT_STANZA: '***DOT_STANZA***',

    LYRIC,
    LEFT,
    CENTRE,
    RIGHT,

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
