/* eslint-disable object-curly-newline */
import {
    DEFAULT_COLOUR,
    STAGE_PLATFORM_COLOUR,
    HILL_COLOUR,
    HILL_DARKER_COLOUR,
    GROUND_COLOUR,
    SAND_COLOUR,
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    PAVEMENT_COLOUR,
    LAWN_COLOUR,
    GATE_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    STAGE_FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR,
    FURNITURE_COLOUR,
    UPHOLSTERY_COLOUR,
    SEAT_COLOUR,
    OCEAN_COLOUR
} from './colours'

const HSLA_MAP = {
    // D.
    [DEFAULT_COLOUR]: { h: 0, s: 0, l: 100 },
    // H.
    [HILL_COLOUR]: { h: 120, s: 50, l: 50 },
    // I.
    [HILL_DARKER_COLOUR]: { h: 120, s: 50, l: 40 },
    // G.
    [GROUND_COLOUR]: { h: 0, s: 0, l: 25 },
    // N.
    [SAND_COLOUR]: { h: 60, s: 25, l: 90 },
    // T.
    [STREET_COLOUR]: { h: 0, s: 0, l: 50 },
    // X.
    [CROSSWALK_COLOUR]: { h: 0, s: 0, l: 100 },
    // V.
    [PAVEMENT_COLOUR]: { h: 0, s: 0, l: 75 },
    // L.
    [LAWN_COLOUR]: { h: 120, s: 80, l: 75 },
    // A.
    [GATE_COLOUR]: { h: 250, s: 50, l: 75 },
    // C.
    [CEILING_COLOUR]: { h: 60, s: 50, l: 75 },
    // F.
    [FLOOR_COLOUR]: { h: 330, s: 25, l: 50 },
    [STAGE_FLOOR_COLOUR]: { h: 29, s: 65, l: 20 },
    // W.
    [WALL_COLOUR]: { h: 300, s: 50, l: 75 },
    // E.
    [DOOR_COLOUR]: { h: 330, s: 70, l: 75 },
    // P.
    [PLATFORM_COLOUR]: { h: 30, s: 50, l: 25 },
    [STAGE_PLATFORM_COLOUR]: { h: 3, s: 13, l: 34 },
    // R.
    [FURNITURE_COLOUR]: { h: 330, s: 50, l: 75 },
    // U.
    [UPHOLSTERY_COLOUR]: { h: 90, s: 50, l: 75 },
    // S.
    [SEAT_COLOUR]: { h: 30, s: 50, l: 75 },
    // O.
    [OCEAN_COLOUR]: { h: 210, s: 90, l: 60 }
}

export default HSLA_MAP
