import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../../../../constants/scene/actors/youngBennett'
import { YOUNG_CHILD } from '../../../../../constants/scene/actors/songs'
import { VIOLIN__SHARED } from '../../../shared/instruments'
import {
    BOOK__SHARED,
    MAGAZINE__SHARED
} from '../../../shared/paper'
import {
    BACKPACK__SHARED,
    YOUNG_BACKPACK__SHARED
} from '../../../shared/wardrobe'

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
