import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../../../../../app/constants/scene/actors/youngBennett'
import { YOUNG_CHILD } from '../../../../../../app/constants/scene/actors/songs'
import { VIOLIN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    BOOK__SHARED,
    MAGAZINE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/paper'
import {
    BACKPACK__SHARED,
    YOUNG_BACKPACK__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [PANICKED]: [
        BACKPACK__SHARED,
        YOUNG_BACKPACK__SHARED,
        BOOK__SHARED,
        MAGAZINE__SHARED
    ],
    [FLUSTERED]: [
        BACKPACK__SHARED,
        YOUNG_BACKPACK__SHARED
    ],
    [BATHING]: null,
    [SINGING]: VIOLIN__SHARED,
    [YOUNG_CHILD]: null
}
