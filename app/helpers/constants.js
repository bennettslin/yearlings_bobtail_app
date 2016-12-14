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
    WIKI = 'wiki',
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

    /************************
     * DEVICE WIDTH OBJECTS *
     ************************/

    // Device widths.
    // TODO: Make sure these maxWidths are right.
    // Final TODO: Get rid of unused breakpoints.

    // maxWidth values should be the same in live.less. (Only used by admin.)
    PHONE_WIDTH_OBJECT = {
        className: 'phone-width',
        maxWidth: 475
    },
    MINI_WIDTH_OBJECT = {
        className: 'mini-width',
        maxWidth: 720,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_MINI_LARGE_ICON_DIAMETER,
        dotsTipsInMainBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + 3 * APP_MINI_LARGE_ICON_DIAMETER,
        titleInAudioBreakpoint: TITLE_IN_AUDIO_BREAKPOINT
    },
    TABLET_WIDTH_OBJECT = {
        className: 'tablet-width',
        maxWidth: 1100,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + APP_TABLET_LARGE_ICON_DIAMETER,
        dotsTipsInMainBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_MARGIN + 3 * APP_TABLET_LARGE_ICON_DIAMETER
    },
    LAPTOP_WIDTH_OBJECT = {
        className: 'laptop-width',
        maxWidth: 1400,
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + UNCANNY_VALLEY_WIDTH + APP_LARGE_ICON_DIAMETER,
        dotsTipsInMainBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_NARROW_MARGIN + UNCANNY_VALLEY_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    },
    MONITOR_WIDTH_OBJECT = {
        className: 'monitor-width',
        doubleColumnStaticBreakpoint: DOUBLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        doubleColumnShrinkBreakpoint: DOUBLE_COLUMN_SHRINK_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        singleColumnStaticBreakpoint: SINGLE_COLUMN_STATIC_BREAKPOINT + NAV_LAST_TITLE_MARGIN + GOLDEN_CORD_WIDTH + APP_LARGE_ICON_DIAMETER,
        dotsTipsInMainBreakpoint: DOTS_TIPS_IN_MAIN_CONSTANT + 2 * MENU_SUBFIELD_MARGIN + GOLDEN_CORD_WIDTH + 3 * APP_LARGE_ICON_DIAMETER
    }

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    PHONE_WIDTH_OBJECT,
    MINI_WIDTH_OBJECT,
    TABLET_WIDTH_OBJECT,
    LAPTOP_WIDTH_OBJECT,
    MONITOR_WIDTH_OBJECT,

    // Used for admin purposes.
    DEVICE_WIDTH_OBJECTS: [
        PHONE_WIDTH_OBJECT,
        MINI_WIDTH_OBJECT,
        TABLET_WIDTH_OBJECT,
        LAPTOP_WIDTH_OBJECT,
        MONITOR_WIDTH_OBJECT,
    ],

    HEIGHTLESS_LYRIC_MAX: 450,

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
    REFRAIN: 'refrain',
    VERSES: 'verses',
    PRECHORUS: 'prechorus',
    CHORUS: 'chorus',
    POSTCHORUS: 'postchorus',
    BRIDGE: 'bridge',
    OUTRO: 'outro',
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

    WIKI,

    ALL_DOT_KEYS: [
        PUN,
        BACKSTORY, // My perspective while making the album.
        NARRATIVE, // My perspective in the story.
        FORESHADOW,
        MUSIC,
        PULPIT,
        WIKI,
        PORTAL,
        AFTERWORD // My perspective while making this website.
    ],

    DOT_DESCRIPTIONS: {
        [PUN]: 'pun',
        [BACKSTORY]: 'backstory description', // My perspective while making the album.
        [NARRATIVE]: 'narrative really description', // My perspective in the story.
        [FORESHADOW]: 'foreshadow description',
        [MUSIC]: 'music description',
        [PULPIT]: 'pulpit description',
        [WIKI]: 'wiki description',
        [PORTAL]: 'portal description',
        [AFTERWORD]: 'afterword description'
    },

    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' '
}
