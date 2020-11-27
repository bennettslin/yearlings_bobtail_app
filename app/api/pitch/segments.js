import { getPitch } from '../builds'
import { getArrayOfLength } from '../../helpers/general'

const {
    segments: SEGMENTS
} = getPitch()

export const getPitchSegmentsCount = () => SEGMENTS.length

export const getPitchSegmentForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex]
)

export const getPitchSegmentIndices = () => (
    getArrayOfLength(getPitchSegmentsCount())
)

export const getIsPitchSegmentValid = pitchSegmentIndex => (
    getPitchSegmentIndices().some(
        index => index === pitchSegmentIndex
    )
)

export const getValidPitchSegmentIndex = pitchSegmentIndex => (
    getIsPitchSegmentValid(pitchSegmentIndex) ? pitchSegmentIndex : 0
)

export const getNextPitchSegmentIndex = pitchSegmentIndex => (
    getPitchSegmentsCount() + pitchSegmentIndex
) % getPitchSegmentsCount()
