import {
    CLIFF_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CLIFF_CUBES = {
        slantDirection: RIGHT,
        /**
         * -----------.--
         * ---------....-
         * -------@.....-
         * -----@@@@.....
         * ---@@@@@@.....
         * -@@@@@@@@@...-
         * @@@@@@@@@@.---
         * -@@@@@@@@-----
         * -@@@@@@-------
         * --@@@---------
         * --@-----------
         */
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
                [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0]
            ]
        }
    },

    CUBES = {
        [CLIFF_KEY]: CLIFF_CUBES
    }

export default CUBES
