import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    BRUSH_OFF,
    CELIBATE_FREEZING,
    AWKWARD_CONSOLATION,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/bennettLiz'

import { HEINEKEN__SHARED } from '../../../sharedStyles/food'
import {
    DOBRO__SHARED,
    RECORDER__SHARED
} from '../../../sharedStyles/instruments'
import {
    BACKPACK__SHARED,
    BRACELET__SHARED,
    LIZ_PURSE__SHARED,
    MESSENGER_BAG__SHARED
} from '../../../sharedStyles/wardrobe'

export default {
    [GINGERBREAD_PRISON]: [
        BACKPACK__SHARED,
        MESSENGER_BAG__SHARED
    ],
    [CHEEK_UNVEILED]: LIZ_PURSE__SHARED,
    [HARD_ON]: null,
    [MISSIONARY]: null,
    [AFTERGLOW]: null,
    [BRUSH_OFF]: BRACELET__SHARED,
    [CELIBATE_FREEZING]: [
        HEINEKEN__SHARED,
        DOBRO__SHARED
    ],
    [AWKWARD_CONSOLATION]: BRACELET__SHARED,
    [PAMPAS]: RECORDER__SHARED,
    [GETTING_DARK]: null,
    [CLIFF]: null,
    [FINAL_DREAM]: null
}
