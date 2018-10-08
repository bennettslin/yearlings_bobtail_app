import { MUSEUM_KEY } from 'scene/cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,

    MUSEUM_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [W, C],
                [W, C],
                [W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [d, g],
                [d, g],
                [d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [MUSEUM_KEY]: MUSEUM_CUBES
    }

export default CUBES
