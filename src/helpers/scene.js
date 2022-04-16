import {
    ATTIC_KEY,
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY,
    BEDROOM_DARK_KEY,
    BEDROOM_FUTURE_KEY,
    BEDROOM_MAGIC_KEY,
    BENNETT_BED_DARK_KEY,
    CLUB_FAR_DARK_KEY,
    CLUB_SIDE_CROWD_DARK_KEY,
    LIZ_BED_DARK_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_FUTURE_KEY,
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY,
} from '../constants/scene/scenes'

// Scenes where only the default presences are darkened.
export const getIsDarkenDefaultScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        // Night scenes.
        case TAIWAN_ROOM_KEY:
        case TAIWAN_STAIRS_KEY:
        case BEDROOM_DARK_KEY:
        case BENNETT_BED_DARK_KEY:
        case LIZ_BED_DARK_KEY:
        case ATTIC_KEY:
        case CLUB_SIDE_CROWD_DARK_KEY:
        case LIZ_COUCH_DARK_KEY:
        case BASEMENT_BED_DARK_KEY:
        case CLUB_FAR_DARK_KEY:

        // Night magic scenes.
        // eslint-disable-next-line no-fallthrough
        case BEDROOM_MAGIC_KEY:
        case BEDROOM_FUTURE_KEY:
        case LIZ_COUCH_FUTURE_KEY:
        case BASEMENT_BED_MAGIC_KEY:
            return true
    }
    return false
}

// Scenes where designated extra presences are darkened.
export const getIsDarkenExtraScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        case BEDROOM_MAGIC_KEY:
        case BEDROOM_FUTURE_KEY:
        case BASEMENT_BED_DARK_KEY:
            return true
    }
    return false
}
