import { OPTION_STORE } from '../../constants/store'

export const mapIsLogueOverviewShown = (
    { [OPTION_STORE]: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const mapSelectedOverviewOption = (
    { [OPTION_STORE]: { selectedOverviewOption } }
) => selectedOverviewOption

export const mapSelectedTipsOption = (
    { [OPTION_STORE]: { selectedTipsOption } }
) => selectedTipsOption

export const mapIsForcedShownOverview = (
    { [OPTION_STORE]: { isForcedShownOverview } }
) => isForcedShownOverview

export const mapIsSongShownOverview = (
    { [OPTION_STORE]: { isSongShownOverview } }
) => isSongShownOverview

