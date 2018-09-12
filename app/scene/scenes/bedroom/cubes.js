import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY
} from 'scene/cubesKeys'

import {
    d,
    g,
    k,
    LEFT
} from 'scene/cubesConstants'

const
    BEDROOM_CEILING = [
        [k, k, k, k, k, g, k, g, g, g, k],
        [k, k, k, d, d, g, g, g, g, g, k],
        [k, k, d, d, g, g, g, g, g, g, g, k],
        [g, d, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g]
    ],
    BEDROOM_CUBES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        ceiling: {
            zIndices: BEDROOM_CEILING
        },
        /**
         * --.-----------
         * --...---------
         * -......-------
         * -########-----
         * ...xxx..###---
         * -.......xxx#.-
         * ---.x...xxx#..
         * -----...xxx#..
         * -------.xxx#.-
         * ---------..#.-
         * -----------#--
         */
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 6, 6, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 6, 6, 6, g, 0],
                [g, 6, 5, 5, 1, 1, 1, 6, 6, 6, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_STOOL_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BEDROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 6, 6, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 6, 6, 6, g, 0],
                [g, 6, 5, 5, 1, 4, 1, 6, 6, 6, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_OPEN_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BEDROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 1, 1, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 1, 1, 1, g, 0],
                [g, 6, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    BEDROOM_DOGS_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: [
                [k, k, k, k, k, k, k, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g]
            ]
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, g, g, g, 0],
                [0, 0, 0, 0, 0, 0, g, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_SPACE_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: [
                [k, k, k, k, k, g, k],
                [k, k, k, d, d, g, k],
                [k, k, d, d, g, g, k],
                [g, d, g, g, g, g, k],
                [g, g, g, g, g, g, k]
            ],
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0],
                [0, 0, 0, 6, 6, 1, 0],
                [0, 0, 6, 6, 5, 1, 0],
                [g, 6, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [g, 1, 1, 1, 4, 1, 0]
            ]
        }
    },

    CUBES = {
        [BEDROOM_KEY]: BEDROOM_CUBES,
        [BEDROOM_STOOL_KEY]: BEDROOM_STOOL_CUBES,
        [BEDROOM_OPEN_KEY]: BEDROOM_OPEN_CUBES,
        [BEDROOM_DOGS_KEY]: BEDROOM_DOGS_CUBES,
        [BEDROOM_SPACE_KEY]: BEDROOM_SPACE_CUBES
    }

export default CUBES
