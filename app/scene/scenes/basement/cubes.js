import {
    BASEMENT_KEY,
    BASEMENT_BED_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BASEMENT_CUBES = {
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, 5, 5, g, g, g, g, g, g, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, g],
                [g, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, g],
                [g, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, g],
                [g, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, g]
            ]
        }
    },
    BASEMENT_BED_CUBES = {
        // Basement wall is 6', depth is 2.5'. Bed is 1'.
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, 5, 5, g, g, g, g, g, g, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 4, 4, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 2, 2, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, g]
            ]
        }
    },

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES,
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES
    }

export default CUBES
