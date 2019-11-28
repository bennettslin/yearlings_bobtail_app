import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    HILL_COLOUR,
    HILL_DARKER_COLOUR,
    FLOOR_COLOUR,
    PLATFORM_COLOUR,
    UPHOLSTERY_COLOUR,
    FURNITURE_COLOUR
} from '../../cubes/keys/hsla'

import {
    // g,
    RIGHT
} from '../../cubes/keys/zIndex'

const
    G = GROUND_COLOUR,
    H = HILL_COLOUR,
    I = HILL_DARKER_COLOUR,
    F = FLOOR_COLOUR,
    P = PLATFORM_COLOUR,
    U = UPHOLSTERY_COLOUR,
    R = FURNITURE_COLOUR,

    EL_CERRITO_DEATHBED_CUBES = {
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
                [F, U, F, F, F, F, R, G],
                [F, U, U, U, F, F, F, F, G, P],
                [F, F, U, U, U, U, F, F, G, P],
                [F, F, F, U, U, F, F, G, G, P, G],
                [F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 4, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0, 0],
                [1, 1, 5, 5, 5, 5, 1, 1, 0, 0],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 0, 0],
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
    },

    CUBES = {
        [EL_CERRITO_DEATHBED_KEY]: EL_CERRITO_DEATHBED_CUBES,
        [EL_CERRITO_TENNIS_KEY]: EL_CERRITO_TENNIS_CUBES,
        [CLIFF_DEATHBED_KEY]: CLIFF_DEATHBED_CUBES
    }

export default CUBES
