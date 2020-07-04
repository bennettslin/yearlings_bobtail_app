import { createSelector } from 'reselect'
import { VERSE_BARS_STORE } from '../../constants/store'

export const mapVerseBarsStatus = (
    { [VERSE_BARS_STORE]: { verseBarsStatus } }
) => verseBarsStatus

export const getMapIsVerseBarShown = isAbove => createSelector(
    mapVerseBarsStatus,
    verseBarsStatus => verseBarsStatus === (isAbove ? 1 : -1)
)

export const mapIsEitherVerseBarShown = createSelector(
    mapVerseBarsStatus,
    verseBarsStatus => verseBarsStatus !== 0
)

export const mapQueuedDetermineVerseBars = (
    { [VERSE_BARS_STORE]: { queuedDetermineVerseBars } }
) => queuedDetermineVerseBars

export const mapQueuedVerseBarsTimeout = (
    { [VERSE_BARS_STORE]: { queuedVerseBarsTimeout } }
) => queuedVerseBarsTimeout
