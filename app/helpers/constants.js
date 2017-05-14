// Constants used by all components.

const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    SONGWRITING = 'songwriting',
    NARRATIVE = 'narrative',
    PUN = 'pun',
    REFERENCE = 'reference',
    BACKSTORY = 'backstory',
    OBSERVATION = 'observation',
    PORTAL = 'portal',
    AFTERWORD = 'afterword',

    // Audio options.
    CONTINUE = 'continue',
    REPEAT = 'repeat',
    PAUSE_AT_END = 'pause_at_end',

    // Tip and overview options.
    SHOWN = 'shown',
    HIDDEN = 'hidden',
    DISABLED = 'disabled',

    /**************
     * NAV VALUES *
     **************/

    // These values *must* be the same in nav.less.
    APP_ICON_DIAMETER = 44,
    APP_LARGE_ICON_DIAMETER = 54,
    APP_TABLET_LARGE_ICON_DIAMETER = 50,
    APP_MINI_LARGE_ICON_DIAMETER = 47,
    APP_THIN_MARGIN = 4,
    NAV_BOOK_PADDING = APP_THIN_MARGIN,
    NAV_LAST_TITLE_MARGIN = 50,

    // These values *must* be the same in live.less.
    GOLDEN_CORD_WIDTH = 745,
    UNCANNY_VALLEY_WIDTH = 570,

    CAROUSEL_ANNOTATION_WIDTH = 405,

    // Less files do not know these values.
    SHRINK_ICON_DIAMETER = 36,
    DOUBLE_COLUMN_UNITS = 26,
    SINGLE_COLUMN_UNITS = 16,

    DOUBLE_COLUMN_STATIC_BREAKPOINT = 20 * APP_ICON_DIAMETER + 10 * NAV_BOOK_PADDING + DOUBLE_COLUMN_UNITS,
    DOUBLE_COLUMN_SHRINK_BREAKPOINT = 20 * SHRINK_ICON_DIAMETER + 10 * NAV_BOOK_PADDING + DOUBLE_COLUMN_UNITS,
    SINGLE_COLUMN_STATIC_BREAKPOINT = 11 * APP_ICON_DIAMETER + 8 * NAV_BOOK_PADDING + SINGLE_COLUMN_UNITS,

    /***************
     * MENU VALUES *
     ***************/

    // These values *must* be the same in Less.
    MENU_SUBFIELD_MARGIN = 10,
    MENU_SUBFIELD_NARROW_MARGIN = 3,
    MENU_HEIGHT = 72,
    MENU_PHONE_HEIGHT = APP_ICON_DIAMETER + 2 * MENU_SUBFIELD_NARROW_MARGIN,

    TITLE_SUBFIELD_MIN_WIDTH = 72,

    AUDIO_BLOCK_PADDING = 12,
    AUDIO_BUTTON_MARGIN = 3,
    AUDIO_OPTION_BUTTON_MARGIN = 8,
    AUDIO_BANNER_MIN_WIDTH = 220,
    AUDIO_CONSTANT = AUDIO_BANNER_MIN_WIDTH + 3 * AUDIO_BLOCK_PADDING + 3 * APP_ICON_DIAMETER + 2 * AUDIO_BUTTON_MARGIN + AUDIO_OPTION_BUTTON_MARGIN,

    SCORES_TIPS_PADDING = APP_THIN_MARGIN,
    SCORES_TIPS_MARGIN = 10,
    SCORES_TIPS_CONSTANT = 2 * SCORES_TIPS_PADDING + SCORES_TIPS_MARGIN,

    SCORES_TIPS_IN_MAIN_CONSTANT = TITLE_SUBFIELD_MIN_WIDTH + AUDIO_CONSTANT + SCORES_TIPS_CONSTANT,
    TITLE_IN_AUDIO_BREAKPOINT = AUDIO_CONSTANT + SCORES_TIPS_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + 3 * APP_MINI_LARGE_ICON_DIAMETER,

    COLLAPSED_LYRIC_SECTION_HEIGHT = 0.32,

    POPUP_CONTENT_SIDE_PADDING = 20,
    WIKI_SUBFIELD_PADDING = APP_LARGE_ICON_DIAMETER,

    WIKI_SIDE_PADDING_TOTAL = POPUP_CONTENT_SIDE_PADDING * 2 + WIKI_SUBFIELD_PADDING * 2,

    /************************
     * DEVICE WIDTH OBJECTS *
     ************************/

    // Device widths.
    // TODO: Make sure these maxWidths are right.
    // Final TODO: Get rid of unused breakpoints.

    // maxWidth values should be the same in live.less. (Only used by admin.)

    PHONE_WIDTH = 'phone-width',
    MINI_WIDTH = 'mini-width',
    TABLET_WIDTH = 'tablet-width',
    LAPTOP_WIDTH = 'laptop-width',
    MONITOR_WIDTH = 'monitor-width',

    PHONE_OBJECT = {
        className: PHONE_WIDTH,
        maxWidth: 475
    },
    MINI_OBJECT = {
        className: MINI_WIDTH,
        maxWidth: 720,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        scoresTipsOutsideMenuBreakpoint: SCORES_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + 3 * APP_MINI_LARGE_ICON_DIAMETER,
        titleInAudioBreakpoint: TITLE_IN_AUDIO_BREAKPOINT
    },
    TABLET_OBJECT = {
        className: TABLET_WIDTH,
        maxWidth: 1100,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER
    },
    LAPTOP_OBJECT = {
        className: LAPTOP_WIDTH,
        maxWidth: 1400,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        scoresTipsOutsideMenuBreakpoint: SCORES_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + UNCANNY_VALLEY_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    },
    MONITOR_OBJECT = {
        className: MONITOR_WIDTH,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        scoresTipsOutsideMenuBreakpoint: SCORES_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_MARGIN + GOLDEN_CORD_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    }

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    DOT_STANZA_CONSTANT: '***DOT_STANZA***',

    PHONE_WIDTH,
    MINI_WIDTH,
    TABLET_WIDTH,
    LAPTOP_WIDTH,
    MONITOR_WIDTH,

    PHONE_OBJECT,
    MINI_OBJECT,
    TABLET_OBJECT,
    LAPTOP_OBJECT,
    MONITOR_OBJECT,

    // Used for admin purposes.
    DEVICE_OBJECTS: [
        PHONE_OBJECT,
        MINI_OBJECT,
        TABLET_OBJECT,
        LAPTOP_OBJECT,
        MONITOR_OBJECT,
    ],

    HEIGHTLESS_LYRIC_MIN: 540,
    HEIGHTLESS_LYRIC_MAX: 720,
    HIDDEN_NAV_MIN: 400,
    MENU_HEIGHT,
    MENU_PHONE_HEIGHT,
    COLLAPSED_LYRIC_SECTION_HEIGHT,
    WIKI_SIDE_PADDING_TOTAL,

    GOLDEN_CORD_WIDTH,
    UNCANNY_VALLEY_WIDTH,
    CAROUSEL_ANNOTATION_WIDTH,

    CONTINUE,
    REPEAT,
    PAUSE_AT_END,

    AUDIO_OPTIONS: [
        CONTINUE,
        REPEAT,
        PAUSE_AT_END
    ],

    SHOWN,
    HIDDEN,
    DISABLED,

    TIPS_OPTIONS: [
        SHOWN,
        HIDDEN,
        DISABLED
    ],

    OVERVIEW_OPTIONS: [
        SHOWN,
        DISABLED,
        HIDDEN
    ],

    CLOSE_POPUP_BUTTON: 'close',
    PREVIOUS_POPUP_BUTTON: 'side-position previous',
    NEXT_POPUP_BUTTON: 'side-position next',

    SELECTED_ADMIN_INDEX: 'selectedAdminIndex',
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
    SELECTED_NAV_INDEX: 'selectedNavIndex',
    SELECTED_DOTS_INDEX: 'selectedDotsIndex',
    SELECTED_SCORE_INDEX: 'selectedScoreIndex',
    SELECTED_CAROUSEL_INDEX: 'selectedCarouselIndex',
    ACCESSED_ON: 'accessedOn',

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
        CENTRE,
        RIGHT
    ],

    PUN,
    BACKSTORY,
    NARRATIVE,
    SONGWRITING,
    REFERENCE,
    PORTAL,
    AFTERWORD,
    OBSERVATION,

    ALL_DOT_KEYS: [
        NARRATIVE,
        BACKSTORY,
        OBSERVATION,
        PUN,
        REFERENCE,
        SONGWRITING,
        PORTAL,
        AFTERWORD
    ],

    // In dot stanzas, at least songwriting and afterword are always first.
    ALL_DOT_KEYS_DOT_STANZA_ORDER: [
        AFTERWORD,
        SONGWRITING,
        NARRATIVE,
        PUN,
        REFERENCE,
        BACKSTORY,
        OBSERVATION,
        PORTAL
    ],

    DOT_DESCRIPTIONS: {
        [NARRATIVE]: 'the story',
        [BACKSTORY]: 'backstory description',
        [OBSERVATION]: 'my two cents',
        [PUN]: 'Of both the "literary" and "bad" variety.',
        [REFERENCE]: 'wiki description',
        [SONGWRITING]: 'music description',
        [PORTAL]: 'portal description',
        [AFTERWORD]: 'after the album'
    },

    FLASHBACK_TO_PORTAL_PREFIX: 'flashback to',
    FORESHADOW_OF_PORTAL_PREFIX: 'foreshadow of',

    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    CAPS_LOCK: 'CapsLock',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' ',
    TAB: 'Tab',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',

    OVERVIEW_TOGGLE_KEY: 'b',
    ADMIN_TOGGLE_KEY: 'm',
    AUDIO_OPTIONS_TOGGLE_KEY: 'o',
    AUDIO_PLAY_KEY: 'p',
    AUDIO_PREVIOUS_SONG_KEY: 'j',
    AUDIO_NEXT_SONG_KEY: 'k',
    AUDIO_REWIND_KEY: 'r',
    AUDIO_FAST_FORWARD_KEY: 'f',
    CAROUSEL_TOGGLE_KEY: 'c',
    SCORE_TOGGLE_KEY: 's',
    TIPS_TOGGLE_KEY: 't',
    LYRIC_COLUMN_TOGGLE_KEY: 'e',
    LYRIC_SECTION_EXPAND_KEY: 'l',
    TITLE_SELECT_KEY: 'i',
    DOTS_SECTION_ACCESS_KEY: 'd',
    NAV_SECTION_ACCESS_KEY: 'n',

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
