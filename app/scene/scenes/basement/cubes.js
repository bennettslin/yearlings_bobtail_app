import {
    BASEMENT_KEY,
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    c,
    f,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    BASEMENT_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k],
                [f, c, c, f],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, f],
                [f, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, f],
                [f, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, f]
            ]
        }
    },
    BASEMENT_BED_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k],
                [f, c, c, f],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, f]
            ]
        }
    },
    BASEMENT_MAGIC_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, 0]
            ]
        }
    },

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES,
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [BASEMENT_MAGIC_KEY]: BASEMENT_MAGIC_CUBES
    }

export default CUBES
