import { getOptionFromStorage } from '../../helpers/storage'
import { getOverviewTipsForNewSong } from '../../helpers/options'
import { INITIAL_IS_SELECTED_LOGUE } from '../selected/default'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

const
    STORED_OVERVIEW_OPTION = getOptionFromStorage(SELECTED_OVERVIEW_OPTION),
    STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)

export const OPTION_DEFAULTS = {
    ...getOverviewTipsForNewSong({
        isSelectedLogue: INITIAL_IS_SELECTED_LOGUE,
        selectedOverviewOption: STORED_OVERVIEW_OPTION,
        selectedTipsOption: STORED_TIPS_OPTION
    }),
    isForcedShownOverview: false,
    isSongShownOverview: false
}
