import { BENNETT_COURTYARD_KEY } from 'scene/cubesKeys'

import {
    d,
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

const
    BENNETT_COURTYARD_CUBES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        ceiling: {
            zIndices: [
                [g],
                [g],
                [g, g, d, d, d, d, d, g, e, e, e, g],
                [f],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 1],
                [g, g, 6, 6, 6, 6, 6, g, 1, 1, 1, g],
                [f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [BENNETT_COURTYARD_KEY]: BENNETT_COURTYARD_CUBES
    }

export default CUBES
