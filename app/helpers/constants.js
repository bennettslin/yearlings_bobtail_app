// Constants used by all components.

module.exports = {

    WINDOW_STORAGE: window.localStorage,

    SONG_INDEX: 'songIndex',
    ANNOTATION_INDEX: 'annotationIndex',
    OVERVIEW_INDEX: 'overviewIndex',
    WIKI_URL: 'wikiUrl',

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
        'leftLyric',
        'centreLeftLyric',
        'centreLyric',
        'centreRightLyric',
        'rightLyric',
        'italic',
        'emphasis',
        'anchor'
    ],

    LYRIC_COLUMN_CLASSES: [
        {
            key: 'leftLyric',
            className: 'far left'
        },
        {
            key: 'centreLeftLyric',
            className: 'centre left'
        },
        {
            key: 'centreLyric',
            className: 'exact centre'
        },
        {
            key: 'centreRightLyric',
            className: 'centre right'
        },
        {
            key: 'rightLyric',
            className: 'far right'
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
