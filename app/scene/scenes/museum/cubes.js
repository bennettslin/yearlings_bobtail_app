import { MUSEUM_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    MUSEUM_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [d, g],
                [d, g],
                [d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [MUSEUM_KEY]: MUSEUM_CUBES
    }

export default CUBES
