import {
    FAMILY_BATHROOM_KEY,
    FAMILY_BATHROOM_OPEN_KEY
} from 'scene/cubesKeys'

import {
    _BC,
    _BF,
    _BW
} from 'scene/hslaKeys'

import {
    f
} from 'scene/cubesConstants'

const
    FAMILY_BATHROOM = {
        // Indoor wall is 7.5'. Raised bathtub.
        ceiling: {
            zIndices: [
                [f]
            ],
            hslaColours: [
                [_BW, _BW, _BC, _BC, _BC, _BC, _BC, _BC, _BC, _BC, _BW, _BW]
            ]
        },
        floor: {
            zIndices: [
                [f, f, f, f, f, f, f, f, f, f, f],
                [f, f, 1, 1, 1, 1, 1, 1, 1, 1, f],
                [f, f, 1, 2, 2, 2, 2, 1, 1, 1, f],
                [f, f, 1, 2, 2, 2, 2, 1, 1, 1, f],
                [f, f, 1, 1, 1, 1, 1, 1, 1, 1, f]
            ],
            hslaColours: [
                [_BW],
                [_BW, _BW, _BF, _BF, _BF, _BF, _BF, _BF, _BF, _BF, _BW, _BW]
            ]
        }
    },

    FAMILY_BATHROOM_OPEN = {
        floor: {
            zIndices: [
                [0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            hslaColours: [
                [_BF]
            ]
        }
    },

    CUBES = {
        [FAMILY_BATHROOM_KEY]: FAMILY_BATHROOM,
        [FAMILY_BATHROOM_OPEN_KEY]: FAMILY_BATHROOM_OPEN
    }

export default CUBES
