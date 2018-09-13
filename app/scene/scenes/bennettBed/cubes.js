import { BENNETT_BED_KEY } from 'scene/cubesKeys'

import {
    d,
    f,
    g
} from 'scene/cubesConstants'

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */

const
    BENNETT_BED_CUBES = {
        ceiling: {
            zIndices: [
                [f],
                [f],
                [g, g, d, d, d, g, d, d, d, d, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g]
            ]
        }
    },

    CUBES = {
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES
    }

export default CUBES
