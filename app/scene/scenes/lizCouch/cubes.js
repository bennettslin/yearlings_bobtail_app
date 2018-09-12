import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from 'scene/cubesKeys'

import {
    d,
    f,
    g,
    k
} from 'scene/cubesConstants'

/**
 * Blinds and gate should match in lizGate.
 * Couch should match in snowglobesFuture.
 */

const
    LIZ_COUCH_CUBES = {
        ceiling: {
            zIndices: [
                [f],
                [g, g, g, g, d, d, d, d, d, g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g],
            ]
        },
        floor: {
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_THOUGHT_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [LIZ_COUCH_KEY]: LIZ_COUCH_CUBES,
        [LIZ_COUCH_THOUGHT_KEY]: LIZ_COUCH_THOUGHT_CUBES
    }

export default CUBES
