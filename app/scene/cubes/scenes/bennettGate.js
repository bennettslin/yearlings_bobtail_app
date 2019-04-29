import { BENNETT_GATE_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    DOOR_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    f,
    g,
    k
} from '../../zIndexKeys'

/**
 * Gate should match in courtyard.
 */

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    E = DOOR_HSLA,

    BENNETT_GATE_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, C, C, A, A, A, C, C],
                [C],
                [D, D, D, D, D, C],
                [D, D, D, D, D, C],
                [D]
            ],
            zIndices: [
                [k],
                [g, g, g, g, g, g, g, e, e, e, g, g],
                [f],
                [k, k, k, k, k, f],
                [k, k, k, k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V],
                [A, A, A, A, A, A, A, E, E, E, A, A],
                [V]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, d, d, d, g, g],
                [1]
            ]
        }
    },

    CUBES = {
        [BENNETT_GATE_KEY]: BENNETT_GATE_CUBES
    }

export default CUBES
