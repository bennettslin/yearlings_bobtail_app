import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY
} from '../../cubesKeys'

import {
    GROUND_HSLA,
    HILL_HSLA,
    HILL_DARKER_HSLA,
    FLOOR_HSLA,
    PLATFORM_HSLA,
    UPHOLSTERY_HSLA,
    FURNITURE_HSLA
} from '../../hslaKeys'

import {
    // g,
    RIGHT
} from '../../zIndexKeys'

const
    G = GROUND_HSLA,
    H = HILL_HSLA,
    I = HILL_DARKER_HSLA,
    F = FLOOR_HSLA,
    P = PLATFORM_HSLA,
    U = UPHOLSTERY_HSLA,
    R = FURNITURE_HSLA,

    EL_CERRITO_DEATHBED_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, F, G],
                [F, U, U, U, F, F, F, F, G],
                [F, R, U, U, U, U, F, F, G],
                [F, F, F, U, U, F, F, G, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0],
                [1, 4, 5, 5, 5, 5, 1, 1, 0],
                [1, 1, 1, 5, 5, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    EL_CERRITO_TENNIS_CUBES = {
        slantDirection: RIGHT,
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
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, F, G],
                [F, U, U, U, F, F, F, F, G, P],
                [F, R, U, U, U, U, F, F, G, P],
                [F, F, F, U, U, F, F, G, G, P, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0, 3],
                [1, 4, 5, 5, 5, 5, 1, 1, 0, 3],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 3, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    // TODO: These share the same zIndices, so consolidate?
    CLIFF_DEATHBED_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [F, U, F, F, F, F, F, G],
                [F, U, U, U, F, F, F, F, G, H, H, I],
                [F, R, U, U, U, U, F, F, G, I, I, H],
                [F, F, F, U, U, F, F, G, G, H, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0, 3],
                [1, 4, 5, 5, 5, 5, 1, 1, 0, 3],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 3, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [EL_CERRITO_DEATHBED_KEY]: EL_CERRITO_DEATHBED_CUBES,
        [EL_CERRITO_TENNIS_KEY]: EL_CERRITO_TENNIS_CUBES,
        [CLIFF_DEATHBED_KEY]: CLIFF_DEATHBED_CUBES
    }

export default CUBES
