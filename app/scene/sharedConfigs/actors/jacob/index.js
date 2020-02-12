import {
    FLIRTING,
    CARRYING,
    EPILOGUE
} from 'constants/scene/actors/songs'

import {
    CYMBAL__SHARED,
    DRUMS__SHARED,
    DRUMSTICK__SHARED,
    DRUM_STAND__SHARED
} from '../../../sharedStyles/instruments'

export default {
    [FLIRTING]: [
        CYMBAL__SHARED,
        DRUMSTICK__SHARED
    ],
    [CARRYING]: [
        DRUMS__SHARED,
        DRUM_STAND__SHARED
    ],
    [EPILOGUE]: null
}
