import {
    ATTIC_KEY, BASEMENT_BED_DARK_KEY, BASEMENT_BED_MAGIC_KEY, BATHROOM_PAST_KEY, BEDROOM_DARK_KEY, BEDROOM_DIM_KEY, BEDROOM_FUTURE_KEY, BEDROOM_MAGIC_KEY, BENNETT_BED_DARK_KEY, CAPTAIN_BED_KEY, CHANGELING_MAGIC_KEY, CLUB_FAR_DARK_KEY, CLUB_SIDE_CROWD_DARK_KEY, EL_TORITO_KEY, LIZ_BED_DARK_EXTRA_KEY, LIZ_BED_DARK_KEY, LIZ_COUCH_DARK_KEY, LIZ_COUCH_FUTURE_KEY, SNOWGLOBES_FUTURE_KEY, SNOWGLOBES_PAST_KEY, TAIWAN_ROOM_KEY, TAIWAN_STAIRS_KEY,
} from '../constants/scene/scenes'
import {
    SEASON_AUTUMN, SEASON_OCEAN_SIDE, SEASON_OCEAN_TOP, SEASON_WINTER, TIME_EVENING, TIME_NIGHT, TIME_NIGHT_TAIWAN, TIME_TWILIGHT, TIME_TWILIGHT_TAIWAN,
} from '../constants/scene/sky'

// Scenes where some presences are dimmed.
export const getIsDimRoomScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        case BEDROOM_DIM_KEY:
        case CAPTAIN_BED_KEY:
            return true
    }
    return false
}

// Actors and linens are darkened in these scenes, but lit elsewhere.
export const getIsDarkRoomExtraScene = sceneCubesKey => {
    switch (sceneCubesKey) {
        case BEDROOM_MAGIC_KEY:
        case BEDROOM_FUTURE_KEY:
        case BENNETT_BED_DARK_KEY:
        case LIZ_BED_DARK_EXTRA_KEY:
        case LIZ_COUCH_FUTURE_KEY:
            return true
    }
    return false
}

// Scenes where the default presences are darkened.
export const getIsDarkRoomDefaultScene = sceneCubesKey => {
    // Default also applies to dark room extra scenes.
    if (getIsDarkRoomExtraScene(sceneCubesKey)) {
        return true
    }

    switch (sceneCubesKey) {
        case TAIWAN_ROOM_KEY:
        case TAIWAN_STAIRS_KEY:
        case BEDROOM_DARK_KEY:
        case LIZ_BED_DARK_KEY:
        case ATTIC_KEY:
        case CLUB_SIDE_CROWD_DARK_KEY:
        case LIZ_COUCH_DARK_KEY:
        case BASEMENT_BED_DARK_KEY:
        case BASEMENT_BED_MAGIC_KEY:
        case CLUB_FAR_DARK_KEY:
        case EL_TORITO_KEY: // This is only for hostess stand.
            return true
    }
    return false
}

export const getIsPastSeason = sceneCubesKey => {
    switch (sceneCubesKey) {
        case BATHROOM_PAST_KEY:
        case SNOWGLOBES_PAST_KEY:
            return true
    }
    return false
}

export const getIsFutureSeason = sceneCubesKey => {
    switch (sceneCubesKey) {
        case BEDROOM_FUTURE_KEY:
        case LIZ_COUCH_FUTURE_KEY:
        case SNOWGLOBES_FUTURE_KEY:
            return true
    }
    return false
}

export const getIsMagicSeason = sceneCubesKey => {
    switch (sceneCubesKey) {
        case CHANGELING_MAGIC_KEY:
        case BEDROOM_MAGIC_KEY:
        case BASEMENT_BED_MAGIC_KEY:
            return true
    }
    return false
}

export const getIsEveningTime = skyTime => skyTime === TIME_EVENING

export const getIsNightTime = (skyTime, skySeason) => {
    switch (skyTime) {
        case TIME_NIGHT:
        case TIME_NIGHT_TAIWAN:
        case TIME_TWILIGHT:
        case TIME_TWILIGHT_TAIWAN:
        case BEDROOM_MAGIC_KEY:
        case BASEMENT_BED_MAGIC_KEY:
            return true
    }
    switch (skySeason) {
        case SEASON_OCEAN_TOP:
        case SEASON_OCEAN_SIDE:
            return true
    }
    return false
}

export const getIsAutumnSeason = skySeason => (
    skySeason === SEASON_AUTUMN ||

    // Autumn styling also applies to winter season.
    skySeason === SEASON_WINTER
)

export const getIsWinterSeason = skySeason => skySeason === SEASON_WINTER
