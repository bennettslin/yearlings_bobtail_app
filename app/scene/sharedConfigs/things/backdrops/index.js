import {
    NOHO_HOUSES_BACKDROP,
    SCHOOL_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    MOUNTAIN_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    SHORE_BUOY_BACKDROP,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    YARD_BACKDROP,
    OAKLAND_SIDE,
    DRIVING_BACKDROP,
    LOS_ANGELES_BACKDROP,
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE,
    GOLDEN_GATE_BACKDROP,
    WEDDING_BACKDROP,
    FENCE_BACKDROP,
    BRICK_WALL,
    CITY_BACKDROP,

    VALLEY,
    OAKLAND_FRONT
} from '../../../../constants/scene/things/backdrops'

import { TAIWAN_HOUSE__SHARED } from '../../../sharedStyles/buildings'
import { BOOK__SHARED } from '../../../sharedStyles/paper'
import {
    FOLIAGE__SHARED,
    PALM_TREE__SHARED
} from '../../../sharedStyles/plants'
import { ROAD__SHARED } from '../../../sharedStyles/props'

export default {
    [NOHO_HOUSES_BACKDROP]: PALM_TREE__SHARED,
    [SCHOOL_BACKDROP]: PALM_TREE__SHARED,
    [TAIWAN_MOUNTAINS_BACKDROP]: null,
    [TAIWAN_STAIRS_BACKDROP]: TAIWAN_HOUSE__SHARED,
    [MOUNTAIN_BACKDROP]: null,
    [SHORE_RICKSHAW_BACKDROP]: null,
    [SHORE_BUOY_BACKDROP]: null,
    [OCEAN_BOTTOM_FAR]: null,
    [OCEAN_FLOOR_FAR]: null,
    [YARD_BACKDROP]: null,
    [DRIVING_BACKDROP]: null,
    [LOS_ANGELES_BACKDROP]: null,
    [OAKLAND_SIDE]: null,
    [ROAD_PAST]: [
        BOOK__SHARED,
        ROAD__SHARED
    ],
    [ROAD_PRESENT]: ROAD__SHARED,
    [ROAD_FUTURE]: ROAD__SHARED,
    [GOLDEN_GATE_BACKDROP]: null,
    [WEDDING_BACKDROP]: null,
    [FENCE_BACKDROP]: null,
    [BRICK_WALL]: null,
    [CITY_BACKDROP]: null,

    [VALLEY]: FOLIAGE__SHARED,
    [OAKLAND_FRONT]: null
}
