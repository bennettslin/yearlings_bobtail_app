import { NOHO_HOUSES_KEY } from 'scene/cubesKeys'

import {
    _LW,
    _PV
} from 'scene/hslaKeys'

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

    CUBES = {
        [NOHO_HOUSES_KEY]: NOHO_HOUSES
    }

export default CUBES
