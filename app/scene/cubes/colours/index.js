export const DEFAULT_COLOUR = 'default'
export const HILL_COLOUR = 'hill'
export const HILL_DARKER_COLOUR = 'hillDarker'
export const GROUND_COLOUR = 'ground'
export const SAND_COLOUR = 'sand'
export const STREET_COLOUR = 'street'
export const CROSSWALK_COLOUR = 'crosswalk'
export const PAVEMENT_COLOUR = 'pavement'
export const LAWN_COLOUR = 'lawn'
export const GATE_COLOUR = 'gate'
export const CEILING_COLOUR = 'ceiling'
export const FLOOR_COLOUR = 'floor'
export const STAGE_FLOOR_COLOUR = 'stageFloor'
export const WALL_COLOUR = 'wall'
export const DOOR_COLOUR = 'door'
export const PLATFORM_COLOUR = 'platform'
export const STAGE_PLATFORM_COLOUR = 'stagePlatform'
export const FURNITURE_COLOUR = 'furniture'
export const UPHOLSTERY_COLOUR = 'upholstery'
export const SEAT_COLOUR = 'seat'
export const OCEAN_COLOUR = 'ocean'

/* eslint-disable object-curly-newline */
const HSLA_MAP = {
    /* D. */
    [DEFAULT_COLOUR]: { h: 0, s: 0, l: 100 },
    /* H. */
    [HILL_COLOUR]: { h: 120, s: 50, l: 50 },
    /* I. */
    [HILL_DARKER_COLOUR]: { h: 120, s: 50, l: 40 },
    /* G. */
    [GROUND_COLOUR]: { h: 0, s: 0, l: 25 },
    /* N. */
    [SAND_COLOUR]: { h: 60, s: 25, l: 90 },
    /* T. */
    [STREET_COLOUR]: { h: 0, s: 0, l: 50 },
    /* X. */
    [CROSSWALK_COLOUR]: { h: 0, s: 0, l: 100 },
    /* V. */
    [PAVEMENT_COLOUR]: { h: 0, s: 0, l: 75 },
    /* L. */
    [LAWN_COLOUR]: { h: 120, s: 80, l: 75 },
    /* A. */
    [GATE_COLOUR]: { h: 250, s: 50, l: 75 },
    /* C. */
    [CEILING_COLOUR]: { h: 60, s: 50, l: 75 },
    /* F. */
    [FLOOR_COLOUR]: { h: 330, s: 25, l: 50 },
    [STAGE_FLOOR_COLOUR]: { h: 29, s: 65, l: 20 },
    /* W. */
    [WALL_COLOUR]: { h: 300, s: 50, l: 75 },
    /* E. */
    [DOOR_COLOUR]: { h: 330, s: 70, l: 75 },
    /* P. */
    [PLATFORM_COLOUR]: { h: 30, s: 50, l: 25 },
    [STAGE_PLATFORM_COLOUR]: { h: 3, s: 13, l: 34 },
    /* R. */
    [FURNITURE_COLOUR]: { h: 330, s: 50, l: 75 },
    /* U. */
    [UPHOLSTERY_COLOUR]: { h: 90, s: 50, l: 75 },
    /* S. */
    [SEAT_COLOUR]: { h: 30, s: 50, l: 75 },
    /* O. */
    [OCEAN_COLOUR]: { h: 210, s: 90, l: 60 }
}
/* eslint-enable object-curly-newline */

export default HSLA_MAP
