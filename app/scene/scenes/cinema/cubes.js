import {
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA,
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
    D = DEFAULT_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,

    CINEMA_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, C, W, W, W, W, W, W, C],
                [C],
                [C],
                [C],
                [C],
                [D]
            ],
            zIndices: [
                [f, f, f, e, e, e, e, e, e, f],
                [f],
                [f],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, F, F, F, F, F, F, W],
                [W, W, W, F, F, F, F, F, F, W],
                [W, W, W, F, F, F, F, F, F, W],
                [V],
                [V],
                [T]
            ],
            zIndices: [
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [1],
                [1],
                [0]
            ]
        }
    },
    CINEMA_STREET_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, D],
                [C, C, C, C, D],
                [C, C, C, C, D],
                [C, C, C, C, D],
                [D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, V, V, T],
                [W, W, W, V, V, T],
                [V, V, V, V, V, T],
                [V, V, V, V, V, T],
                [T]
            ],
            zIndices: [
                [0],
                [f, f, f, 1, 1, 0],
                [f, f, f, 1, 1, 0],
                [1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [CINEMA_KEY]: CINEMA_CUBES,
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES
    }

export default CUBES
