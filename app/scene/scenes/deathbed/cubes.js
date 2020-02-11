import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    LINOLEUM_FLOOR_COLOUR as F,
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
                [F, D, F, F, F, F, R, G],
                [F, D, D, D, F, F, F, F, G],
                [F, F, D, D, D, D, F, F, G],
                [F, F, F, D, D, F, F, G, G],
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
                [F, D, F, F, F, F, R, G],
                [F, D, D, D, F, F, F, F, G, H],
                [F, F, D, D, D, D, F, F, G, H],
                [F, F, F, D, D, F, F, G, G, H, G],
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
                [F, D, F, F, F, F, R, G],
                [F, D, D, D, F, F, F, F, G, H],
                [F, F, D, D, D, D, F, F, G, H],
                [F, F, F, D, D, F, F, G, G, H, G],
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
