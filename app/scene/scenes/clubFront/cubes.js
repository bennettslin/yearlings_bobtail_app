import {
    CLUB_FRONT_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CLUB_FRONT_CUBES = {
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
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [CLUB_FRONT_KEY]: CLUB_FRONT_CUBES
    }

export default CUBES
