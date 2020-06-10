import { createSelector } from 'reselect'
import { getShowTipForDevice } from '../../api/album/tips'
import { getIsShown } from '../../helpers/options'
import {
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from '../../helpers/overview'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import {
    mapIsLyricLogue,
    mapLyricSongIndex
} from '../lyric/selectors'
import { mapIsOverlayShown } from '../transient/selectors'
import {
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../viewport/selectors'

export const mapIsLogueOverviewShown = (
    { optionStore: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const mapSelectedOverviewOption = (
    { optionStore: { selectedOverviewOption } }
) => selectedOverviewOption

export const mapSelectedTipsOption = (
    { optionStore: { selectedTipsOption } }
) => selectedTipsOption

export const mapIsForcedShownOverview = (
    { optionStore: { isForcedShownOverview } }
) => isForcedShownOverview

export const mapIsSongShownOverview = (
    { optionStore: { isSongShownOverview } }
) => isSongShownOverview

export const mapIsOverviewShown = createSelector(
    mapSelectedOverviewOption,
    selectedOverviewOption => getIsShown(selectedOverviewOption)
)

export const mapIsTipsShown = createSelector(
    mapSelectedTipsOption,
    selectedTipsOption => getIsShown(selectedTipsOption)
)

export const getMapIsOverviewPopupShown = inMain => createSelector(
    mapCanLyricCarouselEnter,
    mapIsLyricLogue,
    mapIsOverlayShown,
    mapIsLogueOverviewShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    (
        canLyricCarouselEnter,
        isLyricLogue,
        isOverlayShown,
        isLogueOverviewShown,
        isOverviewShown,
        isTipsShown
    ) => (
        canLyricCarouselEnter &&
        getIsOverviewVisibleBySection({
            inMain,
            isLyricLogue
        }) &&
        getIsOverviewVisibleBySong({
            isLyricLogue,
            isOverlayShown,
            isLogueOverviewShown,
            isOverviewShown,
            isTipsShown
        })
    )
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
