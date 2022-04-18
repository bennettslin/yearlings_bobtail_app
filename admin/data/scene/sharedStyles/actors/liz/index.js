import {
    ASLEEP_REACHING,
    PETTING_SEATED,
    PETTING_SEATED_PRESENT,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH,
} from '../../../../../../src/constants/scene/actors/liz'
import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS,
    LEAVING_CRUMBLED,
    EL_TORITO,
} from '../../../../../../src/constants/scene/actors/songs'
import { BENNETT } from '../../../../../../src/constants/scene/actors'
import { DARK_ROOM_EXTRA__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { OPAL__SHARED } from '../../../../../../src/constants/scene/sharedStyles/animals'
import { CHINESE_TAKEOUT__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import { LIZ_LINENS__SHARED } from '../../../../../../src/constants/scene/sharedStyles/furniture'
import { GO_KART__SHARED } from '../../../../../../src/constants/scene/sharedStyles/vehicles'
import { BACKPACK__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [DATE_ENDING]: null,
    [MUSEUM]: null,
    [BACKSTAGE]: null,
    [GO_KARTS]: GO_KART__SHARED,
    [DATE_ENDED]: null,
    [DISHROOM_LANCET]: null,
    [GATE_CODE]: BACKPACK__SHARED,
    [RUMPLED_LINENS]: BACKPACK__SHARED,
    [ASLEEP_REACHING]: [
        DARK_ROOM_EXTRA__SHARED,
        LIZ_LINENS__SHARED,
    ],
    [LEAVING_CRUMBLED]: null,
    [PETTING_SEATED]: OPAL__SHARED,
    [PETTING_SEATED_PRESENT]: [
        OPAL__SHARED,
    ],
    [PETTING_STANDING]: OPAL__SHARED,
    [SIFTING_TCHOTCHKES]: BENNETT,
    [OPENING_DOOR]: null,
    [DEFENDING]: CHINESE_TAKEOUT__SHARED,
    [NOT_HUNGRY]: CHINESE_TAKEOUT__SHARED,
    [ASLEEP_COUCH]: [
        DARK_ROOM_EXTRA__SHARED,
        LIZ_LINENS__SHARED,
    ],
    [EL_TORITO]: null,
}
