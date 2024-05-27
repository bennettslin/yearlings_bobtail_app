import { getOptionFromStorage } from '../../utils/storage'
import { getOverviewTipsForNewSong } from '../../helpers/options'
import {
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION,
} from '../../constants/store'
import { getSongIsLogue } from '../../endpoint/album/songs'

export const getOptionDefaults = ({
    initialSongIndex,
    initialAnnotationIndex,

}) => getOverviewTipsForNewSong({
    isSelectedLogue: getSongIsLogue(initialSongIndex),
    initialAnnotationIndex,
    selectedOverviewOption: getOptionFromStorage({
        key: SELECTED_OVERVIEW_OPTION,
        initialAnnotationIndex,
    }),
    selectedTipsOption: getOptionFromStorage({
        key: SELECTED_TIPS_OPTION,
        initialAnnotationIndex,
    }),
})
