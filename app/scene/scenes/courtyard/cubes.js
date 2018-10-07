import { COURTYARD_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    f,
    k
} from 'scene/cubesConstants'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,

    COURTYARD_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C, C, W, W, W, W, C, W, W, W, C],
                [C, C, C],
                [A, C, D],
                [A, C, D],
                [C, C, D],
            ],
            zIndices: [
                [f],
                [f, f, d, d, d, d, f, d, d, d, f],
                [f, f, f],
                [e, f, k],
                [e, f, k],
                [f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [W, W, W, W, W, W, W, F, F, F, W],
                [A, V],
                [V],
                [V],
                [A, V]
            ],
            zIndices: [
                [f, 1],
                [f, f, 6, 6, 6, 6, f, 1, 1, 1, f],
                [f, 1],
                [1],
                [1],
                [f, 1]
            ]
        }
    },

    CUBES = {
        [COURTYARD_KEY]: COURTYARD_CUBES
    }

export default CUBES
