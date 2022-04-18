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
    SHEEPISH,
} from '../../../../../../src/constants/scene/actors/preteenBennett'
import { ASLEEP } from '../../../../../../src/constants/scene/actors/songs'
import { DARK_ROOM_EXTRA__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { PUDDING__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import {
    BENNETT_LINENS__SHARED,
    TAIWAN_LINENS__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/furniture'
import { DOLLAR__SHARED } from '../../../../../../src/constants/scene/sharedStyles/print'
import { TAIWAN_RICKSHAW__SHARED } from '../../../../../../src/constants/scene/sharedStyles/taiwan'
import { ALL_VEHICLES__SHARED } from '../../../../../../src/constants/scene/sharedStyles/vehicles'

export default {
    [CAUTIOUS]: null,
    [ENRAGED]: null,
    [FEARFUL]: BENNETT_LINENS__SHARED,
    [PANICKED]: null,
    [MAT]: TAIWAN_LINENS__SHARED,
    [STAIRS]: null,
    [GATE]: null,
    [RICKSHAW]: [
        ALL_VEHICLES__SHARED,
        TAIWAN_RICKSHAW__SHARED,
    ],
    [SHORE]: null,
    [BUOY]: null,
    [OCEAN_FLOOR]: null,
    [FEIGNING_SICK]: [
        DOLLAR__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [ASLEEP]: [
        DARK_ROOM_EXTRA__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [SHAKEN]: DARK_ROOM_EXTRA__SHARED,
    [STOIC]: PUDDING__SHARED,
    [WISTFUL]: null,
    [SHEEPISH]: null,
}
