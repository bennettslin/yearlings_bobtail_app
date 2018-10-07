import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY
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

    BENNETT_COUCH_CUBES = {
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
                [g, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, g],
                [g, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    BENNETT_COUCH_THOUGHT_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [BENNETT_COUCH_KEY]: BENNETT_COUCH_CUBES,
        [BENNETT_COUCH_THOUGHT_KEY]: BENNETT_COUCH_THOUGHT_CUBES
    }

export default CUBES
