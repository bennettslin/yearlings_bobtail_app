export const VERSE_BARS_POSITION_DEFAULTS = {
    isVerseBarAbove: false,
    isVerseBarBelow: false
}

export const VERSE_BARS_QUEUE_DEFAULTS = {
    queuedDetermineVerseBars: false,
    queuedVerseBarsTimeout: 0
}

export const VERSE_BARS_DEFAULTS = {
    ...VERSE_BARS_POSITION_DEFAULTS,
    ...VERSE_BARS_QUEUE_DEFAULTS
}
