import { getOptionFromStorage } from '../../helpers/storage'
import { IS_INITIAL_LOGUE } from '../selected/default'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

const
    STORED_OVERVIEW_OPTION = getOptionFromStorage(SELECTED_OVERVIEW_OPTION),
    STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)

export const OPTION_DEFAULTS = {
    isLogueOverviewShown: IS_INITIAL_LOGUE,
    selectedOverviewOption: STORED_OVERVIEW_OPTION,
    selectedTipsOption: STORED_TIPS_OPTION,
    isForcedShownOverview: false,
    isSongShownOverview: false
}
