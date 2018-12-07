import { VAN_NUYS_HALLWAY_KEY } from '../../cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from '../../zIndexKeys'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    S = SEAT_HSLA,

    VAN_NUYS_HALLWAY_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [C, C, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, d, d, d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, W, E, E, E, W, W, W, W, W, W, W],
                [W, F, F, F, F, F, S, S, S, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 7, 7, 7, g, g, g, g, g, g, g],
                [g, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_HALLWAY_KEY]: VAN_NUYS_HALLWAY_CUBES
    }

export default CUBES
