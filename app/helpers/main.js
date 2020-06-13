export const getIsShelfLeftShown = ({
    isPhoneWidth,
    isDotsSlideShown,
    isLyricExpanded,
    isActivated,
    isOverlayShown,
    canLyricCarouselEnter,
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
        canLyricCarouselEnter &&
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

export const getIsCarouselNavShowable = ({
    isOverlayShown,
    isOverviewShown,
    isTipsShown,
    isLyricLogue,
    isLyricExpanded,
    isActivated
}) => (
    !isOverlayShown &&
    !isOverviewShown &&
    !isTipsShown &&
    !isLyricLogue &&
    !isLyricExpanded &&
    !isActivated
)
