import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    GRASS_COLOUR as H,
    GRASS_DARKER_COLOUR as I,
    STREET_COLOUR as T,
    PLATFORM_COLOUR as P,
    SEAT_COLOUR as S
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

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
const CUBES = {
    [EL_CERRITO_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, T, G],
                [I, H, H, I, I, H, H, I, T, T, G],
                [H, I, I, H, H, I, I, H, G, G, T],
                [H, H, I, I, H, H, I, G, G, G, G, T],
                [I, I, H, H, I, I, G]
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 2, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 0]
            ]
        }
    },
    [EL_CERRITO_CAR_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, P, I, H, H, I, I, T, G],
                [I, P, S, P, I, H, H, I, T, T, G],
                [H, I, S, P, P, P, I, H, G, G, T],
                [H, H, I, P, P, H, I, G, G, G, G, T],
                [I, I, H, H, I, I, G]
            ],
            zIndices: [
                [0],
                [3, 4, 3, 3, 3, 3, 3, 2, 0],
                [3, 4, 5, 4, 3, 3, 3, 3, 2, 2, 0],
                [3, 3, 5, 4, 4, 4, 3, 3, 0, 0, 2],
                [3, 3, 3, 4, 4, 3, 3, 0, 0, 0, 0, 2],
                [3, 3, 3, 3, 3, 3, 0]
            ]
        }
    }
}

export default CUBES
