export const getPromoDefaults = ({
    initialArtupIndex,
    initialParetoIndex,
    initialPromoPage = '',
}) => ({
    artupSlideIndex: initialArtupIndex,
    paretoSlideIndex: initialParetoIndex,
    selectedPromoKey: initialPromoPage,
})
