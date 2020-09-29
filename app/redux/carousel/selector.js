import { createSelector } from 'reselect'
import { getIsCarouselOrNavShowable } from '../../helpers/main'
import { mapIsActivated } from '../activated/selector'
import { mapSelectedDotsBit } from '../dots/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsTipsShown } from '../tips/selector'
import { mapIsLyricExpanded } from '../toggle/selector'

const getMapIsCarouselOrNavShowable = checkForNav => createSelector(
    mapIsLyricLogue,
    mapSelectedDotsBit,
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isLyricLogue,
        selectedDotsBit,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselOrNavShowable({
        checkForNav,
        isLyricLogue,
        selectedDotsBit,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated
    })
)

// Needed for right shelf.
export const mapIsCarouselAndNavShowable = getMapIsCarouselOrNavShowable()

// Needed for carousel toggle, carousel nav, and nav.
export const mapIsNavShowable = getMapIsCarouselOrNavShowable(true)

export const mapIsOnlyNavShowable = createSelector(
    mapIsCarouselAndNavShowable,
    mapIsNavShowable,
    (
        isCarouselNavShowable,
        isNavShowable
    ) => isNavShowable && !isCarouselNavShowable
)
