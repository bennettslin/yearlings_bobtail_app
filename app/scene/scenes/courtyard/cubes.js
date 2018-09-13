import { COURTYARD_KEY } from 'scene/cubesKeys'

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
    COURTYARD_CUBES = {
        ceiling: {
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
