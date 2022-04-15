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
    FINAL_DREAM,
} from '../../../../../../src/constants/scene/actors/bennettLiz'
import { DARKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { HEINEKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import {
    CYMBAL__SHARED,
    DOBRO__SHARED,
    RECORDER__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/instruments'
import {
    BACKPACK__SHARED,
    BRACELET__SHARED,
    LIZ_CONDOM__SHARED,
    LIZ_PURSE__SHARED,
    MESSENGER_BAG__SHARED,
    SARI__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [GINGERBREAD_PRISON]: [
        BACKPACK__SHARED,
        MESSENGER_BAG__SHARED,
    ],
    [CHEEK_UNVEILED]: LIZ_PURSE__SHARED,
    [HARD_ON]: LIZ_CONDOM__SHARED,
    [MISSIONARY]: null,
    [AFTERGLOW]: DARKEN__SHARED,
    [BRUSH_OFF]: BRACELET__SHARED,
    [CELIBATE_FREEZING]: [
        HEINEKEN__SHARED,
        DOBRO__SHARED,
    ],
    [AWKWARD_CONSOLATION]: BRACELET__SHARED,
    [PAMPAS]: [
        CYMBAL__SHARED,
        RECORDER__SHARED,
        SARI__SHARED,
    ],
    [GETTING_DARK]: null,
    [CLIFF]: null,
    [FINAL_DREAM]: null,
}
