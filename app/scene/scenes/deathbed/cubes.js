import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    GRASS_COLOUR as H,
    GRASS_DARKER_COLOUR as I,
    LINOLEUM_FLOOR_COLOUR as F,
    PLATFORM_COLOUR as P,
    UPHOLSTERY_COLOUR as U,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

/**
 * ...........-..
 * .........----.
 * .......----@@.
 * .....--*--@@@-
 * ...--****-@@--
 * .--******----.
 * -*@@@@@**--...
 * .*@@@@@*-.....
 * .******.......
 * ..***.........
 * ..*...........
 */
const CUBES = {
    [EL_CERRITO_DEATHBED_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, R, G],
                [F, U, U, U, F, F, F, F, G],
                [F, F, U, U, U, U, F, F, G],
                [F, F, F, U, U, F, F, G, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 4, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0],
                [1, 1, 5, 5, 5, 5, 1, 1, 0],
                [1, 1, 1, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    [EL_CERRITO_TENNIS_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, R, G],
                [F, U, U, U, F, F, F, F, G, P],
                [F, F, U, U, U, U, F, F, G, P],
                [F, F, F, U, U, F, F, G, G, P, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 4, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0],
                [1, 1, 5, 5, 5, 5, 1, 1, 0],
                [1, 1, 1, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    [CLIFF_DEATHBED_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, R, G],
                [F, U, U, U, F, F, F, F, G, H, H, I],
                [F, F, U, U, U, U, F, F, G, I, I, H],
                [F, F, F, U, U, F, F, G, G, H, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 4, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0, 3],
                [1, 1, 5, 5, 5, 5, 1, 1, 0, 3],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 3, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES
