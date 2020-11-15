import { getPitch } from '../builds'

const {
    segments: SEGMENTS
} = getPitch()

export const getPitchSegmentsCount = () => SEGMENTS.length

export const getPitchSegmentForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex]
)
