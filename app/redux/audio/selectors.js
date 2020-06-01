export const mapQueuedPlayFromLogue = (
    { audioStore: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const mapQueuedPlaySongIndex = (
    { audioStore: { queuedPlaySongIndex } }
) => queuedPlaySongIndex

export const mapQueuedPlayVerseIndex = (
    { audioStore: { queuedPlayVerseIndex } }
) => queuedPlayVerseIndex

export const mapIsPlaying = (
    { audioStore: { isPlaying } }
) => isPlaying

export const mapQueuedTogglePlay = (
    { audioStore: { queuedTogglePlay } }
) => queuedTogglePlay
