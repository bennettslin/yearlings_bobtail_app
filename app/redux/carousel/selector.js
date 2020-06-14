import { createSelector } from 'reselect'
import { getIsCarouselNavShowable } from '../../helpers/main'
import { mapIsActivated } from '../activated/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import { mapIsLyricExpanded } from '../toggle/selector'

export const mapIsCarouselNavShowable = createSelector(
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricLogue,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselNavShowable({
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    })
)
