import {
    CLIFF_KEY
} from '../../cubesKeys'

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

    CLIFF_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, G],
                [I, H, H, I, I, H, H, I, G],
                [H, I, I, H, H, I, I, H, G],
                [H, H, I, I, H, H, I, G],
                [I, I, H, H, I, I, G]
            ],
            zIndices: [
                [0],
                [2, 2, 2, 2, 2, 2, 2, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 0],
                [2, 2, 2, 2, 2, 2, 2, 0],
                [2, 2, 2, 2, 2, 2, 0]
            ]
        }
    },

    CUBES = {
        [CLIFF_KEY]: CLIFF_CUBES
    }

export default CUBES
