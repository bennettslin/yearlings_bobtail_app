import {
    BENNETT_ROOM_KEY,
    BENNETT_ROOM_OPEN_KEY,
    BENNETT_ROOM_DOGS_KEY,
    BENNETT_ROOM_SPACE_KEY
} from 'scene/cubesKeys'

import {
    e,
    g,
    k,
    LEFT
} from 'scene/cubesConstants'

const
    BENNETT_ROOM_CEILING = [
        [k, k, k, k, k, g, k, g, g, g, k],
        [k, k, k, e, e, g, g, g, g, g, k],
        [k, k, e, e, g, g, g, g, g, g, g, k],
        [g, e, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g]
    ],
    BENNETT_ROOM_CUBES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
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
                [0, 0, 0, 7, 7, 1, g, 6, 6, g, 0],
                [0, 0, 7, 7, 5, 1, 1, 6, 6, 6, g, 0],
                [g, 7, 5, 5, 1, 1, 1, 6, 6, 6, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BENNETT_ROOM_OPEN_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, g, g, 1, g, 1, 1, g, 0],
                [0, 0, g, g, 5, 1, 1, 1, 1, 1, g, 0],
                [g, g, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    BENNETT_ROOM_DOGS_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, g, g, g, 0],
                [1, 1, 1, 1, 1, 1, g, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
            ]
        }
    },
    BENNETT_ROOM_SPACE_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 1],
                [0, 0, 0, g, g, 1],
                [0, 0, g, g, 5, 1],
                [g, g, 5, 5, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [BENNETT_ROOM_KEY]: BENNETT_ROOM_CUBES,
        [BENNETT_ROOM_OPEN_KEY]: BENNETT_ROOM_OPEN_CUBES,
        [BENNETT_ROOM_DOGS_KEY]: [BENNETT_ROOM_DOGS_CUBES],
        [BENNETT_ROOM_SPACE_KEY]: [BENNETT_ROOM_SPACE_CUBES]
    }

export default CUBES
