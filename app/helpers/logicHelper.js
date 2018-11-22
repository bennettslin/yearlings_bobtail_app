// General file for calculating stuff.
// TODO: Break into smaller files.

export const getShouldSkipHiddenStatus = ({

    isLyricExpanded,
    isDotsSlideShown,
    selectedAnnotationIndex,
    isCarouselShown,
    selectedOverviewIndex,
    selectedTipsIndex,
    isScoreShown,
    isTitleShown,
    selectedWikiIndex,

    calledByOverview = false,
    calledByTips = false

}) => (
    Boolean(

        isLyricExpanded ||
        isDotsSlideShown ||
        isScoreShown ||
        isTitleShown ||
        selectedWikiIndex ||

        (!isCarouselShown && selectedAnnotationIndex) ||

        (calledByOverview && !selectedTipsIndex) ||

        /**
         * Since overview can technically still be shown while tips is actually
         * being shown, check that tips is not shown.
         */
        (calledByTips && selectedTipsIndex && !selectedOverviewIndex)
    )
)
