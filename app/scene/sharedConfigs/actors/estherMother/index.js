import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from 'constants/scene/actors/estherMother'

import {
    BENNETT,
    LIZ
} from '../../../../constants/scene/actors'

import { ALL_PEOPLE__SHARED } from '../../../sharedStyles/people'
import { PROMISE_PHOTO__SHARED } from '../../../sharedStyles/print'
import { GHOST__SHARED } from '../../../sharedStyles/wardrobe'

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

export const ESTHER_MOTHER_WIRE = {
    [HURT_CONSOLING]: 2,
    [SOBBING_SHIELDING]: 2
}
