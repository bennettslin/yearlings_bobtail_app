export const QUEUED_AUDIO_DEFAULTS = {
    queuedPlayFromLogue: false,
    queuedSongIndex: -1
}

export const AUDIO_DEFAULTS = {
    isPlaying: false,
    queuedTogglePlay: false,
    ...QUEUED_AUDIO_DEFAULTS
}
