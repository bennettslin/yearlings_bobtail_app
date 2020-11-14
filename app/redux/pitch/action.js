// Actions for pitch.
import { PITCH_STORE } from '../../constants/store'

export const decrementPitchIndex = () => ({
    type: PITCH_STORE,
    payload: { decrementedPitchIndex: true }
})

export const incrementPitchIndex = () => ({
    type: PITCH_STORE,
    payload: { incrementedPitchIndex: true }
})

export const resetPitchIndex = () => ({
    type: PITCH_STORE,
    payload: { resetPitchIndex: true }
})
