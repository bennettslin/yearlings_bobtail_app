import { WEDDING_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    HILL_COLOUR as H,
    HILL_DARKER_COLOUR as I,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

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
const CUBES = {
    [WEDDING_KEY]: {
        slantDirection: RIGHT,
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
    }
}

export default CUBES
