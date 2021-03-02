// Reducers for pitch.
import { PITCH_STORE } from '../../constants/store'
import { getPitchDefaults } from './default'

export const getPitchReducer = initialPitchIndex => (
    state = getPitchDefaults(initialPitchIndex),
    { type, payload },
) => {
    switch (type) {
        case PITCH_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
