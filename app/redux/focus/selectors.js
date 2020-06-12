import { createSelector } from 'reselect'
import { mapIsLyricExpanded } from '../toggle/selectors'
import { mapIsHeightlessLyric } from '../viewport/selectors'
import { FOCUS_STORE } from '../../constants/store'

export const mapQueuedFocus = (
    { [FOCUS_STORE]: { queuedFocus } }
) => queuedFocus

export const mapShouldFocusLyric = createSelector(
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isHeightlessLyric,
        isLyricExpanded
    ) => !isHeightlessLyric || isLyricExpanded
)
