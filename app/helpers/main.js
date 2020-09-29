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
    isTipsShown
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
    isLyricExpanded
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
    isWikiShown

}) => {
    return (
        isAboutShown ||
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
    isLyricLogue,
    selectedDotsBit,
    isOverlayShown,
    isOverviewShown,
    isTipsShown,
    isLyricExpanded,
    isActivated
}) => (
    !isOverlayShown &&
    !isOverviewShown &&
    !isTipsShown &&
    !isLyricExpanded &&
    !isActivated &&
    (
        // If checking for carousel, cannot be in logue and must have dots.
        checkForNav || (
            !isLyricLogue && selectedDotsBit > 0
        )
    )
)
