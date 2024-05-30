import { createSelector } from 'reselect'
import { getCarouselNavIdentifier } from '../../constants/options'
import { getIsCarouselOrNavShowable } from '../../helpers/main'
import { mapIsActivated } from '../activated/selector'
import { mapSelectedDotsBit } from '../dots/selector'
import { mapIsLyricLogue } from '../lyric/selector'
import { mapIsOverlayShown } from '../overlay/selector'
import { mapIsOverviewShown } from '../overview/selector'
import { mapIsSliderTouched } from '../slider/selector'
import { mapIsTipsShown } from '../tips/selector'
import {
    mapIsCarouselShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
} from '../toggle/selector'
import { mapIsAnnotationShown } from '../selected/selector'

// It's more semantically clear to say when carousel is *not* showable.
export const mapIsCarouselNotShowable = createSelector(
    mapIsLyricLogue,
    mapSelectedDotsBit,
    (
        isLyricLogue,
        selectedDotsBit,
    ) => isLyricLogue || selectedDotsBit === 0,
)

const getMapIsCarouselOrNavShowable = checkForNav => createSelector(
    mapIsCarouselNotShowable,
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsSliderTouched,
    (
        isCarouselNotShowable,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated,
        isSliderTouched,
    ) => getIsCarouselOrNavShowable({
        checkForNav,
        isCarouselNotShowable,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated,
        isSliderTouched,
    }),
)

// Needed for right shelf.
export const mapIsCarouselAndNavShowable = getMapIsCarouselOrNavShowable()

// Needed for carousel and nav.
export const mapIsNavShowable = getMapIsCarouselOrNavShowable(true)

// Only show carousel toggle when nav is showable but no annotation is selected.
export const mapIsCarouselToggleShowable = createSelector(
    mapIsNavShowable,
    mapIsAnnotationShown,
    (
        isNavShowable,
        isAnnotationShown,
    ) => isNavShowable && !isAnnotationShown,
)

export const mapIsOnlyNavShowable = createSelector(
    mapIsCarouselAndNavShowable,
    mapIsNavShowable,
    (
        isCarouselNavShowable,
        isNavShowable,
    ) => isNavShowable && !isCarouselNavShowable,
)

export const mapCarouselNavIdentifier = createSelector(
    mapIsCarouselNotShowable,
    mapIsCarouselShown,
    mapIsNavExpanded,
    (
        isCarouselNotShowable,
        isCarouselShown,
        isNavExpanded,
    ) => getCarouselNavIdentifier({
        isCarouselNotShowable,
        isCarouselShown,
        isNavExpanded,
    }),
)
