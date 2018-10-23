import {
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    CLIFF_DEATHBED_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    g,
    RIGHT
} from '../../zIndexKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    EL_CERRITO_DEATHBED_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0, 0, g, g, g, 0],
                [0, g, 5, 5, g, g, 0],
                [0, g, 5, 5, 5, 5, g, g, 0],
                [0, g, 5, 5, 5, 5, 5, 1, 0],
                [g, 1, 1, 5, 5, 5, 1, 0],
                [g, 1, 1, 1, 1, 5, 1, 0]
            ]
        }
    },
    EL_CERRITO_TENNIS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0, 0, g, g, g, 0],
                [0, g, 5, 5, g, g, 0, 0, 0, 1],
                [0, g, 5, 5, 5, 5, g, g, 0, 1],
                [0, g, 5, 5, 5, 5, 5, 1, 0, 1],
                [g, 1, 1, 5, 5, 5, 1, 0, 0, 1, 0],
                [g, 1, 1, 1, 1, 5, 1, 0]
            ]
        }
    },
    CLIFF_DEATHBED_CUBES = {
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
                [D]
            ],
            zIndices: [
                [0],
                [1, 5, 1, 1, 1, 1, 1, 0],
                [1, 5, 5, 5, 1, 1, 1, 1, 0, 3],
                [1, 1, 5, 5, 5, 5, 1, 1, 0, 3],
                [1, 1, 1, 5, 5, 1, 1, 0, 0, 3, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]

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
            // zIndices: [
            //     [0],
            //     [3, 4, 3, 3, 3, 3, 3, 1, 0],
            //     [3, 4, 4, 4, 3, 3, 3, 3, 1, 1, 0],
            //     [3, 3, 4, 4, 4, 4, 3, 3, 0, 0, 1],
            //     [3, 3, 3, 4, 4, 3, 3, 0, 0, 0, 0, 1],
            //     [3, 3, 3, 3, 3, 3, 0]
            // ]
        }
    },

    CUBES = {
        [EL_CERRITO_DEATHBED_KEY]: EL_CERRITO_DEATHBED_CUBES,
        [EL_CERRITO_TENNIS_KEY]: EL_CERRITO_TENNIS_CUBES,
        [CLIFF_DEATHBED_KEY]: CLIFF_DEATHBED_CUBES
    }

export default CUBES
