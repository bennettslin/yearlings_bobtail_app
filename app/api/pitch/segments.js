import { getPitch } from '../builds'
import { getArrayOfLength } from '../../helpers/general'

const {
    segments: SEGMENTS
} = getPitch()

export const getPitchSegmentsCount = () => SEGMENTS.length

export const getPitchSegmentIndices = () => (
    getArrayOfLength(getPitchSegmentsCount(), 1)
)

export const getIsPitchSegmentValid = pitchSegmentIndex => (
    getPitchSegmentIndices().some(
        index => index === pitchSegmentIndex
    )
)

export const getValidPitchSegmentIndex = pitchSegmentIndex => (
    getIsPitchSegmentValid(pitchSegmentIndex) ? pitchSegmentIndex : 1
)

export const getNextPitchSegmentIndex = pitchSegmentIndex => (
    getPitchSegmentsCount() + pitchSegmentIndex
) % getPitchSegmentsCount()

export const getPathForPitchSegment = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex - 1].path
)

export const getPitchImageKeyForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex - 1].imageKey
)

export const getPitchTextForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex - 1].text
)

export const getPitchFootnoteForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex - 1].footnote
)

export const getPitchTitleForIndex = pitchSegmentIndex => (
    SEGMENTS[pitchSegmentIndex - 1].title
)
