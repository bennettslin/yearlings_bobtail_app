import { createSelector } from 'reselect'
import { getIsCarouselOrNavShowable } from '../../helpers/main'
import { mapIsActivated } from '../activated/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import { mapIsLyricExpanded } from '../toggle/selector'

const getMapIsCarouselOrNavShowable = isCarouselNav => createSelector(
    mapIsLyricLogue,
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isLyricLogue,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselOrNavShowable({
        isCarouselNav,
        isLyricLogue,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated
    })
)

export const mapIsCarouselNavShowable = getMapIsCarouselOrNavShowable()
export const mapIsNavShowable = getMapIsCarouselOrNavShowable(true)
