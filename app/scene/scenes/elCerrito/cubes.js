import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA,
    STREET_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
} from '../../cubes/keys/hsla'
import {
    RIGHT
} from '../../cubes/keys/zIndex'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,
    T = STREET_HSLA,
    P = PLATFORM_HSLA,
    S = SEAT_HSLA,

    EL_CERRITO_CUBES = {
        slantDirection: RIGHT,
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
    EL_CERRITO_CAR_CUBES = {
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
    },

    CUBES = {
        [EL_CERRITO_KEY]: EL_CERRITO_CUBES,
        [EL_CERRITO_CAR_KEY]: EL_CERRITO_CAR_CUBES
    }

export default CUBES
