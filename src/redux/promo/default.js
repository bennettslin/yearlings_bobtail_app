import { ARTUP_SUBPATH, PARETO_SUBPATH } from '../../constants/routing'
export const SET_PITCH_SLIDE_INDEX = 'setPitchSlideIndex'

export const getPromoDefaults = ({
    initialArtupIndex,
    initialParetoIndex,
    initialPromoPage = '',
}) => ({
    selectedPromoKey: initialPromoPage,
    pitchSlideIndices: {
        [ARTUP_SUBPATH]: initialArtupIndex,
        [PARETO_SUBPATH]: initialParetoIndex,
    },
})
