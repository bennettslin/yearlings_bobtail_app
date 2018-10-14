import { OUTDOOR_WEDDING_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from '../../cubesConstants'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,

    OUTDOOR_WEDDING_CUBES = {
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
        [OUTDOOR_WEDDING_KEY]: OUTDOOR_WEDDING_CUBES
    }

export default CUBES
