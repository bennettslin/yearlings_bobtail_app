import { CEMETERY_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA
} from '../../hsla/keys'

import {
    LEFT
} from '../../zIndexKeys'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,

    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [H, H, I, I, H, H, I, I, H, H, I, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, I, H, H, I, I, H, H, I, I, H]
            ],
            zIndices: [
                [0],
                [3]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES
