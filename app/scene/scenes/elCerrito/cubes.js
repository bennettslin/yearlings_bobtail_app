import {
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    g,
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

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
            hslaColours: [
                [D]
            ],
            zIndices: [
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
            ]
        }
    },
    EL_CERRITO_CAR_CUBES = {
        slantDirection: RIGHT,
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
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

    CUBES = {
        [EL_CERRITO_KEY]: EL_CERRITO_CUBES,
        [EL_CERRITO_CAR_KEY]: EL_CERRITO_CAR_CUBES
    }

export default CUBES
