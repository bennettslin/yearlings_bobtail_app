import { createSelector } from "reselect"

export const mapIsVerseBarAbove = (
    { verseBarsStore: { isVerseBarAbove } }
) => isVerseBarAbove

export const mapIsVerseBarBelow = (
    { verseBarsStore: { isVerseBarBelow } }
) => isVerseBarBelow

export const getMapIsVerseBarShown = isAbove => createSelector(
    mapIsVerseBarAbove,
    mapIsVerseBarBelow,
    (
        isVerseBarAbove,
        isVerseBarBelow
    ) => (
        isAbove &&
        isVerseBarAbove
    ) || (
        !isAbove &&
        isVerseBarBelow
    )
)

export const mapQueuedDetermineVerseBars = (
    { verseBarsStore: { queuedDetermineVerseBars } }
) => queuedDetermineVerseBars

export const mapQueuedVerseBarsTimeout = (
    { verseBarsStore: { queuedVerseBarsTimeout } }
) => queuedVerseBarsTimeout
