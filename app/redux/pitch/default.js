import { getInitialPitchIndexFromRoutingOrStorage } from '../../helpers/storage'

export const PITCH_DEFAULTS = {
    pitchSegmentIndex: getInitialPitchIndexFromRoutingOrStorage(),
}
