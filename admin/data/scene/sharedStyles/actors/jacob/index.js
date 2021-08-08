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
import { BOOK__SHARED } from '../../../../../../src/constants/scene/sharedStyles/paper'
import { RAINBOW__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: [
        CYMBAL__SHARED,
        DRUMSTICK__SHARED,
        BOOK__SHARED,
        RAINBOW__SHARED,
    ],
    [CARRYING]: [
        DRUMS__SHARED,
        BOOK__SHARED,
        RAINBOW__SHARED,
    ],
    [EPILOGUE]: [
        BOOK__SHARED,
        RAINBOW__SHARED,
    ],
}
