import {
    CLIFF_KEY
} from '../../keys/cubes'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA
} from '../../keys/hsla'

import {
    RIGHT
} from '../../keys/zIndex'

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
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 0]
            ]
        }
    },

    CUBES = {
        [CLIFF_KEY]: CLIFF_CUBES
    }

export default CUBES
