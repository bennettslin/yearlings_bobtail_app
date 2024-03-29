import { createSelector } from 'reselect'
import { getShowTipForDevice } from '../../endpoint/album/tips'
import { getIsShown } from '../../helpers/options'
import {
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth,
} from '../device/selector'
import { mapIsSongChangeDone } from '../entrance/selector'
import {
    mapLyricSongIndex,
    mapIsLyricLogue,
} from '../lyric/selector'
import { mapSelectedTipsOption } from '../option/selector'

export const mapCanTipsShowForDevice = createSelector(
    mapLyricSongIndex,
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth,
    ) => getShowTipForDevice({
        songIndex: lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth,
    }),
)

export const mapIsTipsShown = createSelector(
    mapSelectedTipsOption,
    mapCanTipsShowForDevice,
    (
        selectedTipsOption,
        canTipsShowForDevice,
    ) => (
        getIsShown(selectedTipsOption) &&
        canTipsShowForDevice
    ),
)

export const mapIsTipsPopupVisible = createSelector(
    mapIsSongChangeDone,
    mapIsLyricLogue,
    mapIsTipsShown,
    (
        isSongChangeDone,
        isLyricLogue,
        isTipsShown,
    ) => (
        isSongChangeDone &&
        !isLyricLogue &&
        isTipsShown
    ),
)
