import {
    HUE_APARTMENT,
    HUE_BENNETT_LINENS,
    HUE_BENNETT_ROOM,
    HUE_FAMILY,
    HUE_LIZ_LINENS,
    HUE_LIZ_ROOM,
    HUE_MIRIAM_LINENS,
    HUE_WAITING,
    HUE_OCEAN,
    HUE_ROOF,
    HUE_SAND,
    HUE_SNOW,
    HUE_SNOWGLOBE,
    HUE_TENNIS
} from '../../../../scss/exports/style'

import {
    DEFAULT_CLEAR_COLOUR,
    GROUND_CLEAR_COLOUR,
    GRASS_COLOUR,
    SAND_COLOUR,
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    PAVEMENT_COLOUR,
    TENNIS_COLOUR,
    TAIWAN_GATE_COLOUR,
    BANCROFT_GATE_COLOUR,
    LIZ_GATE_COLOUR,
    ROOF_COLOUR,
    SCHOOL_FLOOR_COLOUR,
    LINOLEUM_FLOOR_COLOUR,
    DEATHBED_FLOOR_COLOUR,
    WOOD_FLOOR_COLOUR,
    OLD_FLOOR_COLOUR,
    VELVET_FLOOR_COLOUR,
    SNOW_FLOOR_COLOUR,
    NIGHT_COLOUR,
    NIGHT_MAGIC_COLOUR,
    SPOTLIGHT_LIGHT_COLOUR,
    SPOTLIGHT_LIGHTER_COLOUR,
    SPOTLIGHT_LIGHTEST_COLOUR,
    BENNETT_CARPET_COLOUR,
    BENNETT_FLOOR_COLOUR,
    LIZ_FLOOR_COLOUR,
    DIRT_FLOOR_COLOUR,
    SOFT_WALL_COLOUR,
    SCHOOL_WALL_COLOUR,
    BENNETT_WALL_COLOUR,
    LIZ_WALL_COLOUR,
    UNDERGROUND_WALL_COLOUR,
    CLUB_WALL_COLOUR,
    INDUSTRIAL_WALL_COLOUR,
    FANCY_WALL_COLOUR,
    GENERIC_EXTERIOR_COLOUR,
    FAMILY_EXTERIOR_COLOUR,
    VAN_NUYS_EXTERIOR_COLOUR,
    APARTMENT_EXTERIOR_COLOUR,
    LIZ_EXTERIOR_COLOUR,
    BANCROFT_EXTERIOR_COLOUR,
    CINEMA_EXTERIOR_COLOUR,
    PLATFORM_COLOUR,
    SNOWGLOBE_PLATFORM_COLOUR,
    CONCRETE_PLATFORM_COLOUR,
    FURNITURE_COLOUR,
    BENNETT_COUCH_COLOUR,
    LIZ_COUCH_COLOUR,
    MIRIAM_COUCH_COLOUR,
    WAITING_ARMCHAIR_COLOUR,
    BENNETT_BED_COLOUR,
    LIZ_BED_COLOUR,
    SEAT_COLOUR,
    OCEAN_COLOUR
} from '../colours'

/* eslint-disable object-curly-newline */
export default {
    /* D. */
    [DEFAULT_CLEAR_COLOUR]: { h: 0, s: 0, l: 100, a: 0.1 },
    /* G. */
    [GROUND_CLEAR_COLOUR]: { h: 0, s: 0, l: 0, a: 0.2 },
    /* H. */
    [GRASS_COLOUR]: { h: 100, s: 36, l: 42 },
    /* T. */
    [STREET_COLOUR]: { h: 0, s: 0, l: 39 },
    /* V. */
    [OCEAN_COLOUR]: { h: parseInt(HUE_OCEAN), s: 51, l: 43 },
    [PAVEMENT_COLOUR]: { h: 0, s: 0, l: 61 },
    [TENNIS_COLOUR]: { h: parseInt(HUE_TENNIS), s: 51, l: 55 },
    /* K. */
    [SAND_COLOUR]: { h: parseInt(HUE_SAND), s: 30, l: 64 },
    [CROSSWALK_COLOUR]: { h: 48, s: 6, l: 82 },
    /* C. */
    [ROOF_COLOUR]: { h: parseInt(HUE_ROOF), s: 24, l: 51 },
    /* F. */
    [BENNETT_CARPET_COLOUR]: { h: parseInt(HUE_BENNETT_ROOM), s: 25, l: 57 },
    [BENNETT_FLOOR_COLOUR]: { h: parseInt(HUE_BENNETT_ROOM) + 15, s: 15, l: 69 },
    [LIZ_FLOOR_COLOUR]: { h: parseInt(HUE_LIZ_ROOM) + 15, s: 22, l: 59 },
    [WOOD_FLOOR_COLOUR]: { h: 32, s: 45, l: 34 },
    [OLD_FLOOR_COLOUR]: { h: 36, s: 13, l: 46 },
    [DIRT_FLOOR_COLOUR]: { h: 51, s: 12, l: 34 },
    [LINOLEUM_FLOOR_COLOUR]: { h: 74, s: 14, l: 67 },
    [DEATHBED_FLOOR_COLOUR]: { h: 84, s: 14, l: 67 },
    [SCHOOL_FLOOR_COLOUR]: { h: 346, s: 13, l: 72 },
    [VELVET_FLOOR_COLOUR]: { h: 357, s: 44, l: 36 },
    [SNOW_FLOOR_COLOUR]: { h: parseInt(HUE_SNOW), s: 30, l: 87 },
    /* Y. */
    [NIGHT_COLOUR]: { h: 221, s: 17, l: 45 },
    /* Z. */
    [NIGHT_MAGIC_COLOUR]: { h: 125, s: 30, l: 15 },
    /* L, M, N. */
    [SPOTLIGHT_LIGHT_COLOUR]: { h: 60, s: 46, l: 35 },
    [SPOTLIGHT_LIGHTER_COLOUR]: { h: 60, s: 46, l: 45 },
    [SPOTLIGHT_LIGHTEST_COLOUR]: { h: 60, s: 46, l: 55 },
    /* W. */
    [BENNETT_WALL_COLOUR]: { h: parseInt(HUE_BENNETT_ROOM), s: 15, l: 81 },
    [LIZ_WALL_COLOUR]: { h: parseInt(HUE_LIZ_ROOM), s: 15, l: 81 },
    [UNDERGROUND_WALL_COLOUR]: { h: 61, s: 18, l: 65 },
    [SOFT_WALL_COLOUR]: { h: 68, s: 31, l: 87 },
    [INDUSTRIAL_WALL_COLOUR]: { h: 96, s: 13, l: 77 },
    [CLUB_WALL_COLOUR]: { h: 221, s: 23, l: 65 },
    [FANCY_WALL_COLOUR]: { h: 278, s: 18, l: 81 },
    [SCHOOL_WALL_COLOUR]: { h: 334, s: 17, l: 78 },
    /* X. */
    [APARTMENT_EXTERIOR_COLOUR]: { h: parseInt(HUE_APARTMENT), s: 11, l: 58 },
    [FAMILY_EXTERIOR_COLOUR]: { h: parseInt(HUE_FAMILY), s: 24, l: 78 },
    [LIZ_EXTERIOR_COLOUR]: { h: parseInt(HUE_LIZ_ROOM), s: 11, l: 72 },
    [GENERIC_EXTERIOR_COLOUR]: { h: 12, s: 16, l: 75 },
    [BANCROFT_EXTERIOR_COLOUR]: { h: 102, s: 6, l: 68 },
    [CINEMA_EXTERIOR_COLOUR]: { h: 143, s: 14, l: 68 },
    [VAN_NUYS_EXTERIOR_COLOUR]: { h: 334, s: 14, l: 63 },
    /* A. */
    [TAIWAN_GATE_COLOUR]: { h: 18, s: 17, l: 46 },
    [LIZ_GATE_COLOUR]: { h: 46, s: 12, l: 63 },
    [BANCROFT_GATE_COLOUR]: { h: 102, s: 4, l: 59 },
    /* P. */
    [CONCRETE_PLATFORM_COLOUR]: { h: 0, s: 0, l: 65 },
    [PLATFORM_COLOUR]: { h: 13, s: 16, l: 33 },
    [SNOWGLOBE_PLATFORM_COLOUR]: { h: parseInt(HUE_SNOWGLOBE), s: 42, l: 55 },
    /* R. */
    [FURNITURE_COLOUR]: { h: 25, s: 44, l: 53 },
    /* U. */
    [BENNETT_COUCH_COLOUR]: { h: parseInt(HUE_BENNETT_LINENS), s: 25, l: 45 },
    [BENNETT_BED_COLOUR]: { h: parseInt(HUE_BENNETT_LINENS), s: 35, l: 60 },
    [LIZ_COUCH_COLOUR]: { h: parseInt(HUE_LIZ_LINENS), s: 15, l: 50 },
    [LIZ_BED_COLOUR]: { h: parseInt(HUE_LIZ_LINENS), s: 25, l: 65 },
    [WAITING_ARMCHAIR_COLOUR]: { h: parseInt(HUE_WAITING), s: 34, l: 44 },
    [MIRIAM_COUCH_COLOUR]: { h: parseInt(HUE_MIRIAM_LINENS), s: 25, l: 45 },
    /* S. */
    [SEAT_COLOUR]: { h: 25, s: 27, l: 47 }
}