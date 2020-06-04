import { RIGHT } from '../../../../../app/constants/scene/cubes'
import { WEDDING_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    PLATFORM_COLOUR as P
} from '../../../../../app/constants/scene/cubes/colours'

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
export default {
    [WEDDING_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [P, P, H],
                [P, P, P, H],
                [P, P, P, H],
                [H, P, H],
                [H]
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
