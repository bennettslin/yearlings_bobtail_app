import {
    DRIVING_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    LOS_ANGELES_BACKDROP,
    MOUNTAIN_PAMPAS_BACKDROP,
    MOUNTAIN_TAIWAN_BACKDROP,
    OAKLAND_FRONT,
    OAKLAND_SIDE,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    PHARMACY_CEL,
    ROAD_FUTURE,
    ROAD_PAST,
    ROAD_PRESENT,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP,
    VALLEY_PANORAMA_BACKDROP,
    WEDDING_BACKDROP,
} from '../../../../../../app/constants/scene/things/backdrops'
import {
    BUILDINGS__SHARED,
    TAIWAN_HOUSE__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/buildings'
import { DOOR__SHARED } from '../../../../../../app/constants/scene/sharedStyles/home'
import { BOOK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'
import {
    MARBLE__SHARED,
    RUBBER__SHARED,
    RUST__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/material'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
    ROAD__SHARED,
    SHORE__SHARED,
    TAIWAN_FOLIAGE__SHARED,
    TAIWAN_MOUNTAIN__SHARED,
    VOLCANO__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import { BUBBLE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/props'

export default {
    [DRIVING_BACKDROP]: FOLIAGE__SHARED,
    [GOLDEN_GATE_BACKDROP]: [
        BUILDINGS__SHARED,
        MOUNTAIN__SHARED,
        RUBBER__SHARED,
        RUST__SHARED,
        SHORE__SHARED,
    ],
    [LOS_ANGELES_BACKDROP]: [
        BUILDINGS__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [MOUNTAIN_TAIWAN_BACKDROP]: TAIWAN_MOUNTAIN__SHARED,
    [MOUNTAIN_PAMPAS_BACKDROP]: MOUNTAIN__SHARED,
    [OAKLAND_FRONT]: [
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [OAKLAND_SIDE]: [
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [OCEAN_BOTTOM_FAR]: VOLCANO__SHARED,
    [OCEAN_FLOOR_FAR]: VOLCANO__SHARED,
    [PHARMACY_CEL]: BOOK__SHARED,
    [ROAD_FUTURE]: ROAD__SHARED,
    [ROAD_PAST]: [
        BOOK__SHARED,
        ROAD__SHARED,
    ],
    [ROAD_PRESENT]: ROAD__SHARED,
    [SHORE_BUOY_BACKDROP]: [
        TAIWAN_FOLIAGE__SHARED,
        TAIWAN_MOUNTAIN__SHARED,
        SHORE__SHARED,
    ],
    [SHORE_RICKSHAW_BACKDROP]: [
        MARBLE__SHARED,
        TAIWAN_FOLIAGE__SHARED,
        TAIWAN_MOUNTAIN__SHARED,
        SHORE__SHARED,
    ],
    [TAIWAN_MOUNTAINS_BACKDROP]: TAIWAN_MOUNTAIN__SHARED,
    [TAIWAN_STAIRS_BACKDROP]: [
        DOOR__SHARED,
        TAIWAN_FOLIAGE__SHARED,
        TAIWAN_MOUNTAIN__SHARED,
        TAIWAN_HOUSE__SHARED,
    ],
    [THOUGHT_LARGE]: BUBBLE__SHARED,
    [THOUGHT_MEDIUM]: BUBBLE__SHARED,
    [THOUGHT_SMALL]: BUBBLE__SHARED,
    [VALLEY_CLOSER_BACKDROP]: [
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [VALLEY_FURTHER_BACKDROP]: [
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [VALLEY_PANORAMA_BACKDROP]: [
        BUILDINGS__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [WEDDING_BACKDROP]: MOUNTAIN__SHARED,
}
