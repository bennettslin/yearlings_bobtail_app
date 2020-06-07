import { getSongIsLogue } from '../../api/album/songs'
import { getOptionFromStorage } from '../../helpers/storage'
import { INITIAL_SONG_INDEX } from '../selected/default'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'

const
    STORED_OVERVIEW_OPTION = getOptionFromStorage(SELECTED_OVERVIEW_OPTION),
    STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)

export const OPTION_DEFAULTS = {
    isLogueOverviewShown: getSongIsLogue(INITIAL_SONG_INDEX),
    selectedOverviewOption: STORED_OVERVIEW_OPTION,
    selectedTipsOption: STORED_TIPS_OPTION,
    isForcedShownOverview: false,
    isSongShownOverview: false
}
