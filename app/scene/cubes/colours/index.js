export const DEFAULT_COLOUR = 'default'
export const GRASS_COLOUR = 'grass'
export const GRASS_DARKER_COLOUR = 'grassDarker'
export const GROUND_COLOUR = 'ground'
export const SAND_COLOUR = 'sand'
export const STREET_COLOUR = 'street'
export const CROSSWALK_COLOUR = 'crosswalk'
export const CONCRETE_PLATFORM_COLOUR = 'concrete'
export const PAVEMENT_COLOUR = 'pavement'
export const TAIWAN_GATE_COLOUR = 'taiwanGate'
export const BANCROFT_GATE_COLOUR = 'bancroftGate'
export const LIZ_GATE_COLOUR = 'lizGate'
export const CEILING_COLOUR = 'ceiling'
export const ROOF_COLOUR = 'roof'
export const SCHOOL_FLOOR_COLOUR = 'schoolFloor'
export const LINOLEUM_FLOOR_COLOUR = 'linoleumFloor'
export const WOOD_FLOOR_COLOUR = 'woodFloor'
export const OLD_FLOOR_COLOUR = 'oldFloor'
export const FANCY_FLOOR_COLOUR = 'fancyFloor'
export const BEDROOM_FLOOR_COLOUR = 'bedroomFloor'
export const DARK_FLOOR_COLOUR = 'darkFloor'
export const BENNETT_FLOOR_COLOUR = 'bennettFloor'
export const LIZ_FLOOR_COLOUR = 'lizFloor'
export const DIRT_FLOOR_COLOUR = 'dirtFloor'
export const LINOLEUM_FLOOR_DARK_COLOUR = 'linoleumFloorDark'
export const BEDROOM_FLOOR_DARK_COLOUR = 'bedroomFloorDark'
export const BENNETT_FLOOR_DARK_COLOUR = 'bennettFloorDark'
export const LIZ_FLOOR_DARK_COLOUR = 'lizFloorDark'
export const SOFT_WALL_COLOUR = 'softWall'
export const BEDROOM_WALL_COLOUR = 'bedroomWall'
export const DARK_WALL_COLOUR = 'darkWall'
export const SCHOOL_WALL_COLOUR = 'schoolWall'
export const BENNETT_WALL_COLOUR = 'bennettWall'
export const LIZ_WALL_COLOUR = 'lizWall'
export const UNDERGROUND_WALL_COLOUR = 'basementWall'
export const CLUB_WALL_COLOUR = 'clubWall'
export const INDUSTRIAL_WALL_COLOUR = 'industrialWall'
export const FANCY_WALL_COLOUR = 'fancyWall'
export const EXTERIOR_COLOUR = 'taiwaneseExterior'
export const FAMILY_EXTERIOR_COLOUR = 'familyExterior'
export const VAN_NUYS_EXTERIOR_COLOUR = 'vanNuysExterior'
export const BENNETT_EXTERIOR_COLOUR = 'bennettExterior'
export const LIZ_EXTERIOR_COLOUR = 'lizExterior'
export const BANCROFT_EXTERIOR_COLOUR = 'bancroftExterior'
export const CINEMA_EXTERIOR_COLOUR = 'cinemaExterior'
export const PLATFORM_COLOUR = 'platform'
export const FURNITURE_COLOUR = 'furniture'
export const ATTIC_COUCH_COLOUR = 'atticCouch'
export const BENNETT_COUCH_COLOUR = 'bennettCouch'
export const LIZ_COUCH_COLOUR = 'lizCouch'
export const MIRIAM_COUCH_COLOUR = 'miriamCouch'
export const WAITING_ARMCHAIR_COLOUR = 'waitingArmchair'
export const BENNETT_BED_COLOUR = 'bennettBed'
export const CAPTAIN_BED_COLOUR = 'captainBed'
export const HOSPITAL_BED_COLOUR = 'hospitalBed'
export const LIZ_BED_COLOUR = 'lizBed'
export const SEAT_COLOUR = 'seat'
export const OCEAN_COLOUR = 'ocean'

/* eslint-disable object-curly-newline */
const HSLA_MAP = {
    /* D. */
    [DEFAULT_COLOUR]: { h: 0, s: 0, l: 100, a: 0.2 },
    /* G. */
    [GROUND_COLOUR]: { h: 0, s: 0, l: 25 },
    /* H. */
    [GRASS_COLOUR]: { h: 91, s: 46, l: 42 },
    /* I. */
    [GRASS_DARKER_COLOUR]: { h: 93, s: 46, l: 27 },
    /* T. */
    [STREET_COLOUR]: { h: 120, s: 1, l: 30 },
    /* V. */
    [OCEAN_COLOUR]: { h: 204, s: 61, l: 43 },
    [PAVEMENT_COLOUR]: { h: 0, s: 0, l: 51 },
    /* K. */
    [SAND_COLOUR]: { h: 35, s: 51, l: 74 },
    [CROSSWALK_COLOUR]: { h: 48, s: 6, l: 82 },
    /* C. */
    [CEILING_COLOUR]: { h: 22, s: 10, l: 80 },
    [ROOF_COLOUR]: { h: 14, s: 24, l: 51 },
    /* F. */
    [SCHOOL_FLOOR_COLOUR]: { h: 27, s: 18, l: 65 },
    [LINOLEUM_FLOOR_COLOUR]: { h: 85, s: 14, l: 67 },
    [WOOD_FLOOR_COLOUR]: { h: 32, s: 35, l: 64 },
    [OLD_FLOOR_COLOUR]: { h: 35, s: 13, l: 46 },
    [FANCY_FLOOR_COLOUR]: { h: 1, s: 43, l: 36 },
    [BEDROOM_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [BENNETT_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [LIZ_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [DIRT_FLOOR_COLOUR]: { h: 24, s: 25, l: 39 },
    /* L. */
    [LINOLEUM_FLOOR_DARK_COLOUR]: { h: 85, s: 14, l: 57 },
    [BEDROOM_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    [BENNETT_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    [LIZ_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    /* Y. */
    [DARK_FLOOR_COLOUR]: { h: 225, s: 25, l: 45 },
    /* W. */
    [SOFT_WALL_COLOUR]: { h: 250, s: 50, l: 75 },
    [BEDROOM_WALL_COLOUR]: { h: 150, s: 50, l: 75 },
    [SCHOOL_WALL_COLOUR]: { h: 211, s: 41, l: 74 },
    [BENNETT_WALL_COLOUR]: { h: 16, s: 28, l: 67 },
    [LIZ_WALL_COLOUR]: { h: 210, s: 28, l: 67 },
    [UNDERGROUND_WALL_COLOUR]: { h: 150, s: 50, l: 75 },
    [CLUB_WALL_COLOUR]: { h: 215, s: 50, l: 75 },
    [INDUSTRIAL_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [FANCY_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    /* X. */
    [EXTERIOR_COLOUR]: { h: 31, s: 16, l: 75 },
    [FAMILY_EXTERIOR_COLOUR]: { h: 220, s: 50, l: 75 },
    [VAN_NUYS_EXTERIOR_COLOUR]: { h: 90, s: 50, l: 75 },
    [BENNETT_EXTERIOR_COLOUR]: { h: 240, s: 50, l: 75 },
    [LIZ_EXTERIOR_COLOUR]: { h: 180, s: 16, l: 75 },
    [BANCROFT_EXTERIOR_COLOUR]: { h: 102, s: 6, l: 68 },
    [CINEMA_EXTERIOR_COLOUR]: { h: 0, s: 50, l: 75 },
    /* Z. */
    [DARK_WALL_COLOUR]: { h: 225, s: 25, l: 45 },
    /* A. */
    [TAIWAN_GATE_COLOUR]: { h: 18, s: 17, l: 46 },
    [BANCROFT_GATE_COLOUR]: { h: 102, s: 4, l: 59 },
    [LIZ_GATE_COLOUR]: { h: 190, s: 17, l: 46 },
    /* P. */
    [PLATFORM_COLOUR]: { h: 13, s: 16, l: 33 },
    [CONCRETE_PLATFORM_COLOUR]: { h: 0, s: 0, l: 65 },
    /* R. */
    [FURNITURE_COLOUR]: { h: 25, s: 44, l: 46 },
    /* U. */
    [ATTIC_COUCH_COLOUR]: { h: 90, s: 50, l: 75 },
    [BENNETT_COUCH_COLOUR]: { h: 90, s: 50, l: 75 },
    [LIZ_COUCH_COLOUR]: { h: 90, s: 50, l: 75 },
    [MIRIAM_COUCH_COLOUR]: { h: 90, s: 50, l: 75 },
    [WAITING_ARMCHAIR_COLOUR]: { h: 90, s: 50, l: 75 },
    [BENNETT_BED_COLOUR]: { h: 4, s: 35, l: 60 },
    [CAPTAIN_BED_COLOUR]: { h: 90, s: 50, l: 75 },
    [HOSPITAL_BED_COLOUR]: { h: 90, s: 50, l: 75 },
    [LIZ_BED_COLOUR]: { h: 90, s: 50, l: 75 },
    /* S. */
    [SEAT_COLOUR]: { h: 25, s: 27, l: 47 }
}
/* eslint-enable object-curly-newline */

export default HSLA_MAP
