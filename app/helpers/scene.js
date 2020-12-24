import {
    ATTIC_KEY,
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY,
    BEDROOM_DOGS_KEY,
    BENNETT_BED_DARK_KEY,
    CHANGELING_CAVE_KEY,
    LIZ_BED_DARK_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_PEAFOWL_KEY,
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY
} from '../constants/scene/scenes'
import {
    SEASON_NIGHT_MAGIC,
    TIME_NIGHT,
    TIME_NIGHT_TAIWAN
} from '../constants/scene/sky'

export const getIsDarkIndoorScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        // Night scenes.
        case TAIWAN_ROOM_KEY:
        case TAIWAN_STAIRS_KEY:
        case BENNETT_BED_DARK_KEY:
        case LIZ_BED_DARK_KEY:
        case ATTIC_KEY:
        case LIZ_COUCH_DARK_KEY:
        case BASEMENT_BED_DARK_KEY:
        // Night magic scenes.
        // eslint-disable-next-line no-fallthrough
        case CHANGELING_CAVE_KEY:
        case BEDROOM_DOGS_KEY:
        case LIZ_COUCH_PEAFOWL_KEY:
        case BASEMENT_BED_MAGIC_KEY:
            return true
    }
    return false
}

export const getIsDarkOutdoorScene = ({
    sceneSkyTime,
    sceneSkySeason
}) => {
    switch (sceneSkySeason) {
        case SEASON_NIGHT_MAGIC:
            return true
    }
    switch (sceneSkyTime) {
        case TIME_NIGHT:
        case TIME_NIGHT_TAIWAN:
            return true
    }
    return false
}
