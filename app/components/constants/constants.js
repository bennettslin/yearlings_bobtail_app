module.exports = {

    sessionKeys: {
        PLAYED_SONG_INDEX: 'playedSongIndex',
        SELECTED_SONG_INDEX: 'selectedSongIndex',
        SELECTED_ANNOTATION_INDEX: 'selectedAnnotationIndex',
        SELECTED_OVERVIEW_INDEX: 'selectedOverviewIndex',
    },

    // Lyrics text will only ever be under these keys.
    textKeys: [
        'lyric', // Used for lyric word count.
        'italic',
        'emphasis',
        'anchor'
    ],

    // FIXME: Temporarily have description as first dot key.
    allDotKeys: [
        'description',
        'pun',
        'backstory',
        'narrative',
        'foreshadow',
        'music',
        'pulpit',
        'reference',
        'portal'
        // 'title'
        // 'afterword'
    ],

    overviewKeys: [
        'narrative',
        'music'
    ]
}