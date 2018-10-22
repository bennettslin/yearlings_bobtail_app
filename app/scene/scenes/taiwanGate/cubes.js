import { TAIWAN_GATE_KEY } from '../../cubesKeys'

import {
    STREET_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    WALL_HSLA,
} from '../../hslaKeys'

import {
    d,
    g
} from '../../zIndexKeys'

const
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    W = WALL_HSLA,

    TAIWAN_GATE_CUBES = {
        floor: {
            hslaColours: [
                [T],
                [W, W, W, V, A, V, T, T, T, V, V, V],
                [W, W, W, V, A, V, T, T, T, T, V, V],
                [V, V, V, V, A, V, T],
                [A, V, V, V, A, V, T],
                [V, V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [g, g, g, 1, d, 1, 0, 0, 0, 1, 1, 1],
                [g, g, g, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, d, 1, 0],
                [d, 1, 1, 1, d, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES
    }

export default CUBES
