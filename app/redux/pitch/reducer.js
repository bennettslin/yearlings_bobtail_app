// Reducers for pitch.
import { hasKey } from '../../helpers/action'
import { PITCH_STORE } from '../../constants/store'
import { PITCH_DEFAULTS } from './default'

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
                { pitchIndex } = state
            return {
                ...hasKey(decrementedPitchIndex) && {
                    pitchIndex: pitchIndex - 1
                },
                ...hasKey(incrementedPitchIndex) && {
                    pitchIndex: pitchIndex + 1
                },
                ...hasKey(resetPitchIndex) && {
                    pitchIndex: 0
                }
            }
        }
        default:
            return state
    }
}
