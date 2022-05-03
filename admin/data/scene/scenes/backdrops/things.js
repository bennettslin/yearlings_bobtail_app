import { BACKDROP } from '../../../../../src/constants/scene/things'
import {
    DRIVING_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    LOS_ANGELES_BACKDROP,
    MOUNTAIN_TAIWAN_BACKDROP,
    MOUNTAIN_PAMPAS_BACKDROP,
    OAKLAND_FRONT__HIGH,
    OAKLAND_FRONT__LOW,
    OAKLAND_SIDE__LEVEL,
    OAKLAND_SIDE__LIZ_COUCH,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    ROAD_FUTURE,
    ROAD_PAST,
    ROAD_PRESENT,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    THOUGHT_LARGE__LEFT,
    THOUGHT_LARGE__RIGHT,
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP,
    VALLEY_PANORAMA_BACKDROP,
    WEDDING_BACKDROP,
} from '../../../../../src/constants/scene/things/backdrops'

export default {
    [BACKDROP]: {
        [DRIVING_BACKDROP]: {},
        [GOLDEN_GATE_BACKDROP]: {},
        [LOS_ANGELES_BACKDROP]: {},
        [MOUNTAIN_TAIWAN_BACKDROP]: {},
        [MOUNTAIN_PAMPAS_BACKDROP]: {},
        [OAKLAND_FRONT__LOW]: {
            yIndex: 0,
            trimBottom: 0.5,
        },
        [OAKLAND_FRONT__HIGH]: {},
        [OAKLAND_SIDE__LEVEL]: {},
        [OAKLAND_SIDE__LIZ_COUCH]: {
            zOffset: -0.5,
        },
        [OCEAN_BOTTOM_FAR]: {},
        [OCEAN_FLOOR_FAR]: {},
        [ROAD_FUTURE]: {},
        [ROAD_PAST]: {
            yIndex: 0,
            xPosition: 5.6,
        },
        [ROAD_PRESENT]: {
            xPosition: 5.3,
        },
        [SHORE_BUOY_BACKDROP]: {},
        [SHORE_RICKSHAW_BACKDROP]: {},
        [TAIWAN_MOUNTAINS_BACKDROP]: {},
        [TAIWAN_STAIRS_BACKDROP]: {
            xPosition: 3.33,
            zOffset: 2.5,
        },
        [THOUGHT_LARGE__LEFT]: {
        },
        [THOUGHT_LARGE__RIGHT]: {
            flipHorizontal: true,
        },
        [VALLEY_CLOSER_BACKDROP]: {},
        [VALLEY_FURTHER_BACKDROP]: {},
        [VALLEY_PANORAMA_BACKDROP]: {},
        [WEDDING_BACKDROP]: {},
    },
}
