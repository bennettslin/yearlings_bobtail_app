import {
    DEFAULT_HSLA,
    STAGE_PLATFORM_HSLA,
    STAGE_FLOOR_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA,
    GROUND_HSLA,
    STREET_HSLA,
    CROSSWALK_HSLA,
    PAVEMENT_HSLA,
    LAWN_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from './hslaKeys'

const
    /**
     * D.
     */
    DEFAULT = {
        h: 0,
        s: 0,
        l: 100
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

    HSLA_MAP = {
        [DEFAULT_HSLA]: DEFAULT,

        [STAGE_PLATFORM_HSLA]: STAGE_PLATFORM,
        [STAGE_FLOOR_HSLA]: STAGE_FLOOR,

        [HILL_HSLA]: HILL,
        [HILL_DARKER_HSLA]: HILL_DARKER,
        [GROUND_HSLA]: GROUND,

        [STREET_HSLA]: STREET,
        [CROSSWALK_HSLA]: CROSSWALK,
        [PAVEMENT_HSLA]: PAVEMENT,
        [LAWN_HSLA]: LAWN,
        [GATE_HSLA]: GATE,

        [CEILING_HSLA]: CEILING,
        [FLOOR_HSLA]: FLOOR,
        [WALL_HSLA]: WALL,

        [PLATFORM_HSLA]: PLATFORM,
        [FURNITURE_HSLA]: FURNITURE,
        [UPHOLSTERY_HSLA]: UPHOLSTERY,
        [SEAT_HSLA]: SEAT
    }

export {
    HSLA_MAP
}
