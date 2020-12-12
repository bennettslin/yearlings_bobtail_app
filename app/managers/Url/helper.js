import { getPitchPathForIndex } from '../../api/pitch/segments'

export const getPathForPitchPage = pitchSegmentIndex => (
    `/Pitch/${pitchSegmentIndex}-${getPitchPathForIndex(pitchSegmentIndex)}`
)
