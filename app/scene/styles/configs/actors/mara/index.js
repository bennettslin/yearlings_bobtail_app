import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../shared/food'
import { DRUM_STAND__SHARED } from '../../../shared/instruments'
import { SARI__SHARED } from '../../../shared/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: DRUM_STAND__SHARED,
    [WAITING]: DRUM_STAND__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
