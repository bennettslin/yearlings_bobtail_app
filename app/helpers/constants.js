// Constants used by all components.

const LYRIC = 'lyric',
    LEFT = 'left',
    CENTRE = 'centre',
    RIGHT = 'right',
    ITALIC = 'italic',
    EMPHASIS = 'emphasis',
    ANCHOR = 'anchor',

    PUN = 'pun',
    BACKSTORY = 'backstory',
    NARRATIVE = 'narrative',
    FORESHADOW = 'foreshadow',
    MUSIC = 'music',
    PULPIT = 'pulpit',
    REFERENCE = 'reference',
    PORTAL = 'portal',
    AFTERWORD = 'afterword',

    // These are class names.
    AUDIO_SECTION = 'audio-section',
    NAV_SECTION = 'nav-section',
    LYRICS_SECTION = 'lyrics-section',
    DOTS_SECTION = 'dots-section',
    ANNOTATION_SECTION = 'annotation-section',
    WIKI_SECTION = 'wiki-section',

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

    AUDIO_BLOCK_PADDING = 15,
    AUDIO_BUTTON_MARGIN = 3,
    AUDIO_OPTION_BUTTON_MARGIN = 8,
    AUDIO_BANNER_MIN_WIDTH = 225,
    AUDIO_CONSTANT = AUDIO_BANNER_MIN_WIDTH + 2 * AUDIO_BLOCK_PADDING + 3 * APP_ICON_DIAMETER + 2 * AUDIO_BUTTON_MARGIN + AUDIO_OPTION_BUTTON_MARGIN,

    DOTS_TIPS_PADDING = APP_THIN_MARGIN,
    DOTS_TIPS_MARGIN = 10,
    DOTS_TIPS_CONSTANT = 2 * DOTS_TIPS_PADDING + DOTS_TIPS_MARGIN,

    DOTS_TIPS_IN_MAIN_CONSTANT = TITLE_SUBFIELD_MIN_WIDTH + AUDIO_CONSTANT + DOTS_TIPS_CONSTANT,
    TITLE_IN_AUDIO_BREAKPOINT = AUDIO_CONSTANT + DOTS_TIPS_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + 3 * APP_MINI_LARGE_ICON_DIAMETER,

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
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        dotsTipsOutsideMenuBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + 3 * APP_MINI_LARGE_ICON_DIAMETER,
        titleInAudioBreakpoint: TITLE_IN_AUDIO_BREAKPOINT
    },
    TABLET_OBJECT = {
        className: TABLET_WIDTH,
        maxWidth: 1100,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        dotsTipsOutsideMenuBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_MARGIN + 3 * APP_TABLET_LARGE_ICON_DIAMETER
    },
    LAPTOP_OBJECT = {
        className: LAPTOP_WIDTH,
        maxWidth: 1400,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        dotsTipsOutsideMenuBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + UNCANNY_VALLEY_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    },
    MONITOR_OBJECT = {
        className: MONITOR_WIDTH,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        dotsTipsOutsideMenuBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_MARGIN + GOLDEN_CORD_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    }

module.exports = {

    WINDOW_STORAGE: window.localStorage,

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

    HEIGHTLESS_LYRIC_MAX: 450,
    MENU_HEIGHT,
    MENU_PHONE_HEIGHT,
    COLLAPSED_LYRIC_SECTION_HEIGHT,
    WIKI_SIDE_PADDING_TOTAL,

    LYRIC_VERSE_ELEMENT: 'verse_element',
    LYRIC_ANNOTATION_ELEMENT: 'annotation_element',

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

    NAV_SECTION,
    AUDIO_SECTION,
    LYRICS_SECTION,
    DOTS_SECTION,
    ANNOTATION_SECTION,
    WIKI_SECTION,
    SECTION_KEYS: [
        NAV_SECTION,
        AUDIO_SECTION,
        LYRICS_SECTION,
        DOTS_SECTION,
        ANNOTATION_SECTION,
        WIKI_SECTION
    ],

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
    ACCESSED_ON: 'accessedOn',
    ACCESSED_SECTION_INDEX: 'accessedSectionIndex',

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
    INSTRUMENTAL: 'instrumental',
    REFRAIN: 'refrain',
    VERSES: 'verses',
    PRECHORUS: 'prechorus',
    CHORUS: 'chorus',
    POSTCHORUS: 'postchorus',
    BRIDGE: 'bridge',
    CODA: 'coda',
    RHYME: 'rhyme',
    RESPONSE: 'response',
    BACKING: 'backing',

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
    FORESHADOW,
    MUSIC,
    PULPIT,
    REFERENCE,
    PORTAL,
    AFTERWORD,

    ALL_DOT_KEYS: [
        NARRATIVE, // My perspective in the story.
        BACKSTORY, // My perspective while making the album.
        PUN,
        // FORESHADOW,
        MUSIC,
        PULPIT,
        REFERENCE,
        PORTAL,
        AFTERWORD // My perspective while making this website.
    ],

    DOT_DESCRIPTIONS: {
        [NARRATIVE]: 'the story', // My perspective in the story.
        [BACKSTORY]: 'backstory description', // My perspective while making the album.
        [PUN]: 'Of both the "literary" and "bad" variety.',
        // [FORESHADOW]: 'foreshadow description',
        [MUSIC]: 'music description',
        [PULPIT]: 'pulpit description',
        [REFERENCE]: 'wiki description',
        [PORTAL]: 'portal description',
        [AFTERWORD]: 'after the album'
    },

    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' ',

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
