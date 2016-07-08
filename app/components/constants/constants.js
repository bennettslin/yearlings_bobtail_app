module.exports = {

    storage: window.localStorage,

    sessionKeys: {
        PLAYED_SONG_INDEX_KEY: 'playedSongIndex',
        SELECTED_SONG_INDEX_KEY: 'selectedSongIndex',
        SELECTED_ANNOTATION_INDEX_KEY: 'selectedAnnotationIndex',
        SELECTED_OVERVIEW_INDEX_KEY: 'selectedOverviewIndex',
    },

    // Lyrics text will only ever be under these keys.
    textKeys: [
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

    lyricColumnKeyClassPairs: [
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
    allDotKeys: [
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

    overviewKeys: [
        'narrative',
        'music'
    ]
}