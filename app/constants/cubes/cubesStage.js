import {
    DEFAULT_STAGE_KEY,
    LOGUE_KEY
} from '../cubesKeys'

import {
    _TEST_KEY
} from '../hslaKeys'

import {
    k
} from './cubesConstants'

const
    DEFAULT_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ],
            hslaColours: [
                [_TEST_KEY]
            ]
        },
        floor: {
            zIndices: [
                [0]
            ],
            hslaColours: [
                [_TEST_KEY]
            ]
        }
    },

    LOGUE_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES_STAGE = {
        [DEFAULT_STAGE_KEY]: DEFAULT_STAGE_CUBES,
        [LOGUE_KEY]: LOGUE_CUBES
    }

export {
    CUBES_STAGE
}
