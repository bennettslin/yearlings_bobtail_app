import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BENNETT_COUCH_CUBES = {
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
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
