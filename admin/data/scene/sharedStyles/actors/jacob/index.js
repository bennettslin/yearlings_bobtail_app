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
import { RAINBOW__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: [
        CYMBAL__SHARED,
        DRUMSTICK__SHARED,
        RAINBOW__SHARED,
    ],
    [CARRYING]: [
        DRUMS__SHARED,
        RAINBOW__SHARED,
    ],
    [EPILOGUE]: RAINBOW__SHARED,
}
