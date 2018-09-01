import {
    DEFAULT_STAGE_KEY,
    LOGUE_KEY
} from '../cubesKeys'

import {
    _TS,
    _SP,
    _ST
} from '../hslaKeys'

import {
    k
} from './cubesConstants'

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

    LOGUE = {
        floor: {
            zIndices: [
                [0],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ],
            hslaColours: [
                [_ST],
                [_ST, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _ST],
                [_ST, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _ST],
                [_ST, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _SP, _ST],
                [_ST]
            ]
        }
    },

CUBES_STAGE = {
    [DEFAULT_STAGE_KEY]: DEFAULT_STAGE,
    [LOGUE_KEY]: LOGUE
}

export {
    CUBES_STAGE
}
