import {
    JOGGER,
    INJURED
} from '../../../../constants/scene/actors/nestor'
import {
    GREETING,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { DRUMSTICK__SHARED } from '../../../presences/shared/instruments'

export default {
    [INJURED]: null,
    [GREETING]: DRUMSTICK__SHARED,
    [EPILOGUE]: null,
    [JOGGER]: null
}
