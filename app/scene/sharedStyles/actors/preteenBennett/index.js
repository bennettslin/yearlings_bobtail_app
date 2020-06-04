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
} from '../../../../constants/scene/actors/preteenBennett'
import { ASLEEP } from '../../../../constants/scene/actors/songs'
import { PUDDING__SHARED } from '../../../../constants/scene/sharedStyles/food'
import {
    BENNETT_LINENS__SHARED,
    TAIWAN_LINENS__SHARED
} from '../../../../constants/scene/sharedStyles/furniture'
import {
    BOOK__SHARED,
    LETTER__SHARED,
    MAGAZINE__SHARED,
    SKETCHBOOK__SHARED
} from '../../../../constants/scene/sharedStyles/paper'
import { DOLLAR__SHARED } from '../../../../constants/scene/sharedStyles/print'
import {
    TAIWAN_BUOY__SHARED,
    TAIWAN_RICKSHAW__SHARED
} from '../../../../constants/scene/sharedStyles/taiwan'
import { ALL_VEHICLES__SHARED } from '../../../../constants/scene/sharedStyles/vehicles'

export default {
    [CAUTIOUS]: null,
    [ENRAGED]: MAGAZINE__SHARED,
    [FEARFUL]: BENNETT_LINENS__SHARED,
    [PANICKED]: BOOK__SHARED,
    [MAT]: TAIWAN_LINENS__SHARED,
    [STAIRS]: null,
    [GATE]: null,
    [RICKSHAW]: [
        ALL_VEHICLES__SHARED,
        TAIWAN_RICKSHAW__SHARED
    ],
    [SHORE]: null,
    [BUOY]: TAIWAN_BUOY__SHARED,
    [OCEAN_FLOOR]: null,
    [FEIGNING_SICK]: [
        DOLLAR__SHARED,
        BENNETT_LINENS__SHARED,
        SKETCHBOOK__SHARED
    ],
    [ASLEEP]: BENNETT_LINENS__SHARED,
    [SHAKEN]: LETTER__SHARED,
    [STOIC]: [
        PUDDING__SHARED,
        SKETCHBOOK__SHARED
    ],
    [WISTFUL]: SKETCHBOOK__SHARED,
    [SHEEPISH]: null
}
