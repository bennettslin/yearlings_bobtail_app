import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import { DRUMS__SHARED } from '../../../../../../src/constants/scene/sharedStyles/instruments'
import { SARI__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: DRUMS__SHARED,
    [WAITING]: DRUMS__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null,
}
