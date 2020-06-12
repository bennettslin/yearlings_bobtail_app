import { createSelector } from 'reselect'
import { getIsShown, getToggleShowsOverviewImmediately } from '../../helpers/options'
import {
    getIsToggleInOverview,
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from '../../helpers/overview'
import { mapIsActivated } from '../activated/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import {
    mapIsLyricLogue,
    mapLyricAnnotationIndex
} from '../lyric/selectors'
import { mapIsPhoneWidth } from '../device/selectors'
import {
    mapSelectedOverviewOption,
    mapIsLogueOverviewShown,
    mapIsTipsShown
} from '../option/selectors'
import { mapIsOverlayShown } from '../overlay/selectors'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../toggle/selectors'
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

export const mapToggleShowsOverviewImmediately = createSelector(
    mapIsTipsShown,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsOverlayShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsOverviewImmediately({
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)
