import { getColumnIndexForAnnotation } from '../../endpoint/album/annotations'
import { getBookForSongIndex } from '../../endpoint/album/songs'
import {
    getBoolFromStorage,
    getStoredVolumeIndex,
} from '../../utils/storage'
import { IS_SONG_REPEAT_ON } from '../../constants/store'

const IS_STORED_SONG_REPEAT_ON = getBoolFromStorage(IS_SONG_REPEAT_ON)
const STORED_VOLUME_INDEX = getStoredVolumeIndex()

export const getSessionDefaults = ({
    initialSongIndex,
    initialAnnotationIndex,
    isPromoPage,

}) => ({
    // For resetting the tooltip.
    isCopiedUrl: false,

    ...!isPromoPage && {
        isSongRepeatOn: IS_STORED_SONG_REPEAT_ON,
        volumeIndex: STORED_VOLUME_INDEX,
        shownNavBookIndex: getBookForSongIndex(initialSongIndex),
        earColumnIndex: getColumnIndexForAnnotation(
            initialSongIndex,
            initialAnnotationIndex,
        ) || 0,
    },
})
