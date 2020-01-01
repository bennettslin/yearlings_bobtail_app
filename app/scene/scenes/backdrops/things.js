import { BACKDROP } from '../../../constants/scene/things'
import {
    BRICK_WALL,
    DISTANT_BUILDINGS_BACKDROP,
    DISTANT_HOUSES_BACKDROP,
    DRIVING_BACKDROP,
    FENCE_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    LOS_ANGELES_BACKDROP,
    MOUNTAIN_BACKDROP,
    VALLEY_CLOSER_BACKDROP,
    OAKLAND_FRONT__HIGH,
    OAKLAND_FRONT__LOW,
    OAKLAND_SIDE,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    ROAD_FUTURE,
    ROAD_PAST,
    ROAD_PRESENT,
    VALLEY_FURTHER_BACKDROP,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    VALLEY_PANORAMA_BACKDROP,
    WEDDING_BACKDROP,
    YARD_BACKDROP
} from '../../../constants/scene/things/backdrops'

export default {
    [BACKDROP]: {
        [BRICK_WALL]: {
            xPosition: 5.5,
            scaleFactor: 0.66,
            trimBottom: 0.05
        },
        [DISTANT_BUILDINGS_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.45
        },
        [DISTANT_HOUSES_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.45
        },
        [DRIVING_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.3
        },
        [FENCE_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.05
        },
        [GOLDEN_GATE_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.675,
            trimBottom: 0.25
        },
        [LOS_ANGELES_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.13
        },
        [MOUNTAIN_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.66
        },
        [OAKLAND_FRONT__LOW]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.5
        },
        [OAKLAND_FRONT__HIGH]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [OAKLAND_SIDE]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.2
        },
        [OCEAN_BOTTOM_FAR]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [OCEAN_FLOOR_FAR]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [ROAD_FUTURE]: {
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [ROAD_PAST]: {
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [ROAD_PRESENT]: {
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [SHORE_BUOY_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [SHORE_RICKSHAW_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [TAIWAN_STAIRS_BACKDROP]: {
            xPosition: 4.5,
            zOffset: 3,
            scaleFactor: 0.45,
            flipHorizontal: true
        },
        [VALLEY_PANORAMA_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.65,
            trimBottom: 0.05
        },
        [VALLEY_CLOSER_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        },
        [VALLEY_FURTHER_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.66
        },
        [VALLEY_PANORAMA_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.65,
            trimBottom: 0.02
        },
        [WEDDING_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.66
        },
        [YARD_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7,
            trimBottom: 0.1
        }
    }
}
