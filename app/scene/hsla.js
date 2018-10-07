import {
    DEFAULT_HSLA,
    STAGE_PLATFORM_HSLA,
    STAGE_FLOOR_HSLA,
    STREET_HSLA,
    SIDEWALK_HSLA,
    GROUND_HSLA,
    LAWN_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    SEAT_HSLA
} from './hslaKeys'

const
    // D.
    DEFAULT = {
        h: 0,
        s: 0,
        l: 100
    },

    // P.
    STAGE_PLATFORM = {
        h: 3,
        s: 13,
        l: 34
    },
    // F.
    STAGE_FLOOR = {
        h: 29,
        s: 65,
        l: 20
    },

    // T.
    STREET = {
        h: 0,
        s: 0,
        l: 25
    },
    // K.
    SIDEWALK = {
        h: 0,
        s: 0,
        l: 75
    },
    // G.
    GROUND = {
        h: 0,
        s: 0,
        l: 25
    },
    // L.
    LAWN = {
        h: 120,
        s: 80,
        l: 75
    },

    // C.
    CEILING = {
        h: 60,
        s: 50,
        l: 75
    },
    // F.
    FLOOR = {
        h: 330,
        s: 25,
        l: 50
    },
    // W.
    WALL = {
        h: 300,
        s: 50,
        l: 75
    },

    // S.
    SEAT = {
        h: 30,
        s: 50,
        l: 75
    },

    HSLA_MAP = {
        [DEFAULT_HSLA]: DEFAULT,

        [STAGE_PLATFORM_HSLA]: STAGE_PLATFORM,
        [STAGE_FLOOR_HSLA]: STAGE_FLOOR,

        [STREET_HSLA]: STREET,
        [SIDEWALK_HSLA]: SIDEWALK,
        [GROUND_HSLA]: GROUND,
        [LAWN_HSLA]: LAWN,

        [CEILING_HSLA]: CEILING,
        [FLOOR_HSLA]: FLOOR,
        [WALL_HSLA]: WALL,

        [SEAT_HSLA]: SEAT
    }

export {
    HSLA_MAP
}
