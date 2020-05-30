export const IS_VERSE_BAR_ABOVE_SELECTOR = (
    { verseBarsStore: { isVerseBarAbove } }
) => isVerseBarAbove

export const IS_VERSE_BAR_BELOW_SELECTOR = (
    { verseBarsStore: { isVerseBarBelow } }
) => isVerseBarBelow

export const QUEUED_DETERMINE_VERSE_BARS_SELECTOR = (
    { verseBarsStore: { queuedDetermineVerseBars } }
) => queuedDetermineVerseBars

export const QUEUED_VERSE_BARS_TIMEOUT_SELECTOR = (
    { verseBarsStore: { queuedVerseBarsTimeout } }
) => queuedVerseBarsTimeout
