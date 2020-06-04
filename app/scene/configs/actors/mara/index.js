import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../presences/shared/food'
import { DRUM_STAND__SHARED } from '../../../presences/shared/instruments'
import { SARI__SHARED } from '../../../presences/shared/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: DRUM_STAND__SHARED,
    [WAITING]: DRUM_STAND__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
