import { CINEMA_STREET_KEY } from '../../scenes/keys'

import {
    DEFAULT_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    WALL_HSLA
} from '../keys/hsla'

import {
    f,
    k
} from '../keys/zIndex'

const
    D = DEFAULT_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,

    CINEMA_STREET_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, V],
                [W, W, W, V, V, T, T, T, V],
                [W, W, W, V, V, T, T, T, T, V],
                [V, V, V, V, V, T, T, T, T, T, V],
                [V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [f, f, f, 1],
                [f, f, f, 1, 1, 0, 0, 0, 1],
                [f, f, f, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES
    }

export default CUBES
