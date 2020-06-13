import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'
import {
    getIsToggleInOverview,
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from '../../helpers/overview'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import { mapIsLyricLogue } from '../lyric/selectors'
import { mapIsPhoneWidth } from '../device/selectors'
import { mapSelectedOverviewOption } from '../option/selectors'
import { mapIsOverlayShown } from '../overlay/selectors'
import { mapIsTipsShown } from '../tips/selectors'
import { mapIsHeightlessLyric } from '../viewport/selectors'

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
