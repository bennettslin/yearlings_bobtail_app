import {
    ATTIC_KEY,
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY,
    BENNETT_BED_DARK_KEY,
    CLUB_FAR_DARK_KEY,
    CLUB_SIDE_CROWD_DARK_KEY,
    LIZ_BED_DARK_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_PEAFOWL_KEY,
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY,
} from '../constants/scene/scenes'

export const getIsDarkScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        // Night scenes.
        case TAIWAN_ROOM_KEY:
        case TAIWAN_STAIRS_KEY:
        case BENNETT_BED_DARK_KEY:
        case LIZ_BED_DARK_KEY:
        case ATTIC_KEY:
        case CLUB_SIDE_CROWD_DARK_KEY:
        case LIZ_COUCH_DARK_KEY:
        case BASEMENT_BED_DARK_KEY:
        case CLUB_FAR_DARK_KEY:
        // Night magic scenes.
        // eslint-disable-next-line no-fallthrough
        case BEDROOM_DOGS_KEY:
        case BEDROOM_SPACE_KEY:
        case LIZ_COUCH_PEAFOWL_KEY:
        case BASEMENT_BED_MAGIC_KEY:
            return true
    }
    return false
}
