import {
    FLIRTING,
    CARRYING,
    WAITING,
    GOPI,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { HEINEKEN__SHARED } from '../../../presences/sharedStyles/food'
import { DRUM_STAND__SHARED } from '../../../presences/sharedStyles/instruments'
import { SARI__SHARED } from '../../../presences/sharedStyles/wardrobe'

export default {
    [FLIRTING]: HEINEKEN__SHARED,
    [CARRYING]: DRUM_STAND__SHARED,
    [WAITING]: DRUM_STAND__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
