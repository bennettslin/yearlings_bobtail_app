import { RIGHT } from '../../../../../src/constants/scene/cubes'
import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_AUTUMN_COLOUR as H,
    STREET_COLOUR as T,
} from '../../../../../src/constants/scene/cubes/colours'

/**
 * ...........-..
 * .........----.
 * .......------.
 * .....--**=====
 * ...--*****----
 * .--*******---.
 * -*@#@@@***-...
 * .*@#@@@**.....
 * .******.......
 * ..***.........
 * ..*...........
 */
export default {
    [EL_CERRITO_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, H, H, H, H, H, H, T, G],
                [H, H, H, H, H, H, H, H, T, T, G],
                [H, H, H, H, H, H, H, H, G, G, T],
                [H, H, H, H, H, H, H, G, G, G, G, T],
                [H, H, H, H, H, H, G],
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 2, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 0],
            ],
        },
    },
    [EL_CERRITO_CAR_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, H, H, H, H, H, H, T, G],
                [H, D, D, D, H, H, H, H, T, T, G],
                [H, H, D, D, D, D, H, H, G, G, T],
                [H, H, H, D, D, H, H, G, G, G, G, T],
                [H, H, H, H, H, H, G],
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 2, 0],
                [3, 4, 6, 4, 3, 3, 3, 3, 2, 2, 0],
                [3, 3, 6, 4, 4, 4, 3, 3, 0, 0, 2],
                [3, 3, 3, 4, 4, 3, 3, 0, 0, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 0],
            ],
        },
    },
}
