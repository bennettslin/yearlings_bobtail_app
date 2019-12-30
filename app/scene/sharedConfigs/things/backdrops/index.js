import {
    BRICK_WALL,
    CITY_BACKDROP,
    DRIVING_BACKDROP,
    FENCE_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    LOS_ANGELES_BACKDROP,
    MOUNTAIN_BACKDROP,
    NOHO_HOUSES_BACKDROP,
    OAKLAND_FRONT,
    OAKLAND_SIDE,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    ROAD_FUTURE,
    ROAD_PAST,
    ROAD_PRESENT,
    SCHOOL_BACKDROP,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    VALLEY,
    WEDDING_BACKDROP,
    YARD_BACKDROP
} from '../../../../constants/scene/things/backdrops'

import { TAIWAN_HOUSE__SHARED } from '../../../sharedStyles/buildings'
import { BOOK__SHARED } from '../../../sharedStyles/paper'
import {
    FOLIAGE__SHARED,
    PALM_TREE__SHARED
} from '../../../sharedStyles/plants'
import { ROAD__SHARED } from '../../../sharedStyles/props'

export default {
    [BRICK_WALL]: null,
    [CITY_BACKDROP]: null,
    [DRIVING_BACKDROP]: null,
    [FENCE_BACKDROP]: null,
    [GOLDEN_GATE_BACKDROP]: null,
    [LOS_ANGELES_BACKDROP]: null,
    [MOUNTAIN_BACKDROP]: null,
    [NOHO_HOUSES_BACKDROP]: PALM_TREE__SHARED,
    [OAKLAND_FRONT]: null,
    [OAKLAND_SIDE]: null,
    [OCEAN_BOTTOM_FAR]: null,
    [OCEAN_FLOOR_FAR]: null,
    [ROAD_FUTURE]: ROAD__SHARED,
    [ROAD_PAST]: [
        BOOK__SHARED,
        ROAD__SHARED
    ],
    [ROAD_PRESENT]: ROAD__SHARED,
    [SCHOOL_BACKDROP]: PALM_TREE__SHARED,
    [SHORE_BUOY_BACKDROP]: null,
    [SHORE_RICKSHAW_BACKDROP]: null,
    [TAIWAN_MOUNTAINS_BACKDROP]: null,
    [TAIWAN_STAIRS_BACKDROP]: TAIWAN_HOUSE__SHARED,
    [VALLEY]: FOLIAGE__SHARED,
    [WEDDING_BACKDROP]: null,
    [YARD_BACKDROP]: null
}
