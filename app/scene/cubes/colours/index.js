export const DEFAULT_COLOUR = 'default'
export const GRASS_COLOUR = 'hill'
export const GRASS_DARKER_COLOUR = 'hillDarker'
export const GROUND_COLOUR = 'ground'
export const SAND_COLOUR = 'sand'
export const STREET_COLOUR = 'street'
export const CROSSWALK_COLOUR = 'crosswalk'
export const PAVEMENT_COLOUR = 'pavement'
export const TAIWAN_GATE_COLOUR = 'taiwanGate'
export const BANCROFT_GATE_COLOUR = 'bancroftGate'
export const LIZ_GATE_COLOUR = 'lizGate'
export const CEILING_COLOUR = 'ceiling'
export const ROOF_COLOUR = 'roof'
export const FLOOR_COLOUR = 'floor'
export const LINOLEUM_FLOOR_COLOUR = 'linoleumFloor'
export const BEDROOM_FLOOR_COLOUR = 'bedroomFloor'
export const BENNETT_FLOOR_COLOUR = 'bennettFloor'
export const LIZ_FLOOR_COLOUR = 'lizFloor'
export const LINOLEUM_FLOOR_DARK_COLOUR = 'linoleumFloorDark'
export const BEDROOM_FLOOR_DARK_COLOUR = 'bedroomFloorDark'
export const BENNETT_FLOOR_DARK_COLOUR = 'bennettFloorDark'
export const LIZ_FLOOR_DARK_COLOUR = 'lizFloorDark'
export const STAGE_FLOOR_COLOUR = 'stageFloor'
export const BATHROOM_WALL_COLOUR = 'bathroomWall'
export const BEDROOM_WALL_COLOUR = 'bedroomWall'
export const TAIWANESE_WALL_COLOUR = 'taiwaneseWall'
export const VAN_NUYS_WALL_COLOUR = 'vanNuysWall'
export const BENNETT_WALL_COLOUR = 'bennettWall'
export const LIZ_WALL_COLOUR = 'lizWall'
export const BASEMENT_WALL_COLOUR = 'basementWall'
export const CLUB_WALL_COLOUR = 'clubWall'
export const ATTIC_WALL_COLOUR = 'atticWall'
export const BACKSTAGE_WALL_COLOUR = 'backstageWall'
export const DISHROOM_WALL_COLOUR = 'dishroomWall'
export const MUSEUM_WALL_COLOUR = 'museumWall'
export const STEAM_TUNNEL_WALL_COLOUR = 'steamTunnelWall'
export const WAITING_ROOM_WALL_COLOUR = 'waitingRoomWall'
export const EXTERIOR_COLOUR = 'taiwaneseExterior'
export const FAMILY_EXTERIOR_COLOUR = 'familyExterior'
export const VAN_NUYS_EXTERIOR_COLOUR = 'vanNuysExterior'
export const BENNETT_EXTERIOR_COLOUR = 'bennettExterior'
export const LIZ_EXTERIOR_COLOUR = 'lizExterior'
export const BANCROFT_EXTERIOR_COLOUR = 'bancroftExterior'
export const CINEMA_EXTERIOR_COLOUR = 'cinemaExterior'
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
    [DEFAULT_COLOUR]: { h: 0, s: 0, l: 20 },
    /* H. */
    [GRASS_COLOUR]: { h: 91, s: 46, l: 42 },
    /* I. */
    [GRASS_DARKER_COLOUR]: { h: 93, s: 74, l: 27 },
    /* G. */
    [GROUND_COLOUR]: { h: 0, s: 0, l: 25 },
    /* N. */
    [SAND_COLOUR]: { h: 35, s: 51, l: 74 },
    /* T. */
    [STREET_COLOUR]: { h: 120, s: 1, l: 30 },
    /* X. */
    [CROSSWALK_COLOUR]: { h: 48, s: 6, l: 82 },
    /* V. */
    [PAVEMENT_COLOUR]: { h: 0, s: 0, l: 51 },
    /* A. */
    [TAIWAN_GATE_COLOUR]: { h: 250, s: 50, l: 75 },
    [BANCROFT_GATE_COLOUR]: { h: 120, s: 50, l: 75 },
    [LIZ_GATE_COLOUR]: { h: 150, s: 50, l: 75 },
    /* C. */
    [CEILING_COLOUR]: { h: 60, s: 50, l: 75 },
    [ROOF_COLOUR]: { h: 14, s: 24, l: 51 },
    /* F. */
    [FLOOR_COLOUR]: { h: 330, s: 25, l: 50 },
    [STAGE_FLOOR_COLOUR]: { h: 29, s: 65, l: 20 },
    [LINOLEUM_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [BEDROOM_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [BENNETT_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    [LIZ_FLOOR_COLOUR]: { h: 225, s: 25, l: 50 },
    /* L */
    [LINOLEUM_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    [BEDROOM_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    [BENNETT_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    [LIZ_FLOOR_DARK_COLOUR]: { h: 215, s: 25, l: 50 },
    /* W. */
    [BATHROOM_WALL_COLOUR]: { h: 250, s: 50, l: 75 },
    [BEDROOM_WALL_COLOUR]: { h: 150, s: 50, l: 75 },
    [TAIWANESE_WALL_COLOUR]: { h: 300, s: 50, l: 75 },
    [VAN_NUYS_WALL_COLOUR]: { h: 120, s: 50, l: 75 },
    [BENNETT_WALL_COLOUR]: { h: 270, s: 50, l: 75 },
    [LIZ_WALL_COLOUR]: { h: 210, s: 50, l: 75 },
    [BASEMENT_WALL_COLOUR]: { h: 150, s: 50, l: 75 },
    [CLUB_WALL_COLOUR]: { h: 215, s: 50, l: 75 },
    [ATTIC_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [BACKSTAGE_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [DISHROOM_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [MUSEUM_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [STEAM_TUNNEL_WALL_COLOUR]: { h: 0, s: 50, l: 75 },
    [WAITING_ROOM_WALL_COLOUR]: { h: 0, s: 50, l: 75 },

    [EXTERIOR_COLOUR]: { h: 31, s: 16, l: 75 },
    [FAMILY_EXTERIOR_COLOUR]: { h: 220, s: 50, l: 75 },
    [VAN_NUYS_EXTERIOR_COLOUR]: { h: 90, s: 50, l: 75 },
    [BENNETT_EXTERIOR_COLOUR]: { h: 240, s: 50, l: 75 },
    [LIZ_EXTERIOR_COLOUR]: { h: 180, s: 50, l: 75 },
    [BANCROFT_EXTERIOR_COLOUR]: { h: 150, s: 50, l: 75 },
    [CINEMA_EXTERIOR_COLOUR]: { h: 0, s: 50, l: 75 },

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
    [OCEAN_COLOUR]: { h: 204, s: 61, l: 43 }
}
/* eslint-enable object-curly-newline */

export default HSLA_MAP
