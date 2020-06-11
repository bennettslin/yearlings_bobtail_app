import { createSelector } from "reselect"
import { mapIsLyricExpanded } from "../toggle/selectors"
import { mapIsHeightlessLyric } from "../viewport/selectors"

export const mapQueuedFocus = (
    { focusStore: { queuedFocus } }
) => queuedFocus

export const mapShouldFocusLyric = createSelector(
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isHeightlessLyric,
        isLyricExpanded
    ) => !isHeightlessLyric || isLyricExpanded
)
