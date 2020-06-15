import { createSelector } from 'reselect'
import { VERSE_BARS_STORE } from '../../constants/store'

export const mapIsVerseBarAbove = (
    { [VERSE_BARS_STORE]: { isVerseBarAbove } }
) => isVerseBarAbove

export const mapIsVerseBarBelow = (
    { [VERSE_BARS_STORE]: { isVerseBarBelow } }
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

export const mapIsEitherVerseBarShown = createSelector(
    mapIsVerseBarAbove,
    mapIsVerseBarBelow,
    (
        isVerseBarAbove,
        isVerseBarBelow
    ) => isVerseBarAbove || isVerseBarBelow
)

export const mapQueuedDetermineVerseBars = (
    { [VERSE_BARS_STORE]: { queuedDetermineVerseBars } }
) => queuedDetermineVerseBars

export const mapQueuedVerseBarsTimeout = (
    { [VERSE_BARS_STORE]: { queuedVerseBarsTimeout } }
) => queuedVerseBarsTimeout
