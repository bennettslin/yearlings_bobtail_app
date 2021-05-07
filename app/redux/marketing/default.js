export const getMarketingDefaults = ({
    initialPitchIndex,
    initialPromoPage = '',
}) => ({
    pitchSegmentIndex: initialPitchIndex,
    selectedPromoPath: initialPromoPage,
})
