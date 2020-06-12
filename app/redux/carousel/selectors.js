import { createSelector } from 'reselect'
import { getIsCarouselNavShowable } from '../../helpers/main'
import { mapIsActivated } from '../activated/selectors'
import { mapIsLyricLogue } from '../lyric/selectors'
import { mapIsOverlayShown } from '../overlay/selectors'
import { mapIsOverviewShown } from '../overview/selectors'
import { mapIsTipsShown } from '../tips/selectors'
import { mapIsLyricExpanded } from '../toggle/selectors'

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
