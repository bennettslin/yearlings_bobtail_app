import {
    getOptionFromStorage,
    getInitialIndicesFromRoutingOrStorage
} from '../../helpers/storage'
import { getOverviewTipsForNewSong } from '../../helpers/options'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from '../../constants/store'
import { getSongIsLogue } from '../../api/album/songs'

const
    STORED_OVERVIEW_OPTION = getOptionFromStorage(SELECTED_OVERVIEW_OPTION),
    STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)

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
