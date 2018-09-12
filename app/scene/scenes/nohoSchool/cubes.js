import { NOHO_SCHOOL_KEY } from 'scene/cubesKeys'

import {
    _BL,
    _SF,
    _SB
} from 'scene/hslaKeys'

const
    NOHO_SCHOOL = {
        floor: {
            zIndices: [
                [0],
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
                [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _SF, _SF, _SF, _BL]
            ]
        }
    },

    CUBES = {
        [NOHO_SCHOOL_KEY]: NOHO_SCHOOL
    }

export default CUBES
