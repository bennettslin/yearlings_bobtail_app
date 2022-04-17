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
import { DARKEN_EXTRA__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { PUDDING__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import {
    BENNETT_LINENS__SHARED,
    TAIWAN_LINENS__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/furniture'
import { BOOK__SHARED } from '../../../../../../src/constants/scene/sharedStyles/paper'
import { DOLLAR__SHARED } from '../../../../../../src/constants/scene/sharedStyles/print'
import {
    TAIWAN_BUOY__SHARED,
    TAIWAN_RICKSHAW__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/taiwan'
import { ALL_VEHICLES__SHARED } from '../../../../../../src/constants/scene/sharedStyles/vehicles'

export default {
    [CAUTIOUS]: null,
    [ENRAGED]: null,
    [FEARFUL]: BENNETT_LINENS__SHARED,
    [PANICKED]: BOOK__SHARED,
    [MAT]: TAIWAN_LINENS__SHARED,
    [STAIRS]: null,
    [GATE]: null,
    [RICKSHAW]: [
        ALL_VEHICLES__SHARED,
        TAIWAN_RICKSHAW__SHARED,
    ],
    [SHORE]: null,
    [BUOY]: TAIWAN_BUOY__SHARED,
    [OCEAN_FLOOR]: null,
    [FEIGNING_SICK]: [
        DOLLAR__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [ASLEEP]: [
        DARKEN_EXTRA__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [SHAKEN]: DARKEN_EXTRA__SHARED,
    [STOIC]: PUDDING__SHARED,
    [WISTFUL]: null,
    [SHEEPISH]: null,
}
