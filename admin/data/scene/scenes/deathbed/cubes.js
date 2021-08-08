import { RIGHT } from '../../../../../src/constants/scene/cubes'
import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    TENNIS_COLOUR as V,
    CROSSWALK_COLOUR as K,
    GRASS_COLOUR as H,
    STREET_COLOUR as T,
    DEATHBED_FLOOR_COLOUR as F,
} from '../../../../../src/constants/scene/cubes/colours'

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
export default {
    [EL_CERRITO_DEATHBED_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, D, F, F, F, F, T, T, G],
                [F, D, D, D, F, F, D, F, T, T, G],
                [F, F, D, D, D, D, F, F, G, G, T],
                [F, F, F, D, D, F, F, G, G, G, G, T],
                [F, F, F, F, F, F, G],
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 2, 2, 0],
                [1, 5, 5, 5, 1, 1, 4, 1, 2, 2, 0],
                [1, 1, 5, 5, 5, 5, 1, 1, 0, 0, 2],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 0, 0, 2],
                [1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
    [EL_CERRITO_TENNIS_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, D, F, F, F, F, F, G],
                [F, D, D, D, F, F, D, F, G, K, G],
                [F, F, D, D, D, D, F, F, G, K],
                [F, F, F, D, D, F, F, G, K, V, V, K],
                [F, F, F, F, F, F, G, G, K, V],
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 4, 1, 0],
                [1, 1, 5, 5, 5, 5, 1, 1, 0],
                [1, 1, 1, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
    [CLIFF_DEATHBED_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, D, F, F, F, F, F, G],
                [F, D, D, D, F, F, D, F, G, H],
                [F, F, D, D, D, D, F, F, G, H],
                [F, F, F, D, D, F, F, G, G, H, G],
                [F, F, F, F, F, F, G],
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 4, 1, 0, 3],
                [1, 1, 5, 5, 5, 5, 1, 1, 0, 3],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 3, 0],
                [1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
}
