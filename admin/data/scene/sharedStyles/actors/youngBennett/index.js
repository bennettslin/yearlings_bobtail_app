import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING,
} from '../../../../../../src/constants/scene/actors/youngBennett'
import { YOUNG_CHILD } from '../../../../../../src/constants/scene/actors/songs'
import { VIOLIN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/instruments'
import {
    BACKPACK__SHARED,
    YOUNG_BACKPACK__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/wardrobe'
import { PAST__SHARED } from '../../../../../../src/constants/scene/sharedStyles'

export default {
    [PANICKED]: [
        BACKPACK__SHARED,
        YOUNG_BACKPACK__SHARED,
    ],
    [FLUSTERED]: [
        BACKPACK__SHARED,
        YOUNG_BACKPACK__SHARED,
    ],
    [BATHING]: null,
    [SINGING]: [
        VIOLIN__SHARED,
        PAST__SHARED,
    ],
    [YOUNG_CHILD]: null,
}
