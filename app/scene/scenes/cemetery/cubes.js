import { CEMETERY_KEY } from 'scene/cubesKeys'

import {
    HILL_HSLA
} from '../../hslaKeys'

import {
    LEFT
} from 'scene/cubesConstants'

const
    H = HILL_HSLA,

    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [H]
            ],
            zIndices: [
                [0],
                [0],
                [2]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES
