import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../../../src/constants/scene/actors/estherMother'
import {
    BENNETT,
    LIZ,
} from '../../../../../../src/constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/actors'
import { PROMISE_PHOTO__SHARED } from '../../../../../../src/constants/scene/sharedStyles/print'
import { GHOST__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [HURT_CONSOLING]: [
        PROMISE_PHOTO__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        LIZ,
        GHOST__SHARED,
    ],
    [SOBBING_SHIELDING]: GHOST__SHARED,
}
