import { DISHROOM_KEY } from '../../cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA,
    FURNITURE_HSLA
} from '../../hslaKeys'

import {
    b,
    f,
    g
} from '../../zIndexKeys'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,
    R = FURNITURE_HSLA,

    DISHROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, W, W, W, W, W, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g, g, f, f, f, f, f, g, g, f, f, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, W, E, E, W],
                [W, F, R, R, R, R, R, F, W, P, P, W],
                [W, F, R, R, R, R, R, F, W, P, P, W],
                [W, F, F, F, F, F, F, F, W, P, P, W],
                [W, F, F, F, F, F, F, F, W, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g, g, b, b, b, b, b, g, g, f, f, g],
                [g, 1, 7, 7, 7, 7, 7, 1, g, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, g, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, g, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, g, 2, 2, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [DISHROOM_KEY]: DISHROOM_CUBES
    }

export default CUBES
