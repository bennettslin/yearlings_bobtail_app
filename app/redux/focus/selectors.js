import { createSelector } from "reselect"
import { mapIsHeightlessLyric } from "../responsive/selectors"
import { mapIsLyricExpanded } from "../toggle/selectors"

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
