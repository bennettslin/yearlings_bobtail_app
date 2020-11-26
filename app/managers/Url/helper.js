import { getCharStringForNumber } from '../../helpers/format'

export const getPathForPitchPage = pitchSegmentIndex => (
    `/Pitch/page_${getCharStringForNumber(pitchSegmentIndex)}`
)
