import {
    CLIFF_KEY
} from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
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
