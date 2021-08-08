export const getIsAccessedIndexedAnchorShown = ({
    isAccessOn,
    isDotsSlideShown,
    isNavExpanded,
    isLyricExpanded,
    lyricAnnotationIndex,
    isActivated,

}) => (
    Boolean(
        isAccessOn &&
        !isDotsSlideShown &&
        !isActivated &&
        (
            !isNavExpanded ||
            isLyricExpanded ||
            lyricAnnotationIndex
        ),
    )
)
