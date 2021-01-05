import { BACKDROP } from '../../../../../app/constants/scene/things'
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
} from '../../../../../app/constants/scene/things/backdrops'

export default {
    [BACKDROP]: {
        [DRIVING_BACKDROP]: {
            scaleFactor: 0.7,
            trimBottom: 0.45,
        },
        [GOLDEN_GATE_BACKDROP]: {
            scaleFactor: 0.675,
            trimBottom: 0.25,
        },
        [LOS_ANGELES_BACKDROP]: {
            scaleFactor: 0.7,
            trimBottom: 0.13,
        },
        [MOUNTAIN_TAIWAN_BACKDROP]: {
            scaleFactor: 0.66,
        },
        [MOUNTAIN_PAMPAS_BACKDROP]: {
            scaleFactor: 0.66,
        },
        [OAKLAND_FRONT__LOW]: {
            yIndex: 0,
            scaleFactor: 0.7,
            trimBottom: 0.5,
        },
        [OAKLAND_FRONT__HIGH]: {
            scaleFactor: 0.7,
        },
        [OAKLAND_SIDE__LEVEL]: {
            scaleFactor: 0.7,
            trimBottom: 0.2,
        },
        [OAKLAND_SIDE__LIZ_COUCH]: {
            scaleFactor: 0.7,
            zOffset: -3,
            trimBottom: 0.2,
        },
        [OCEAN_BOTTOM_FAR]: {
            scaleFactor: 0.7,
        },
        [OCEAN_FLOOR_FAR]: {
            scaleFactor: 0.7,
        },
        [ROAD_FUTURE]: {},
        [ROAD_PAST]: {
            yIndex: 0,
            xPosition: 5.6,
        },
        [ROAD_PRESENT]: {
            xPosition: 5.3,
        },
        [SHORE_BUOY_BACKDROP]: {
            scaleFactor: 0.7,
        },
        [SHORE_RICKSHAW_BACKDROP]: {},
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            scaleFactor: 0.6,
        },
        [TAIWAN_STAIRS_BACKDROP]: {
            xPosition: 4.5,
            zOffset: 3,
            scaleFactor: 0.45,
        },
        [THOUGHT_LARGE__LEFT]: {
            xPosition: 5.5,
            scaleFactor: 0.6,
        },
        [THOUGHT_LARGE__RIGHT]: {
            xPosition: 5.5,
            scaleFactor: 0.6,
            flipHorizontal: true,
        },
        [VALLEY_CLOSER_BACKDROP]: {
            scaleFactor: 0.7,
        },
        [VALLEY_FURTHER_BACKDROP]: {
            scaleFactor: 0.66,
        },
        [VALLEY_PANORAMA_BACKDROP]: {
            scaleFactor: 0.65,
            trimBottom: 0.02,
        },
        [WEDDING_BACKDROP]: {
            scaleFactor: 0.66,
        },
    },
}
