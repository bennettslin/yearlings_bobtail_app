export const getIsShelfLeftShown = ({
    isPhoneWidth,
    isDotsSlideShown,
    isLyricExpanded,
    interactivatedVerseIndex,
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
        interactivatedVerseIndex < 0
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

export const getToggleShowsImmediately = ({
    lyricAnnotationIndex,
    isDotsSlideShown,
    isOverlayShown,
    isLyricExpanded,
    interactivatedVerseIndex,
    overviewShown,
    tipsShown
}) => {
    const
        initialToggleConditions =
            Boolean(lyricAnnotationIndex) ||
            isDotsSlideShown ||
            isOverlayShown ||
            isLyricExpanded ||
            interactivatedVerseIndex > -1,

        // Toggle overview immediately under these conditions.
        toggleShowsOverviewImmediately =
            tipsShown || initialToggleConditions,

        // Toggle tips immediately under these conditions.
        toggleShowsTipsImmediately =
            (!tipsShown && overviewShown) || initialToggleConditions

    return {
        toggleShowsOverviewImmediately,
        toggleShowsTipsImmediately
    }
}
