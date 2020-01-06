import { BACKDROP } from '../../../constants/scene/things'
import {
    DISTANT_BUILDINGS_BACKDROP,
    DISTANT_HOUSES_BACKDROP,
    DRIVING_BACKDROP,
    GOLDEN_GATE_BACKDROP,
    LOS_ANGELES_BACKDROP,
    MOUNTAIN_TAIWAN_BACKDROP,
    MOUNTAIN_PAMPAS_BACKDROP,
    NEAR_BUILDINGS,
    NEAR_HOUSES,
    OAKLAND_FRONT__HIGH,
    OAKLAND_FRONT__LOW,
    OAKLAND_SIDE,
    OCEAN_BOTTOM_FAR,
    OCEAN_FLOOR_FAR,
    ROAD_FUTURE,
    ROAD_PAST,
    ROAD_PRESENT,
    SHORE_BUOY_BACKDROP,
    SHORE_RICKSHAW_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    TAIWAN_STAIRS_BACKDROP,
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP,
    VALLEY_PANORAMA_BACKDROP,
    WEDDING_BACKDROP
} from '../../../constants/scene/things/backdrops'

export default {
    [BACKDROP]: {
        [DISTANT_BUILDINGS_BACKDROP]: {
            scaleFactor: 0.45
        },
        [DISTANT_HOUSES_BACKDROP]: {
            yIndex: 0,
            scaleFactor: 0.45
        },
        [DRIVING_BACKDROP]: {
            scaleFactor: 0.7,
            trimBottom: 0.45
        },
        [GOLDEN_GATE_BACKDROP]: {
            scaleFactor: 0.675,
            trimBottom: 0.25
        },
        [LOS_ANGELES_BACKDROP]: {
            scaleFactor: 0.7,
            trimBottom: 0.13
        },
        [MOUNTAIN_TAIWAN_BACKDROP]: {
            scaleFactor: 0.66
        },
        [MOUNTAIN_PAMPAS_BACKDROP]: {
            scaleFactor: 0.66
        },
        [NEAR_BUILDINGS]: {
            scaleFactor: 0.66,
            trimBottom: 0.05
        },
        [NEAR_HOUSES]: {
            scaleFactor: 0.7,
            trimBottom: 0.05
        },
        [OAKLAND_FRONT__LOW]: {
            yIndex: 0,
            scaleFactor: 0.7,
            trimBottom: 0.5
        },
        [OAKLAND_FRONT__HIGH]: {
            scaleFactor: 0.7
        },
        [OAKLAND_SIDE]: {
            scaleFactor: 0.7,
            trimBottom: 0.2
        },
        [OCEAN_BOTTOM_FAR]: {
            scaleFactor: 0.7
        },
        [OCEAN_FLOOR_FAR]: {
            scaleFactor: 0.7
        },
        [ROAD_FUTURE]: {
            yIndex: 0,
            scaleFactor: 0.6
        },
        [ROAD_PAST]: {
            yIndex: 0,
            scaleFactor: 0.6
        },
        [ROAD_PRESENT]: {
            yIndex: 0,
            scaleFactor: 0.6
        },
        [SHORE_BUOY_BACKDROP]: {
            scaleFactor: 0.7
        },
        [SHORE_RICKSHAW_BACKDROP]: {
            scaleFactor: 0.7
        },
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            scaleFactor: 0.6
        },
        [TAIWAN_STAIRS_BACKDROP]: {
            xPosition: 4.5,
            zOffset: 3,
            scaleFactor: 0.45,
            flipHorizontal: true
        },
        [VALLEY_PANORAMA_BACKDROP]: {
            scaleFactor: 0.65,
            trimBottom: 0.05
        },
        [VALLEY_CLOSER_BACKDROP]: {
            scaleFactor: 0.7
        },
        [VALLEY_FURTHER_BACKDROP]: {
            scaleFactor: 0.66
        },
        [VALLEY_PANORAMA_BACKDROP]: {
            scaleFactor: 0.65,
            trimBottom: 0.02
        },
        [WEDDING_BACKDROP]: {
            scaleFactor: 0.66
        }
    }
}
