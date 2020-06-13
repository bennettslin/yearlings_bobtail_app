import { getOptionFromStorage } from '../../helpers/storage'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

const
    STORED_OVERVIEW_OPTION = getOptionFromStorage(SELECTED_OVERVIEW_OPTION),
    STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)

export const OPTION_DEFAULTS = {
    selectedOverviewOption: STORED_OVERVIEW_OPTION,
    selectedTipsOption: STORED_TIPS_OPTION,
    isForcedShownOverview: false,
    isSongShownOverview: false
}
