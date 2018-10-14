import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY
} from 'scene/cubesKeys'

/* eslint-disable */
import {
    GROUND_HSLA,
    HILL_HSLA,
    STREET_HSLA,
    CROSSWALK_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'
import {
    RIGHT
} from 'scene/cubesConstants'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
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
                [H, H, H, H, H, H, H, H, G],
                [H, H, H, H, H, H, H, H, T, T, G],
                [H, H, H, H, H, H, H, H, H, G, T, T],
                [H, H, H, H, H, H, H, H, G, G, G, T],
                [H, H, H, H, H, H, H, H, G]
            ],
            zIndices: [
                [0],
                [2, 2, 2, 2, 2, 2, 2, 2, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 0]
            ]
        }
    },
    EL_CERRITO_CAR_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, P, H, H, H, H, H, H, G],
                [H, P, S, P, H, H, H, H, T, T, G],
                [H, H, S, P, P, P, H, H, H, G, T, T],
                [H, H, H, P, P, H, H, H, G, G, G, T],
                [H, H, H, H, H, H, H, H, G]
            ],
            zIndices: [
                [0],
                [2, 3, 2, 2, 2, 2, 2, 2, 0],
                [2, 3, 4, 3, 2, 2, 2, 2, 1, 1, 0],
                [2, 2, 4, 3, 3, 3, 2, 2, 2, 0, 1, 1],
                [2, 2, 2, 3, 3, 2, 2, 2, 0, 0, 0, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 0]
            ]
        }
    },

    CUBES = {
        [EL_CERRITO_KEY]: EL_CERRITO_CUBES,
        [EL_CERRITO_CAR_KEY]: EL_CERRITO_CAR_CUBES
    }

export default CUBES
