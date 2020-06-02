import {
    SHOWN,
    HIDDEN,
    DISABLED
} from '../constants/options'

export const getIsShown = option => option === SHOWN

export const getNextOption = ({
    isToggled,
    toggleShows,
    prevOption,
    nextOption
}) => {

    if (toggleShows) {
        return SHOWN

    // If custom overview option is passed, set it.
    } else if (nextOption) {
        return nextOption

    // Otherwise, rotate through options.
    } else {
        switch (prevOption) {
            case HIDDEN:
                return isToggled ? SHOWN : DISABLED
            case DISABLED:
                return SHOWN
            case SHOWN:
            default:
                return isToggled ? DISABLED : HIDDEN
        }
    }
}

const _getHasInitialToggleConditions = ({
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated
}) => (
    Boolean(lyricAnnotationIndex) ||
        isDotsSlideShown ||
        isOverlayShown ||
        isLyricExpanded ||
        isActivated
)

export const getToggleShowsOverviewImmediately = ({
    isTipsShown,
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated

}) => (
    // Toggle overview immediately under these conditions.
    isTipsShown || _getHasInitialToggleConditions({
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)

export const getToggleShowsTipsImmediately = ({
    isTipsShown,
    isOverviewShown,
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated

}) => (
    // Toggle tips immediately under these conditions.
    (!isTipsShown && isOverviewShown) || _getHasInitialToggleConditions({
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)
