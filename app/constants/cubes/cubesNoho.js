import {
    NOHO_NEIGHBOURHOOD_KEY,
    ELEMENTARY_SCHOOL_KEY,
} from '../cubesKeys'

import {
    _LW,
    _PV,
    _BL,
    _SF,
    _SB
} from '../hslaKeys'

const

    NOHO_HOUSES_CUBES = {
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

    ELEMENTARY_SCHOOL_CUBES = {
        // Raised nurse's office bench is 1.5'.
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

    CUBES_NOHO = {
        [NOHO_NEIGHBOURHOOD_KEY]: NOHO_HOUSES_CUBES,
        [ELEMENTARY_SCHOOL_KEY]: ELEMENTARY_SCHOOL_CUBES
    }

export {
    CUBES_NOHO
}
