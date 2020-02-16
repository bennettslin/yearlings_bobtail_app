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
import { ASLEEP } from 'constants/scene/actors/songs'

import {
    PRETEEN_LINENS__SHARED,
    TAIWAN_LINENS__SHARED
} from '../../../sharedStyles/furniture'
import {
    BOOK__SHARED,
    MAGAZINE__SHARED
} from '../../../sharedStyles/paper'
import { TAIWAN_RICKSHAW__SHARED } from '../../../sharedStyles/taiwan'
import { ALL_VEHICLES__SHARED } from '../../../sharedStyles/vehicles'

export default {
    [CAUTIOUS]: null,
    [ENRAGED]: MAGAZINE__SHARED,
    [FEARFUL]: PRETEEN_LINENS__SHARED,
    [PANICKED]: BOOK__SHARED,
    [MAT]: TAIWAN_LINENS__SHARED,
    [STAIRS]: null,
    [GATE]: null,
    [RICKSHAW]: [
        ALL_VEHICLES__SHARED,
        TAIWAN_RICKSHAW__SHARED
    ],
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
