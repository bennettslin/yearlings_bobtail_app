import {
    NOHO_NEIGHBOURHOOD_KEY,
    NOHO_SCHOOL_KEY,
    NOHO_BATHROOM_KEY,
    NOHO_BATHROOM_OPEN_KEY
} from '../cubesKeys'

import {
    _LW,
    _PV,
    _BL,
    _SF,
    _SB,
    _BC,
    _BF,
    _BW
} from '../hslaKeys'

import {
    f
} from './cubesConstants'

const

    NOHO_HOUSES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1],
                [1]
            ],
            hslaColours: [
                [_LW],
                [_LW],
                [_LW],
                [_LW],
                [_PV],
                [_PV]
            ]
        }
    },

    NOHO_SCHOOL = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1]
            ],
            hslaColours: [
                [_BL],
                [_BL],
                [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _SF, _SF, _SF, _BL],
                [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _SF, _SF, _SB, _BL],
                [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _SF, _SF, _SB, _BL],
                [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _SF, _SF, _SF, _BL],
            ]
        }
    },

    NOHO_BATHROOM = {
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

    NOHO_BATHROOM_OPEN = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 1, 1, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 1],
                [1]
            ],
            hslaColours: [
                [_BF]
            ]
        }
    },

    CUBES_NOHO = {
        [NOHO_NEIGHBOURHOOD_KEY]: NOHO_HOUSES,
        [NOHO_SCHOOL_KEY]: NOHO_SCHOOL,
        [NOHO_BATHROOM_KEY]: NOHO_BATHROOM,
        [NOHO_BATHROOM_OPEN_KEY]: NOHO_BATHROOM_OPEN,
    }

export {
    CUBES_NOHO
}
