import { COURTYARD_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */

const
    // Default.
    D = DEFAULT_HSLA,

    COURTYARD_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g, g, d, d, d, d, g, d, d, d, g],
                [g, f, f],
                [e, f, k],
                [e, f, k],
                [g, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g, 1],
                [g, g, 6, 6, 6, 6, g, 1, 1, 1, g],
                [g, 1],
                [1],
                [1],
                [g, 1]
            ]
        }
    },

    CUBES = {
        [COURTYARD_KEY]: COURTYARD_CUBES
    }

export default CUBES
