import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import { mapIsLyricLogue } from '../lyric/selectors'
import { mapIsOverlayShown } from '../transient/selectors'
import {
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from '../../components/Popups/Overview/helper'

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
