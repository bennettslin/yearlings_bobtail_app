import { createSelector } from 'reselect'
import { getShowTipForDevice } from '../../api/album/tips'
import { getIsShown } from '../../helpers/options'
import {
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../device/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import {
    mapLyricSongIndex,
    mapIsLyricLogue
} from '../lyric/selectors'
import { mapSelectedTipsOption } from '../option/selectors'

export const mapIsTipsShown = createSelector(
    mapSelectedTipsOption,
    selectedTipsOption => getIsShown(selectedTipsOption)
)

export const mapIsTipsPopupShown = createSelector(
    mapCanLyricCarouselEnter,
    mapLyricSongIndex,
    mapIsLyricLogue,
    mapIsTipsShown,
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        canLyricCarouselEnter,
        lyricSongIndex,
        isLyricLogue,
        isTipsShown,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    ) => (
        canLyricCarouselEnter &&
        !isLyricLogue &&
        isTipsShown &&

        // Ensure this song's tip can be shown for this viewport width.
        getShowTipForDevice({
            songIndex: lyricSongIndex,
            isPhoneWidth,
            isTabletWidth,
            isDesktopWidth
        })
    )
)

export const mapIsTipsShowable = createSelector(
    mapLyricSongIndex,
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    ) => getShowTipForDevice({
        songIndex: lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    })
)
