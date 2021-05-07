// Actions for pitch.
import { setInStorage } from '../../utils/storage'
import {
    PITCH_SEGMENT_INDEX,
    MARKETING_STORE,
} from '../../constants/store'

export const setPitchSegmentIndex = (pitchSegmentIndex = 0) => {
    setInStorage(PITCH_SEGMENT_INDEX, pitchSegmentIndex)

    return {
        type: MARKETING_STORE,
        payload: { pitchSegmentIndex },
    }
}

export const setSelectedPromoPath = (selectedPromoPath = '') => ({
    type: MARKETING_STORE,
    payload: { selectedPromoPath },
})
