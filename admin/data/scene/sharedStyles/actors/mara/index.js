import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from '../../../../../../app/constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/food'
import { DRUM_STAND__SHARED } from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    BRASS__SHARED,
    STEEL__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/material'
import { SARI__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: [
        DRUM_STAND__SHARED,
        STEEL__SHARED
    ],
    [WAITING]: [
        BRASS__SHARED,
        DRUM_STAND__SHARED,
        STEEL__SHARED
    ],
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
