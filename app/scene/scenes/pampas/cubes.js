import { PAMPAS_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,

    PAMPAS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H]
            ],
            zIndices: [
                [0],
                [2]
            ]
        }
    },

    CUBES = {
        [PAMPAS_KEY]: PAMPAS_CUBES
    }

export default CUBES
