import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY
} from 'scene/cubesKeys'

import {
    g,
    RIGHT
} from 'scene/cubesConstants'

const
    EL_CERRITO_CUBES = {
        slantDirection: RIGHT,
        /**
         * -----------.--
         * ---------@...-
         * -------@@@@..-
         * -----@@@@@@...
         * ---######@@@..
         * -@@#xxxxx@@@.-
         * @@@#xxxxx@@---
         * -@@#xxxxx-----
         * -@@@@@@-------
         * --@@@---------
         * --@-----------
         */
        floor: {
            zIndices: [
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
            ]
        }
    },
    EL_CERRITO_CAR_CUBES = {
        slantDirection: RIGHT,
        ceiling: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            zIndices: [
                [4, 4, 4, 8, 8, 4, 4, 4, 4, 4, 0],
                [4, 4, 8, 6, 8, 8, 4, 4, 4, 4, 0],
                [4, 4, 8, 6, 6, 8, 8, 8, 4, 4, 0],
                [4, 4, 8, 6, 6, 8, 6, 6, 4, 4, 0],
                [4, 4, 4, 6, 8, 6, 6, 4, 4, 4, 0],
                [4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 0]
            ]
        }
    },
    EL_CERRITO_DEATHBED_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0, 0, g, g, g, 0],
                [0, g, 7, 7, g, g, 0],
                [0, g, 7, 7, 7, 7, g, g, 0],
                [0, g, 7, 7, 7, 7, 7, 1, 0],
                [g, 1, 1, 7, 7, 7, 1, 0],
                [g, 1, 1, 1, 1, 7, 1, 0]
            ]
        }
    },
    EL_CERRITO_TENNIS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0, 0, g, g, g, 0],
                [0, g, 7, 7, g, g, 0, 0, 0, 1],
                [0, g, 7, 7, 7, 7, g, g, 0, 1],
                [0, g, 7, 7, 7, 7, 7, 1, 0, 1],
                [g, 1, 1, 7, 7, 7, 1, 0, 0, 1, 0],
                [g, 1, 1, 1, 1, 7, 1, 0]
            ]
        }
    },

    CUBES = {
        [EL_CERRITO_KEY]: EL_CERRITO_CUBES,
        [EL_CERRITO_CAR_KEY]: EL_CERRITO_CAR_CUBES,
        [EL_CERRITO_DEATHBED_KEY]: EL_CERRITO_DEATHBED_CUBES,
        [EL_CERRITO_TENNIS_KEY]: EL_CERRITO_TENNIS_CUBES
    }

export default CUBES
