// General file for calculating stuff.
// TODO: Break into smaller files.

export const getShouldSkipHiddenStatus = ({

    isLyricExpanded,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedOverviewIndex,
    selectedScoreIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex,

    calledByOverview = false,
    calledByTips = false

}) => (
    Boolean(

        isLyricExpanded ||
        selectedDotsIndex ||
        selectedScoreIndex ||
        selectedTitleIndex ||
        selectedWikiIndex ||

        (!selectedCarouselNavIndex && selectedAnnotationIndex) ||

        (calledByOverview && !selectedTipsIndex) ||

        /**
         * Since overview can technically still be shown while tips is actually
         * being shown, check that tips is not shown.
         */
        (calledByTips && selectedTipsIndex && !selectedOverviewIndex)
    )
)
