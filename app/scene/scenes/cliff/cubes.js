import {
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY
} from 'scene/cubesKeys'

import {
    g,
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
    CLIFF_DEATHBED_CUBES = {
        slantDirection: RIGHT,
        /**
         * -----------.--
         * ---------..@@-
         * -------...@@@-
         * -----.....@@@.
         * ---######.@@..
         * -.#xxxxxo....-
         * ..#xxxxxo..---
         * -.#xxxxxo-----
         * -.#oooo-------
         * --#oo---------
         * --#-----------
         */
        floor: {
            zIndices: [
                [0, 0, g, g, g, 0, 0, 0, 0, 0, 0, 0],
                [0, g, 7, 7, g, g, 0, 0, 0, 4, 4, 4],
                [0, g, 7, 7, 7, 7, g, g, 0, 4, 4, 4],
                [0, g, 7, 7, 7, 7, 7, 1, 0, 4, 4, 4],
                [g, 1, 1, 7, 7, 7, 1, 0, 0, 4, 0, 0],
                [g, 1, 1, 1, 1, 7, 1, 0, 0, 0, 0, 0]
            ]
        }
    },

    CUBES = {
        [CLIFF_KEY]: CLIFF_CUBES,
        [CLIFF_DEATHBED_KEY]: CLIFF_DEATHBED_CUBES
    }

export default CUBES
