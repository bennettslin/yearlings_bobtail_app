// Actions for pitch.
import { PITCH_STORE } from '../../constants/store'

export const decrementPitchSegmentIndex = () => ({
    type: PITCH_STORE,
    payload: { decrementedPitchSegmentIndex: true }
})

export const incrementPitchSegmentIndex = () => ({
    type: PITCH_STORE,
    payload: { incrementedPitchSegmentIndex: true }
})

export const resetPitchSegmentIndex = () => ({
    type: PITCH_STORE,
    payload: { resetPitchSegmentIndex: true }
})
