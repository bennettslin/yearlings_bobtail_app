import { createSelector } from 'reselect'
import { mapIsLyricExpanded } from '../toggle/selector'
import { mapIsHeightlessLyric } from '../viewport/selector'
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
