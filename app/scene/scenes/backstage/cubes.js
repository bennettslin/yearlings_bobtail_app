import { BACKSTAGE_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    BACKSTAGE_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES
    }

export default CUBES
