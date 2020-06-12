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
import { OPTION_STORE } from '../../constants/store'

export const mapIsLogueOverviewShown = (
    { [OPTION_STORE]: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const mapSelectedOverviewOption = (
    { [OPTION_STORE]: { selectedOverviewOption } }
) => selectedOverviewOption

export const mapSelectedTipsOption = (
    { [OPTION_STORE]: { selectedTipsOption } }
) => selectedTipsOption

export const mapIsForcedShownOverview = (
    { [OPTION_STORE]: { isForcedShownOverview } }
) => isForcedShownOverview

export const mapIsSongShownOverview = (
    { [OPTION_STORE]: { isSongShownOverview } }
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
