import {
    ASLEEP_REACHING,
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../../../../constants/scene/actors/liz'
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
    EL_TORITO
} from '../../../../../constants/scene/actors/songs'
import { BENNETT } from '../../../../../constants/scene/actors'
import { OPAL__SHARED } from '../../../shared/animals'
import { CHINESE_TAKEOUT__SHARED } from '../../../shared/food'
import { LIZ_LINENS__SHARED } from '../../../shared/furniture'
import {
    BACKPACK__SHARED,
    GO_KART__SHARED
} from '../../../shared/wardrobe'

export default {
    [DATE_ENDING]: null,
    [MUSEUM]: null,
    [BACKSTAGE]: null,
    [GO_KARTS]: GO_KART__SHARED,
    [DATE_ENDED]: null,
    [DISHROOM_LANCET]: null,
    [GATE_CODE]: BACKPACK__SHARED,
    [RUMPLED_LINENS]: BACKPACK__SHARED,
    [ASLEEP_REACHING]: LIZ_LINENS__SHARED,
    [LEAVING_CRUMBLED]: null,
    [PETTING_SEATED]: OPAL__SHARED,
    [PETTING_STANDING]: OPAL__SHARED,
    [SIFTING_TCHOTCHKES]: BENNETT,
    [OPENING_DOOR]: null,
    [DEFENDING]: CHINESE_TAKEOUT__SHARED,
    [NOT_HUNGRY]: CHINESE_TAKEOUT__SHARED,
    [ASLEEP_COUCH]: LIZ_LINENS__SHARED,
    [EL_TORITO]: null
}
