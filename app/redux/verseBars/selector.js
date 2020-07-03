import { createSelector } from 'reselect'
import { VERSE_BARS_STORE } from '../../constants/store'
import { mapScrollLyricVerseIndex } from '../scrollLyric/selector'

export const mapVerseBarsStatus = (
    { [VERSE_BARS_STORE]: { verseBarsStatus } }
) => verseBarsStatus

const mapIsVerseBarAbove = createSelector(
    mapVerseBarsStatus,
    mapScrollLyricVerseIndex,
    (
        verseBarsStatus,
        scrollLyricVerseIndex
    ) => scrollLyricVerseIndex === -1 && verseBarsStatus === 1
)

const mapIsVerseBarBelow = createSelector(
    mapVerseBarsStatus,
    mapScrollLyricVerseIndex,
    (
        verseBarsStatus,
        scrollLyricVerseIndex
    ) => scrollLyricVerseIndex === -1 && verseBarsStatus === -1
)

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
