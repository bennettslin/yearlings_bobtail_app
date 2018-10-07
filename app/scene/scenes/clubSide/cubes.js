import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CLUB_SIDE_CROWD_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [e, g],
                [e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 1]
            ]
        }
    },

    CUBES = {
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES,
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES
    }

export default CUBES
