import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS
} from '../../../../../constants/scene/actors/khariLiz'
import { LIZ_PHONE__SHARED } from '../../../shared/household'
import { LIZ_PURSE__SHARED } from '../../../shared/wardrobe'

export default {
    [JOKING_LAUGHING]: null,
    [PROTECTIVE_CONCERNED]: LIZ_PURSE__SHARED,
    [CARESS]: LIZ_PHONE__SHARED
}
