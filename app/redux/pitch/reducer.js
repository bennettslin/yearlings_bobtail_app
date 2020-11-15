// Reducers for pitch.
import { setInStorage } from '../../helpers/storage'
import { getNextPitchSegmentIndex } from '../../api/pitch/segments'
import {
    PITCH_STORE,
    PITCH_SEGMENT_INDEX
} from '../../constants/store'
import { PITCH_DEFAULTS } from './default'

export default (
    state = PITCH_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case PITCH_STORE: {
            const
                {
                    decrementedPitchSegmentIndex,
                    incrementedPitchSegmentIndex,
                    resetPitchSegmentIndex
                } = payload,
                { pitchSegmentIndex: prevPitchSegmentIndex } = state

            let direction = 0
            if (decrementedPitchSegmentIndex) {
                direction = -1
            } else if (incrementedPitchSegmentIndex) {
                direction = 1
            }

            const pitchSegmentIndex = getNextPitchSegmentIndex(
                resetPitchSegmentIndex ?
                    0 :
                    prevPitchSegmentIndex + direction
            )

            setInStorage(PITCH_SEGMENT_INDEX, pitchSegmentIndex)

            return {
                pitchSegmentIndex
            }
        }
        default:
            return state
    }
}
