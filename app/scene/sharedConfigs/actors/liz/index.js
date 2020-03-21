import {
    ASLEEP_REACHING,
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from 'constants/scene/actors/liz'

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
} from 'constants/scene/actors/songs'

import { BENNETT } from 'constants/scene/actors'
import { OPAL__SHARED } from '../../../sharedStyles/animals'
import { CHINESE_TAKEOUT__SHARED } from '../../../sharedStyles/food'
import { LIZ_LINENS__SHARED } from '../../../sharedStyles/furniture'
import { GO_KART__SHARED } from '../../../sharedStyles/wardrobe'

export default {
    [DATE_ENDING]: null,
    [MUSEUM]: null,
    [BACKSTAGE]: null,
    [GO_KARTS]: GO_KART__SHARED,
    [DATE_ENDED]: null,
    [DISHROOM_LANCET]: null,
    [GATE_CODE]: null,
    [RUMPLED_LINENS]: null,
    [ASLEEP_REACHING]: null,
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
