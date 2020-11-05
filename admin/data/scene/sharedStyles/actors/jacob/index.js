import {
    FLIRTING,
    CARRYING,
    EPILOGUE
} from '../../../../../../app/constants/scene/actors/songs'
import {
    CYMBAL__SHARED,
    DRUMS__SHARED,
    DRUMSTICK__SHARED,
    DRUM_STAND__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/instruments'
import { BOOK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'
import { RAINBOW__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: [
        CYMBAL__SHARED,
        DRUMSTICK__SHARED,
        BOOK__SHARED,
        RAINBOW__SHARED
    ],
    [CARRYING]: [
        DRUMS__SHARED,
        DRUM_STAND__SHARED,
        BOOK__SHARED,
        RAINBOW__SHARED
    ],
    [EPILOGUE]: [
        BOOK__SHARED,
        RAINBOW__SHARED
    ]
}
