import {
    getOptionFromStorage,
    getInitialIndicesFromRoutingOrStorage
} from '../../helpers/storage'
import { getOverviewTipsForNewSong } from '../../helpers/options'
import { INITIAL_IS_SELECTED_LOGUE } from '../selected/default'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'
import { getSongIsLogue } from '../../api/album/songs'

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

/** */

export const getOptionDefaults = songIndex => {
    const {
        initialSongIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        ...getOverviewTipsForNewSong({
            isSelectedLogue: getSongIsLogue(initialSongIndex),
            selectedOverviewOption: STORED_OVERVIEW_OPTION,
            selectedTipsOption: STORED_TIPS_OPTION
        }),
        isForcedShownOverview: false,
        isSongShownOverview: false
    }
}
