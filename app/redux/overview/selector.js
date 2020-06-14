import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'
import {
    getIsToggleInOverview,
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from '../../helpers/overview'
import { mapCanLyricCarouselEnter } from '../entrance/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapIsPhoneWidth } from '../device/selector'
import { mapSelectedOverviewOption } from '../option/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsTipsShown } from '../tips/selector'
import { mapIsHeightlessLyric } from '../viewport/selector'

export const mapIsOverviewShown = createSelector(
    mapSelectedOverviewOption,
    selectedOverviewOption => getIsShown(selectedOverviewOption)
)

export const mapIsToggleInOverview = createSelector(
    mapIsPhoneWidth,
    mapIsHeightlessLyric,
    mapIsLyricLogue,
    (
        isPhoneWidth,
        isHeightlessLyric,
        isLyricLogue
    ) => getIsToggleInOverview({
        isPhoneWidth,
        isHeightlessLyric,
        isLyricLogue
    })
)

export const getMapIsOverviewPopupShown = inMain => createSelector(
    mapCanLyricCarouselEnter,
    mapIsLyricLogue,
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    (
        canLyricCarouselEnter,
        isLyricLogue,
        isOverlayShown,
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
            isOverviewShown,
            isTipsShown
        })
    )
)
