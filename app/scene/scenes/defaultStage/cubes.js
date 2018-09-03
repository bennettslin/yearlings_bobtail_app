import { DEFAULT_STAGE_KEY } from 'scene/cubesKeys'

import {
    _TS
} from 'scene/hslaKeys'

import {
    k
} from 'scene/cubesConstants'

const
    DEFAULT_STAGE = {
        ceiling: {
            zIndices: [
                [k]
            ],
            hslaColours: [
                [_TS]
            ]
        },
        floor: {
            zIndices: [
                [0]
            ],
            hslaColours: [
                [_TS]
            ]
        }
    },

    CUBES = {
        [DEFAULT_STAGE_KEY]: DEFAULT_STAGE
    }

export default CUBES
