export const getIsAccessedIndexedAnchorShown = ({
    isAccessOn,
    isDotsSlideShown,
    isNavShown,
    isLyricExpanded,
    lyricAnnotationIndex,
    isActivated

}) => (
    Boolean(
        isAccessOn &&
        !isDotsSlideShown &&
        !isActivated &&
        (
            !isNavShown ||
            isLyricExpanded ||
            lyricAnnotationIndex
        )
    )
)
