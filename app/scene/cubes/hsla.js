import {
    DEFAULT_COLOUR,
    STAGE_PLATFORM_COLOUR,
    STAGE_FLOOR_COLOUR,
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
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR,
    FURNITURE_COLOUR,
    UPHOLSTERY_COLOUR,
    SEAT_COLOUR,
    OCEAN_COLOUR
} from './keys/hsla'

const
    /**
     * D.
     */
    DEFAULT = {
        h: 0,
        s: 0,
        l: 100,
        a: 0.2
    },

    /**
     * P.
     */
    STAGE_PLATFORM = {
        h: 3,
        s: 13,
        l: 34
    },

    /**
     * H.
     */
    HILL = {
        h: 120,
        s: 50,
        l: 50
    },
    /**
     * I.
     */
    HILL_DARKER = {
        h: 120,
        s: 50,
        l: 40
    },
    /**
     * G.
     */
    GROUND = {
        h: 0,
        s: 0,
        l: 25
    },
    /**
     * N.
     */
    SAND = {
        h: 60,
        s: 25,
        l: 90
    },

    /**
     * T.
     */
    STREET = {
        h: 0,
        s: 0,
        l: 50
    },

    /**
     * X.
     */
    CROSSWALK = {
        h: 0,
        s: 0,
        l: 100
    },

    /**
     * V.
     */
    PAVEMENT = {
        h: 0,
        s: 0,
        l: 75
    },
    /**
     * L.
     */
    LAWN = {
        h: 120,
        s: 80,
        l: 75
    },
    /**
     * A.
     */
    GATE = {
        h: 250,
        s: 50,
        l: 75
    },

    /**
     * C.
     */
    CEILING = {
        h: 60,
        s: 50,
        l: 75
    },

    /**
     * F.
     */
    FLOOR = {
        h: 330,
        s: 25,
        l: 50
    },
    STAGE_FLOOR = {
        h: 29,
        s: 65,
        l: 20
    },

    /**
     * W.
     */
    WALL = {
        h: 300,
        s: 50,
        l: 75
    },

    /**
     * E.
     */
    DOOR = {
        h: 330,
        s: 70,
        l: 75
    },

    /**
     * P.
     */
    PLATFORM = {
        h: 30,
        s: 50,
        l: 25
    },
    /**
     * R.
     */
    FURNITURE = {
        h: 330,
        s: 50,
        l: 75
    },
    /**
     * U.
     */
    UPHOLSTERY = {
        h: 90,
        s: 50,
        l: 75
    },
    /**
     * S.
     */
    SEAT = {
        h: 30,
        s: 50,
        l: 75
    },

    /**
     * O.
     */
    OCEAN = {
        h: 210,
        s: 90,
        l: 60
    },

    HSLA_MAP = {
        [DEFAULT_COLOUR]: DEFAULT,

        [STAGE_PLATFORM_COLOUR]: STAGE_PLATFORM,
        [STAGE_FLOOR_COLOUR]: STAGE_FLOOR,

        [HILL_COLOUR]: HILL,
        [HILL_DARKER_COLOUR]: HILL_DARKER,
        [GROUND_COLOUR]: GROUND,
        [SAND_COLOUR]: SAND,

        [STREET_COLOUR]: STREET,
        [CROSSWALK_COLOUR]: CROSSWALK,
        [PAVEMENT_COLOUR]: PAVEMENT,
        [LAWN_COLOUR]: LAWN,
        [GATE_COLOUR]: GATE,

        [CEILING_COLOUR]: CEILING,
        [FLOOR_COLOUR]: FLOOR,
        [WALL_COLOUR]: WALL,
        [DOOR_COLOUR]: DOOR,

        [PLATFORM_COLOUR]: PLATFORM,
        [FURNITURE_COLOUR]: FURNITURE,
        [UPHOLSTERY_COLOUR]: UPHOLSTERY,
        [SEAT_COLOUR]: SEAT,
        [OCEAN_COLOUR]: OCEAN
    }

export default HSLA_MAP
