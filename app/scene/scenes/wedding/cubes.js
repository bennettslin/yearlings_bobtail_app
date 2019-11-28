import { WEDDING_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    HILL_COLOUR,
    HILL_DARKER_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/colours'

import {
    RIGHT
} from '../../cubes/zIndices'

const
    G = GROUND_COLOUR,
    H = HILL_COLOUR,
    I = HILL_DARKER_COLOUR,
    P = PLATFORM_COLOUR,

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
