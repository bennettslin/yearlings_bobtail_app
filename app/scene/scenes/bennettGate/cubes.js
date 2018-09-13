import { BENNETT_GATE_KEY } from 'scene/cubesKeys'

import {
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

/**
 * Gate should match in courtyard.
 */

const
    BENNETT_GATE_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [g, g, g, g, g, g, g, e, e, e, e, g],
                [f],
                [k, k, k, k, k, f],
                [k, k, k, k, k, f],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, 1, 1, 1, 1, g],
                [1]
            ]
        }
    },

    CUBES = {
        [BENNETT_GATE_KEY]: BENNETT_GATE_CUBES
    }

export default CUBES
