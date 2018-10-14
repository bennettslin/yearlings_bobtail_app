import { PAMPAS_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,

    PAMPAS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [H, H, I, I, H, H, I, I, H, H, I],
                [I, I, H, H, I, I, H, H, I, I, H]
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
