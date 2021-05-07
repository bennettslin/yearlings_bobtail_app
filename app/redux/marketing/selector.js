import { MARKETING_STORE } from '../../constants/store'

export const mapPitchSegmentIndex = (
    { [MARKETING_STORE]: { pitchSegmentIndex } },
) => pitchSegmentIndex

export const mapSelectedPromoPath = (
    { [MARKETING_STORE]: { selectedPromoPath } },
) => selectedPromoPath
