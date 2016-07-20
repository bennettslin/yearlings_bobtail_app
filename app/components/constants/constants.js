module.exports = {

    // Redux.
    SELECT_WIKI_URL: 'selectWikiUrl',

    STORAGE: window.localStorage,

    PLAYED_SONG_INDEX_KEY: 'playedSongIndex',
    ACTIVE_SONG_INDEX_KEY: 'activeSongIndex',
    ACTIVE_ANNOTATION_INDEX_KEY: 'activeAnnotationIndex',
    ACTIVE_OVERVIEW_INDEX_KEY: 'activeOverviewIndex',
    DEFAULT_OVERVIEW_INDEX: 1,

    // Lyrics text will only ever be under these keys.
    TEXT_KEYS: [
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

    // FIXME: Temporarily have description as first dot key.
    ALL_DOT_KEYS: [
        'description',
        'pun',
        'backstory', // My perspective while making the album.
        'narrative', // My perspective in the story.
        'foreshadow',
        'music',
        'pulpit',
        'reference',
        'portal'
        // 'title'
        // 'afterword' // My perspective while making this website.
    ],

    OVERVIEW_KEYS: [
        'narrative',
        'music'
    ]
}
