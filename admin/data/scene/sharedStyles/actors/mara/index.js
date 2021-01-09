import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE,
} from '../../../../../../app/constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/food'
import { DRUMS__SHARED } from '../../../../../../app/constants/scene/sharedStyles/instruments'
import { SARI__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: DRUMS__SHARED,
    [WAITING]: DRUMS__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null,
}
