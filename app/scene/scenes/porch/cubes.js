import { PORCH_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    LAWN_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    // Lawn.
    L = LAWN_HSLA,

    // Ceiling.
    C = CEILING_HSLA,

    // Floor.
    F = FLOOR_HSLA,

    // Wall.
    W = WALL_HSLA,

    PORCH_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, C],
                [C],
                [D, C, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, f],
                [f],
                [k, f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [L, L, F, F, F, F, F, F, F, F, L],
                [L, L, F, F, F, F, F, F, F, F, L],
                [L, L, F, F, F, F, F, F, F, F, L],
                [L, L, W, F, F, F, F, F, F, W, L],
                [L]
            ],
            zIndices: [
                [f, f, f, f, f, 3, 3, f, f, f],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, f, 2, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [PORCH_KEY]: PORCH_CUBES
    }

export default CUBES
