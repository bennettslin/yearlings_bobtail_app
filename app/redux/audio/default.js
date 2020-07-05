export const QUEUED_AUDIO_DEFAULTS = {
    queuedPlayFromLogue: false,
    queuedPromisePlay: false
}

export const AUDIO_DEFAULTS = {
    isPlaying: false,
    queuedTogglePlay: false,
    ...QUEUED_AUDIO_DEFAULTS
}
