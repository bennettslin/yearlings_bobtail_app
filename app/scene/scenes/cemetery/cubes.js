import { CEMETERY_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA
} from '../../hslaKeys'

import {
    LEFT
} from 'scene/cubesConstants'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,

    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [G],
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
