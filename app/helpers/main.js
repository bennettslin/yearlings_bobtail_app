export const getIsShelfLeftShown = ({
    isPhoneWidth,
    isDotsSlideShown,
    isLyricExpanded,
    isActivated,
    isOverlayShown,
    canLyricCarouselEnter,
    lyricAnnotationIndex,
    isLyricLogue,
    isLogueOverviewShown,
    overviewShown,
    tipsShown
}) => {

    // If toggle is in overview, hide when...
    if (
        // In song and is phone.
        (overviewShown && !isLyricLogue && isPhoneWidth) ||

        // In logue and logue overview is shown.
        (isLogueOverviewShown && isLyricLogue)
    ) {
        return false
    }

    // Otherwise, determine based on these factors.
    return (
        canLyricCarouselEnter &&
        !isDotsSlideShown &&
        !isLyricExpanded &&
        !isOverlayShown &&
        !lyricAnnotationIndex &&
        !tipsShown &&
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
    selectedWikiIndex

}) => {
    return (
        isAboutShown ||
        isScoreShown ||
        Boolean(selectedWikiIndex) ||
        (
            Boolean(lyricAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}

export const getIsCarouselNavShowable = ({
    isOverlayShown,
    overviewShown,
    tipsShown,
    isLyricLogue,
    isLyricExpanded,
    isActivated
}) => (
    !isOverlayShown &&
    !overviewShown &&
    !tipsShown &&
    !isLyricLogue &&
    !isLyricExpanded &&
    !isActivated
)
