import { WEDDING_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from '../../zIndexKeys'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,
    P = PLATFORM_HSLA,

    WEDDING_CUBES = {
        slantDirection: RIGHT,
        /**
         * ...........-..
         * .........----.
         * .......------.
         * .....---------
         * ...-----------
         * .------------.
         * -----------...
         * .--------.....
         * .------.......
         * ..---.........
         * ..-...........
         */
        floor: {
            hslaColours: [
                [G],
                [P, P, I, H, H, I, I, H, H, I, I, H],
                [P, P, P, I, I, H, H, I, I, H, H, I],
                [P, P, P, H, H, I, I, H, H, I, I, H],
                [H, P, I, I, H, H, I, I, H, H, I],
                [I, I, H, H, I, I, H, H, I, I, H]
            ],
            zIndices: [
                [0],
                [4, 4, 3],
                [4, 4, 4, 3],
                [4, 4, 4, 3],
                [3, 4, 3],
                [3]
            ]
        }
    },

    CUBES = {
        [WEDDING_KEY]: WEDDING_CUBES
    }

export default CUBES
