import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS,
} from '../../../../../../src/constants/scene/actors/khariLiz'
import { LIZ_PHONE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/household'
import { LIZ_PURSE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'
import {
    KHARI_FUTURE__SHARED,
    LIZ_FUTURE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/actors'

export default {
    [JOKING_LAUGHING]: [
        KHARI_FUTURE__SHARED,
        LIZ_FUTURE__SHARED,
    ],
    [PROTECTIVE_CONCERNED]: LIZ_PURSE__SHARED,
    [CARESS]: LIZ_PHONE__SHARED,
}
