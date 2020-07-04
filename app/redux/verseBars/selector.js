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
