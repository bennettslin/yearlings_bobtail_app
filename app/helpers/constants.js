// Constants used by all components.

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    ACTIVE_SONG_INDEX: 'activeSongIndex',
    ACTIVE_ANNOTATION_INDEX: 'activeAnnotationIndex',
    ACTIVE_DOT_KEYS: 'activeDotKeys',
    ACTIVE_OVERVIEW_INDEX: 'activeOverviewIndex',
    ACTIVE_WIKI_URL: 'activeWikiUrl',

    /**
     * If there is one side stanza, it defaults to top. If there are two, one
     * is the top, other is the bottom.
     */
    BOTTOM_ONLY_SIDE_STANZA: 'bottomOnlySideStanza',

    DEFAULT_OVERVIEW_INDEX: 1,

    // This is only used by the stats helper.
    STAT_TEXT_KEYS: [
        'italic',
        'emphasis',
        'anchor'
    ],

    /**
     * Lyrics text will only ever be under these keys. Includes both lyric keys
     * and general keys.
     */
    LYRIC_TEXT_KEYS: [
        'lyric',

        // Doublespeaker left.
        'leftLyric',

        // Doublespeaker centre.
        'centreLyric',

        // Doublespeaker right.
        'rightLyric',
        'italic',
        'emphasis',
        'anchor'
    ],

    LEFT_LYRIC: 'left',
    CENTRE_LYRIC: 'centre',
    RIGHT_LYRIC: 'right',
    OVERLAP: 'overlap',

    // FIXME: Match keys with classNames. And add overlap to constants.
    LYRIC_COLUMN_CLASSES: [
        {
            key: 'leftLyric',
            className: 'left'
        },
        {
            key: 'centreLyric',
            className: 'centre'
        },
        {
            key: 'rightLyric',
            className: 'right'
        },
    ],

    ALL_DOT_KEYS: [
        'pun',
        'backstory', // My perspective while making the album.
        'narrative', // My perspective in the story.
        'foreshadow',
        'music',
        'pulpit',
        'wiki',
        'portal',
        'title'
        // 'afterword' // My perspective while making this website.
    ],

    OVERVIEW_KEYS: [
        'narrative',
        'music'
    ]
}
