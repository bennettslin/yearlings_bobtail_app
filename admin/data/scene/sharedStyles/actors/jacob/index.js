import {
    FLIRTING,
    CARRYING,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import {
    CYMBAL__SHARED,
    DRUMS__SHARED,
    DRUMSTICK__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/instruments'

export default {
    [FLIRTING]: [
        CYMBAL__SHARED,
        DRUMSTICK__SHARED,
    ],
    [CARRYING]: DRUMS__SHARED,
    [EPILOGUE]: null,
}
