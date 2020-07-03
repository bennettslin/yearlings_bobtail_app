import { createSelector } from 'reselect'
import { getFinalVerseBarsStatus } from '../../helpers/queuedScroll'
import { VERSE_BARS_STORE } from '../../constants/store'
import { mapQueuedScrollVerseIndex } from '../scrollLyric/selector'

/**
 * I'm not happy about having a raw and final value, but this allows the UI not
 * to show the verse bars when there is a queued scroll verse index, without
 * forcing a store update.
 */
const mapRawVerseBarsStatus = (
    { [VERSE_BARS_STORE]: { verseBarsStatus: rawVerseBarsStatus } }
) => rawVerseBarsStatus

export const mapVerseBarsStatus = createSelector(
    mapRawVerseBarsStatus,
    mapQueuedScrollVerseIndex,
    (
        rawVerseBarsStatus,
        queuedScrollVerseIndex
    ) => getFinalVerseBarsStatus({
        rawVerseBarsStatus,
        queuedScrollVerseIndex
    })
)

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
