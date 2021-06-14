export const getPromoDefaults = ({
    initialArtupIndex,
    initialArtup2Index,
    initialPromoPage = '',
}) => ({
    artupSlideIndex: initialArtupIndex,
    artup2SlideIndex: initialArtup2Index,
    selectedPromoKey: initialPromoPage,
})
