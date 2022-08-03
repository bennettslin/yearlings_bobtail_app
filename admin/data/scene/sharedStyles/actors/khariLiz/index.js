import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS,
} from '../../../../../../src/constants/scene/actors/khariLiz'
import { FUTURE__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { LIZ_PHONE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/household'
import { LIZ_PURSE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [JOKING_LAUGHING]: FUTURE__SHARED,
    [PROTECTIVE_CONCERNED]: LIZ_PURSE__SHARED,
    [CARESS]: LIZ_PHONE__SHARED,
}
