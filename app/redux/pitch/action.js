// Actions for pitch.
import { setInStorage } from '../../helpers/storage'
import {
    PITCH_SEGMENT_INDEX,
    PITCH_STORE,
} from '../../constants/store'

export const setPitchSegmentIndex = (pitchSegmentIndex = 0) => {

    setInStorage(PITCH_SEGMENT_INDEX, pitchSegmentIndex)

    return {
        type: PITCH_STORE,
        payload: { pitchSegmentIndex },
    }
}
