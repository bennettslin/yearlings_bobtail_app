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

// It's more semantically clear to say when carousel is *not* possible.
export const mapIsCarouselNotPossible = createSelector(
    mapIsLyricLogue,
    mapSelectedDotsBit,
    (
        isLyricLogue,
        selectedDotsBit,
    ) => isLyricLogue || selectedDotsBit === 0,
)

const getMapIsCarouselOrNavShowable = checkForNav => createSelector(
    mapIsCarouselNotPossible,
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsSliderTouched,
    (
        isCarouselNotPossible,
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricExpanded,
        isActivated,
        isSliderTouched,
    ) => getIsCarouselOrNavShowable({
        checkForNav,
        isCarouselNotPossible,
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

// Show carousel toggle when nav is showable but no annotation is selected.
export const mapIsCarouselToggleShowable = createSelector(
    mapIsNavShowable,
    mapIsAnnotationShown,
    (
        isNavShowable,
        isAnnotationShown,
    ) => isNavShowable && !isAnnotationShown,
)

export const mapCarouselNavIdentifier = createSelector(
    mapIsCarouselNotPossible,
    mapIsCarouselShown,
    mapIsNavExpanded,
    (
        isCarouselNotPossible,
        isCarouselShown,
        isNavExpanded,
    ) => getCarouselNavIdentifier({
        isCarouselNotPossible,
        isCarouselShown,
        isNavExpanded,
    }),
)
