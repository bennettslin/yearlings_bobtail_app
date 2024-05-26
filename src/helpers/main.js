export const getIsShelfLeftShown = ({
    isPhoneWidth,
    isDotsSlideShown,
    isLyricExpanded,
    isActivated,
    isOverlayShown,
    isSongChangeDone,
    lyricAnnotationIndex,
    isLyricLogue,
    isOverviewShown,
    isTipsShown,
}) => {

    // If toggle is in overview, hide when...
    if (
        // In song and is phone.
        (isOverviewShown && !isLyricLogue && isPhoneWidth) ||

        // In logue.
        isLyricLogue
    ) {
        return false
    }

    // Otherwise, determine based on these factors.
    return (
        isSongChangeDone &&
        !isDotsSlideShown &&
        !isLyricExpanded &&
        !isOverlayShown &&
        !lyricAnnotationIndex &&
        !isTipsShown &&
        !isActivated
    )
}

export const getIsOverlayingAnnotation = ({
    isPhoneWidth,
    isLyricExpanded,
}) => {
    return (
        // Annotation is always in overlay if lyric is expanded...
        isLyricExpanded ||

        // Or if we are in phone.
        isPhoneWidth
    )
}

export const getIsOverlayShown = ({
    isOverlayingAnnotation,
    lyricAnnotationIndex,
    isScoreShown,
    isAboutShown,
    isPromoShown,
    isWikiShown,

}) => {
    return (
        isAboutShown ||
        isPromoShown ||
        isScoreShown ||
        isWikiShown ||
        (
            Boolean(lyricAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}

export const getIsCarouselOrNavShowable = ({
    checkForNav,
    isCarouselNotShowable,
    isOverlayShown,
    isOverviewShown,
    isTipsShown,
    isLyricExpanded,
    isActivated,
    isSliderTouched,
}) => (
    (
        // If checking for carousel, cannot be in logue and must have dots.
        checkForNav || !isCarouselNotShowable
    ) &&
    !isOverlayShown &&
    !isOverviewShown &&
    !isTipsShown &&
    !isLyricExpanded &&
    !isActivated &&
    !isSliderTouched
)
