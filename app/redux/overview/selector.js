import { createSelector } from 'reselect'
import { getIsShown } from '../../helpers/options'
import {
    getIsToggleInOverview,
    getIsOverviewPopupVisible,
} from '../../helpers/overview'
import { mapIsPhoneWidth } from '../device/selector'
import { mapIsSongChangeDone } from '../entrance/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapSelectedOverviewOption } from '../option/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsTipsShown } from '../tips/selector'
import { mapIsHeightlessLyric } from '../viewport/selector'

export const mapIsOverviewShown = createSelector(
    mapSelectedOverviewOption,
    mapIsTipsShown,
    (
        selectedOverviewOption,
        isTipsShown
    ) => (
        getIsShown(selectedOverviewOption) &&
        !isTipsShown
    )
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
        isLyricLogue,
    })
)

export const getMapIsOverviewPopupVisible = inMain => createSelector(
    mapIsSongChangeDone,
    mapIsLyricLogue,
    mapIsOverlayShown,
    mapIsOverviewShown,
    (
        isSongChangeDone,
        isLyricLogue,
        isOverlayShown,
        isOverviewShown
    ) => getIsOverviewPopupVisible({
        inMain,
        isSongChangeDone,
        isLyricLogue,
        isOverlayShown,
        isOverviewShown,
    })
)
