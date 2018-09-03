import { LOGUE_KEY } from 'scene/cubesKeys'

import {
    _SP,
    _ST
} from 'scene/hslaKeys'

const
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

    CUBES = {
        [LOGUE_KEY]: LOGUE
    }

export default CUBES
