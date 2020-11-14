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
                    decrementedPitchIndex,
                    incrementedPitchIndex,
                    resetPitchIndex
                } = payload,
                { pitchIndex: prevPitchIndex } = state

            let pitchIndex = 0

            if (decrementedPitchIndex) {
                pitchIndex = prevPitchIndex - 1
            } else if (incrementedPitchIndex) {
                pitchIndex = prevPitchIndex + 1
            } else if (resetPitchIndex) {
                pitchIndex = 0
            }

            setInStorage(PITCH_INDEX, pitchIndex)

            return {
                pitchIndex
            }
        }
        default:
            return state
    }
}
