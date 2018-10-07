import { CLUB_LOADING } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    d,
    f,
    k
} from 'scene/cubesConstants'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,

    CLUB_LOADING_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, C, W, W, W, C],
                [C],
                [D]
            ],
            zIndices: [
                [f],
                [f],
                [f, f, f, f, d, d, d, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V, W],
                [V, W, F],
                [V, W, W, W, F, F, F, W],
                [V]
            ],
            zIndices: [
                [1, f],
                [1, f, 1],
                [1, f, f, f, 1, 1, 1, f],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_LOADING]: CLUB_LOADING_CUBES
    }

export default CUBES
