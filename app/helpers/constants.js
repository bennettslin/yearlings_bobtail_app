// Constants used by all components.

const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor'

module.exports = {
    DOT_STANZA_CONSTANT: '***DOT_STANZA***',

    CLOSE_POPUP_BUTTON: 'close',
    PREVIOUS_POPUP_BUTTON: 'side-position previous',
    NEXT_POPUP_BUTTON: 'side-position next',

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
        // CENTRE,
        RIGHT
    ],

    FLASHBACK_TO_PORTAL_PREFIX: 'flashback to',
    FORESHADOW_OF_PORTAL_PREFIX: 'foreshadow of',

    SONG_FILES: [
        '01-didi',
        '02-willy-the-cocoa',
        '03-dear-saskia',
        '04-odin',
        '05-pchelkas-starry-journey',
        '06-ash-wednesday',
        '07-m',
        '08-good-night-sita',
        '09-grasshoppers-lie-heavy',
        '10-constellations',
        '11-look-back-in-anger',
        '12-garryowen',
        '13-on-a-golden-cord',
        '14-kyon',
        '15-uncanny-valley-boy',
        '16-cremated',
        '17-vegan-proclamation',
        '18-my-100000th-dream'
    ]
}
