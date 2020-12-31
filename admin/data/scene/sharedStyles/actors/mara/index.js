import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE,
} from '../../../../../../app/constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/food'
import { DRUMS__SHARED } from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    BRASS__SHARED,
    CHROME__SHARED,
    STEEL__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/material'
import { SARI__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: [
        CHROME__SHARED,
        DRUMS__SHARED,
        STEEL__SHARED,
    ],
    [WAITING]: [
        BRASS__SHARED,
        CHROME__SHARED,
        DRUMS__SHARED,
        STEEL__SHARED,
    ],
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null,
}
