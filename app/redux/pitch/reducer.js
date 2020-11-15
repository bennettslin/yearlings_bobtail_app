// Reducers for pitch.
import { PITCH_INDEX, PITCH_STORE } from '../../constants/store'
import { PITCH_DEFAULTS } from './default'
import { setInStorage } from '../../helpers/storage'

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

            let pitchSegmentIndex = 0

            if (decrementedPitchSegmentIndex) {
                pitchSegmentIndex = prevPitchSegmentIndex - 1
            } else if (incrementedPitchSegmentIndex) {
                pitchSegmentIndex = prevPitchSegmentIndex + 1
            } else if (resetPitchSegmentIndex) {
                pitchSegmentIndex = 0
            }

            setInStorage(PITCH_INDEX, pitchSegmentIndex)

            return {
                pitchSegmentIndex
            }
        }
        default:
            return state
    }
}
