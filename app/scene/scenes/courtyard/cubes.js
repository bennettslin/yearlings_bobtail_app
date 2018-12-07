import { COURTYARD_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    WALL_HSLA,
    DOOR_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    f,
    k
} from '../../zIndexKeys'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,

    COURTYARD_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C, C, W, W, W, W, C, W, W, W, C],
                [C, C, C],
                [A, C, D],
                [A, C, D],
                [C, C, D]
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
                [W],
                [W, W, W, W, W, W, W, E, E, E, W],
                [A, V],
                [E, V],
                [E, V],
                [A, V]
            ],
            zIndices: [
                [f],
                [f, f, 6, 6, 6, 6, f, d, d, d, f],
                [f, 1],
                [d, 1],
                [d, 1],
                [f, 1]
            ]
        }
    },

    CUBES = {
        [COURTYARD_KEY]: COURTYARD_CUBES
    }

export default CUBES
