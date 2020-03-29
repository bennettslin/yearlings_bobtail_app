import {
    HUE_APARTMENT,
    HUE_BENNETT_WALL,
    HUE_FAMILY_HOUSE,
    HUE_LIZ_APARTMENT,
    HUE_OCEAN,
    HUE_SAND
} from '../../../scss/app'

export const DEFAULT_CLEAR_COLOUR = 'clear'
export const GROUND_CLEAR_COLOUR = 'ground'
export const GRASS_COLOUR = 'grass'
export const SAND_COLOUR = 'sand'
export const STREET_COLOUR = 'street'
export const CROSSWALK_COLOUR = 'crosswalk'
export const PAVEMENT_COLOUR = 'pavement'
export const TAIWAN_GATE_COLOUR = 'taiwanGate'
export const BANCROFT_GATE_COLOUR = 'bancroftGate'
export const LIZ_GATE_COLOUR = 'lizGate'
export const ROOF_COLOUR = 'roof'
export const SCHOOL_FLOOR_COLOUR = 'schoolFloor'
export const LINOLEUM_FLOOR_COLOUR = 'linoleumFloor'
export const WOOD_FLOOR_COLOUR = 'woodFloor'
export const OLD_FLOOR_COLOUR = 'oldFloor'
export const VELVET_FLOOR_COLOUR = 'velvetFloor'
export const NIGHT_COLOUR = 'night'
export const NIGHT_MAGIC_COLOUR = 'nightMagic'
export const SPOTLIGHT_LIGHT_COLOUR = 'spotlightLight'
export const SPOTLIGHT_LIGHTER_COLOUR = 'spotlightLighter'
export const SPOTLIGHT_LIGHTEST_COLOUR = 'spotlightLightest'
export const BENNETT_CARPET_COLOUR = 'bennettCarpet'
export const BENNETT_FLOOR_COLOUR = 'bennettFloor'
export const LIZ_FLOOR_COLOUR = 'lizFloor'
export const DIRT_FLOOR_COLOUR = 'dirtFloor'
export const SOFT_WALL_COLOUR = 'softWall'
export const SCHOOL_WALL_COLOUR = 'schoolWall'
export const BENNETT_WALL_COLOUR = 'bennettWall'
export const LIZ_WALL_COLOUR = 'lizWall'
export const UNDERGROUND_WALL_COLOUR = 'basementWall'
export const CLUB_WALL_COLOUR = 'clubWall'
export const INDUSTRIAL_WALL_COLOUR = 'industrialWall'
export const FANCY_WALL_COLOUR = 'fancyWall'
export const GENERIC_EXTERIOR_COLOUR = 'genericExterior'
export const FAMILY_EXTERIOR_COLOUR = 'familyExterior'
export const VAN_NUYS_EXTERIOR_COLOUR = 'vanNuysExterior'
export const APARTMENT_EXTERIOR_COLOUR = 'apartmentExterior'
export const LIZ_EXTERIOR_COLOUR = 'lizExterior'
export const BANCROFT_EXTERIOR_COLOUR = 'bancroftExterior'
export const CINEMA_EXTERIOR_COLOUR = 'cinemaExterior'
export const PLATFORM_COLOUR = 'platform'
export const CONCRETE_PLATFORM_COLOUR = 'concrete'
export const FURNITURE_COLOUR = 'furniture'
export const BENNETT_COUCH_COLOUR = 'bennettCouch'
export const LIZ_COUCH_COLOUR = 'lizCouch'
export const MIRIAM_COUCH_COLOUR = 'miriamCouch'
export const WAITING_ARMCHAIR_COLOUR = 'waitingArmchair'
export const BENNETT_BED_COLOUR = 'bennettBed'
export const LIZ_BED_COLOUR = 'lizBed'
export const SEAT_COLOUR = 'seat'
export const OCEAN_COLOUR = 'ocean'

/* eslint-disable object-curly-newline */
const HSLA_MAP = {
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
    /* K. */
    [SAND_COLOUR]: { h: parseInt(HUE_SAND), s: 30, l: 64 },
    [CROSSWALK_COLOUR]: { h: 48, s: 6, l: 82 },
    /* C. */
    [ROOF_COLOUR]: { h: 14, s: 24, l: 51 },
    /* F. */
    [BENNETT_CARPET_COLOUR]: { h: 16, s: 31, l: 57 },
    [BENNETT_FLOOR_COLOUR]: { h: 26, s: 15, l: 69 },
    [WOOD_FLOOR_COLOUR]: { h: 32, s: 45, l: 34 },
    [OLD_FLOOR_COLOUR]: { h: 36, s: 13, l: 46 },
    [DIRT_FLOOR_COLOUR]: { h: 51, s: 12, l: 34 },
    [LINOLEUM_FLOOR_COLOUR]: { h: 74, s: 14, l: 67 },
    [LIZ_FLOOR_COLOUR]: { h: 195, s: 22, l: 59 },
    [SCHOOL_FLOOR_COLOUR]: { h: 346, s: 13, l: 72 },
    [VELVET_FLOOR_COLOUR]: { h: 357, s: 44, l: 36 },
    /* Y. */
    [NIGHT_COLOUR]: { h: 221, s: 17, l: 45 },
    /* Z. */
    [NIGHT_MAGIC_COLOUR]: { h: 125, s: 30, l: 15 },
    /* L, M, N. */
    [SPOTLIGHT_LIGHT_COLOUR]: { h: 60, s: 46, l: 35 },
    [SPOTLIGHT_LIGHTER_COLOUR]: { h: 60, s: 46, l: 45 },
    [SPOTLIGHT_LIGHTEST_COLOUR]: { h: 60, s: 46, l: 55 },
    /* W. */
    [BENNETT_WALL_COLOUR]: { h: parseInt(HUE_BENNETT_WALL), s: 15, l: 81 },
    [UNDERGROUND_WALL_COLOUR]: { h: 61, s: 18, l: 65 },
    [SOFT_WALL_COLOUR]: { h: 68, s: 31, l: 87 },
    [INDUSTRIAL_WALL_COLOUR]: { h: 96, s: 13, l: 77 },
    [LIZ_WALL_COLOUR]: { h: parseInt(HUE_LIZ_APARTMENT), s: 15, l: 81 },
    [CLUB_WALL_COLOUR]: { h: 221, s: 23, l: 65 },
    [FANCY_WALL_COLOUR]: { h: 278, s: 18, l: 81 },
    [SCHOOL_WALL_COLOUR]: { h: 334, s: 17, l: 78 },
    /* X. */
    [APARTMENT_EXTERIOR_COLOUR]: { h: parseInt(HUE_APARTMENT), s: 11, l: 53 },
    [GENERIC_EXTERIOR_COLOUR]: { h: 12, s: 16, l: 75 },
    [FAMILY_EXTERIOR_COLOUR]: { h: parseInt(HUE_FAMILY_HOUSE), s: 24, l: 78 },
    [BANCROFT_EXTERIOR_COLOUR]: { h: 102, s: 6, l: 68 },
    [CINEMA_EXTERIOR_COLOUR]: { h: 143, s: 14, l: 68 },
    [LIZ_EXTERIOR_COLOUR]: { h: parseInt(HUE_LIZ_APARTMENT), s: 11, l: 72 },
    [VAN_NUYS_EXTERIOR_COLOUR]: { h: 334, s: 14, l: 63 },
    /* A. */
    [TAIWAN_GATE_COLOUR]: { h: 18, s: 17, l: 46 },
    [LIZ_GATE_COLOUR]: { h: 46, s: 12, l: 63 },
    [BANCROFT_GATE_COLOUR]: { h: 102, s: 4, l: 59 },
    /* P. */
    [CONCRETE_PLATFORM_COLOUR]: { h: 0, s: 0, l: 65 },
    [PLATFORM_COLOUR]: { h: 13, s: 16, l: 33 },
    /* R. */
    [FURNITURE_COLOUR]: { h: 25, s: 44, l: 53 },
    /* U. */
    [BENNETT_COUCH_COLOUR]: { h: 125, s: 12, l: 45 },
    [LIZ_COUCH_COLOUR]: { h: 45, s: 10, l: 45 },
    [MIRIAM_COUCH_COLOUR]: { h: 250, s: 12, l: 45 },
    [WAITING_ARMCHAIR_COLOUR]: { h: 43, s: 34, l: 44 },
    [BENNETT_BED_COLOUR]: { h: 4, s: 35, l: 60 },
    [LIZ_BED_COLOUR]: { h: 45, s: 12, l: 60 },
    /* S. */
    [SEAT_COLOUR]: { h: 25, s: 27, l: 47 }
}
/* eslint-enable object-curly-newline */
export default HSLA_MAP
