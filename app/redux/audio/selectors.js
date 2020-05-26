export const QUEUED_PLAY_FROM_LOGUE_SELECTOR = (
    { audioStore: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const QUEUED_PLAY_SONG_INDEX_SELECTOR = (
    { audioStore: { queuedPlaySongIndex } }
) => queuedPlaySongIndex

export const QUEUED_PLAY_VERSE_INDEX_SELECTOR = (
    { audioStore: { queuedPlayVerseIndex } }
) => queuedPlayVerseIndex

export const IS_PLAYING_SELECTOR = (
    { audioStore: { isPlaying } }
) => isPlaying

export const QUEUED_TOGGLE_PLAY_SELECTOR = (
    { audioStore: { queuedTogglePlay } }
) => queuedTogglePlay
