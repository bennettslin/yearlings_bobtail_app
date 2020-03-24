import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from '../../../../../constants/scene/actors/estherMother'

import {
    BENNETT,
    LIZ
} from '../../../../../constants/scene/actors'

import { ALL_PEOPLE__SHARED } from '../../../shared/people'
import { PROMISE_PHOTO__SHARED } from '../../../shared/print'
import { GHOST__SHARED } from '../../../shared/wardrobe'

export default {
    [HURT_CONSOLING]: [
        PROMISE_PHOTO__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        LIZ,
        GHOST__SHARED
    ],
    [SOBBING_SHIELDING]: GHOST__SHARED
}
