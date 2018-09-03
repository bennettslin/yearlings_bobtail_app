import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from 'scene/cubesKeys'

import {
    g,
    k
} from 'scene/cubesConstants'

const
    LIZ_COUCH_CUBES = {
        // Indoor wall is 7.5'.
        ceiling: {
            zIndices: [
                [g, k, k, k, k, k, k, k, k, k, k, g]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [g, g, g, g, g, 7, 7, 7, 7, 7, g, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_THOUGHT_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 7, 3, 3, 1]
            ]
        }
    },

    CUBES = {
        [LIZ_COUCH_KEY]: LIZ_COUCH_CUBES,
        [LIZ_COUCH_THOUGHT_KEY]: LIZ_COUCH_THOUGHT_CUBES
    }

export default CUBES
