import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    PANICKED,
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR,
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from 'constants/scene/actors/preteenBennett'

import { PRETEEN_LINENS__SHARED } from '../../../sharedStyles/furniture'
import { ASLEEP } from 'constants/scene/actors/songs'
import {
    BOOK__SHARED,
    MAGAZINE__SHARED
} from '../../../sharedStyles/paper'

export default {
    [CAUTIOUS]: null,
    [ENRAGED]: MAGAZINE__SHARED,
    [FEARFUL]: PRETEEN_LINENS__SHARED,
    [PANICKED]: BOOK__SHARED,
    [MAT]: null,
    [STAIRS]: null,
    [GATE]: null,
    [RICKSHAW]: null,
    [SHORE]: null,
    [BUOY]: null,
    [OCEAN_FLOOR]: null,
    [FEIGNING_SICK]: null,
    [ASLEEP]: null,
    [SHAKEN]: null,
    [STOIC]: null,
    [WISTFUL]: null,
    [SHEEPISH]: null
}
