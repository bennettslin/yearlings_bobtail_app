import {
    IS_INITIAL_LOGUE,
    STORED_OVERVIEW_OPTION,
    STORED_TIPS_OPTION
} from '../../constants/storage'

export const OPTION_DEFAULTS = {
    isLogueOverviewShown: IS_INITIAL_LOGUE,
    selectedOverviewOption: STORED_OVERVIEW_OPTION,
    selectedTipsOption: STORED_TIPS_OPTION,
    isForcedShownOverview: false,
    isSongShownOverview: false,
    isSongShownTips: false
}
