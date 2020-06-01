import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'

export const mapIsLogueOverviewShown = (
    { optionStore: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const mapSelectedOverviewOption = (
    { optionStore: { selectedOverviewOption } }
) => selectedOverviewOption

export const mapSelectedTipsOption = (
    { optionStore: { selectedTipsOption } }
) => selectedTipsOption

export const mapIsForcedShownOverview = (
    { optionStore: { isForcedShownOverview } }
) => isForcedShownOverview

export const mapIsSongShownOverview = (
    { optionStore: { isSongShownOverview } }
) => isSongShownOverview

export const mapIsOverviewShown = createSelector(
    mapSelectedOverviewOption,
    (
        selectedOverviewOption
    ) => getIsShown(selectedOverviewOption)
)

export const mapIsTipsShown = createSelector(
    mapSelectedTipsOption,
    (
        selectedTipsOption
    ) => getIsShown(selectedTipsOption)
)
