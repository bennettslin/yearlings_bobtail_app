import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'

export const IS_LOGUE_OVERVIEW_SHOWN_SELECTOR = (
    { optionStore: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const SELECTED_OVERVIEW_OPTION_SELECTOR = (
    { optionStore: { selectedOverviewOption } }
) => selectedOverviewOption

export const SELECTED_TIPS_OPTION_SELECTOR = (
    { optionStore: { selectedTipsOption } }
) => selectedTipsOption

export const IS_FORCED_SHOWN_OVERVIEW_SELECTOR = (
    { optionStore: { isForcedShownOverview } }
) => isForcedShownOverview

export const IS_SONG_SHOWN_OVERVIEW_SELECTOR = (
    { optionStore: { isSongShownOverview } }
) => isSongShownOverview

export const OVERVIEW_SHOWN_SELECTOR = createSelector(
    SELECTED_OVERVIEW_OPTION_SELECTOR,
    (
        selectedOverviewOption
    ) => getIsShown(selectedOverviewOption)
)

export const TIPS_SHOWN_SELECTOR = createSelector(
    SELECTED_TIPS_OPTION_SELECTOR,
    (
        selectedTipsOption
    ) => getIsShown(selectedTipsOption)
)
