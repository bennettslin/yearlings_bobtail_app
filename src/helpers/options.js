import {
    SHOWN,
    HIDDEN,
    DISABLED,
} from '../constants/options'

export const getIsShown = option => option === SHOWN

export const getNextOption = ({
    isFromToggle,
    isShownNext,
    prevOption,
    nextOption,

}) => {
    // Obviously, if next option is shown, return shown.
    if (isShownNext) {
        return SHOWN

    // If custom option is passed, return that.
    } else if (nextOption) {
        return nextOption

    /**
     * Otherwise, if from toggle, alternate between shown and disabled. If from
     * key, cycle through all options.
     */
    } else {
        switch (prevOption) {
            case HIDDEN:
                return isFromToggle ? SHOWN : DISABLED
            case DISABLED:
                return SHOWN
            case SHOWN:
            default:
                return isFromToggle ? DISABLED : HIDDEN
        }
    }
}

const _getHasInitialToggleConditions = ({
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated,
}) => (
    Boolean(lyricAnnotationIndex) ||
        isDotsSlideShown ||
        isOverlayShown ||
        isLyricExpanded ||
        isActivated
)

export const getIsOverviewShownNext = ({
    isTipsShown,
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated,

}) => (
    // Show overview immediately under these conditions.
    isTipsShown || _getHasInitialToggleConditions({
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated,
    })
)

export const getIsTipsShownNext = ({
    isTipsShown,
    isOverviewShown,
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    isActivated,

}) => (
    // Show tips immediately under these conditions.
    (!isTipsShown && isOverviewShown) || _getHasInitialToggleConditions({
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated,
    })
)

export const getOverviewTipsForNewSong = ({
    isSelectedLogue,
    initialAnnotationIndex,
    selectedOverviewOption,
    selectedTipsOption,

}) => ({
    selectedOverviewOption,
    selectedTipsOption,

    ...isSelectedLogue ? {
        // If shown, hide when now in logue.
        ...selectedOverviewOption === SHOWN && {
            selectedOverviewOption: HIDDEN,
        },
        ...selectedTipsOption === SHOWN && {
            selectedTipsOption: HIDDEN,
        },
    } : {
        /**
         * If just now hidden, show when now in new song.
         *
         * Unless there's an initial annotation index, in which case we'll keep
         * it hidden.
         */
        ...selectedOverviewOption === HIDDEN && !initialAnnotationIndex && {
            selectedOverviewOption: SHOWN,
        },
        ...selectedTipsOption === HIDDEN && !initialAnnotationIndex && {
            selectedTipsOption: SHOWN,
        },
    },
})
