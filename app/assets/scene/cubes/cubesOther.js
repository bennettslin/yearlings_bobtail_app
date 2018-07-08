// Separating other cubes purely for purpose of keeping file smaller.

import {
    TAIWAN_PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_SCENE_KEY,
    ODIN_SCENE_1_KEY,
    ODIN_SCENE_2_KEY,
    ODIN_SCENE_3_KEY,
    ODIN_SCENE_4_KEY,
    ODIN_SCENE_5_KEY,
    ODIN_SCENE_6_KEY,
    ODIN_SCENE_7_KEY,
    ODIN_SCENE_8_KEY,
    SNOW_GLOBES_1_KEY,
    SNOW_GLOBES_2_KEY,
    SNOW_GLOBES_3_KEY,
    EL_TORITO_KEY,
    PAMPAS_KEY,
    OUTDOOR_WEDDING_KEY,
    DREAM_CLIFF_KEY,
    DREAM_DEATHBED_KEY
} from './cubesKeys'

import {
    TEST_PATTERN_KEY
} from '../bitmaps/bitmapsKeys'

import {
    // a,
    b,
    // c,
    d,
    // e,
    // f,
    g,
    h,
    i,
    // j,
    k,
    // n,
    // LEFT,
    RIGHT
} from './cubesConstants'

const

    TAIWAN_PUPPET_SHOW_CUBES = {
        // Just panels.
        floor: {
            zIndices: [
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    SCHOOLBUS_CUBES = {
        // Assume height of 9'.
        /** https://www.the-blueprints.com/blueprints/buses/international-buses/56427/view/international_school_bus_%281992%29/
         */
        floor: {
            zIndices: [
                [0],
                [0, i, 9, 9, 9, 9, 9, 9, i, i, 9, 0],
                [0, i, 6, 6, 3, 6, 6, 3, i, i, 9, 0],
                [0, i, 6, 6, 3, 6, 6, 3, i, i, 9, 0],
                [0, i, 3, 3, 3, 3, 3, 3, i, i, 9, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    TETHERBALL_SCENE_CUBES = {
        floor: {
            zIndices: [
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_1_CUBES = {
        // Indoor wall is 7.5'. Floor of 2' to imply second story.
        floor: {
            zIndices: [
                [5],
                [5],
                [5],
                [k, k, k, k, k, k, 5, 5, 5, k],
                [5],
                [5]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_2_CUBES = {
        // Windowsill height of 3'.
        floor: {
            zIndices: [
                [k, k, k, b, b, b, b, b, b, k],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_3_CUBES = {
        // House wall is 6'.
        floor: {
            zIndices: [
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_4_CUBES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_5_CUBES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_6_CUBES = {
        // TODO: Make more natural.
        // Ocean wave.
        floor: {
            zIndices: [
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_7_CUBES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    ODIN_SCENE_8_CUBES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    SNOW_GLOBES_1_CUBES = {
        floor: {
            zIndices: [
                [k],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    SNOW_GLOBES_2_CUBES = {
        floor: {
            zIndices: [
                [k],
                [k, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
                [k, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
                [k, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
                [k, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    SNOW_GLOBES_3_CUBES = {
        floor: {
            zIndices: [
                [k],
                [k, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    EL_TORITO_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [h, h, h, h, 1, 1, 1, 1, h],
                [1],
                [1, h, 1, 1, 1, 1, 1, 1, 1, 1, h, 1],
                [1],
                [1],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    PAMPAS_CUBES = {
        // TODO: Make more natural.
        // Grass.
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [4]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    OUTDOOR_WEDDING_CUBES = {
        // TODO: Make more natural.
        // Grass.
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [4]
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    DREAM_CLIFF_CUBES = {
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
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },
    DREAM_DEATHBED_CUBES = {
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
            ],
            bitmapKeys: [
                [TEST_PATTERN_KEY]
            ]
        }
    },

    CUBES_OTHER = {
        [TAIWAN_PUPPET_SHOW_KEY]: TAIWAN_PUPPET_SHOW_CUBES,
        [SCHOOLBUS_KEY]: SCHOOLBUS_CUBES,
        [TETHERBALL_SCENE_KEY]: TETHERBALL_SCENE_CUBES,
        [ODIN_SCENE_1_KEY]: ODIN_SCENE_1_CUBES,
        [ODIN_SCENE_2_KEY]: ODIN_SCENE_2_CUBES,
        [ODIN_SCENE_3_KEY]: ODIN_SCENE_3_CUBES,
        [ODIN_SCENE_4_KEY]: ODIN_SCENE_4_CUBES,
        [ODIN_SCENE_5_KEY]: ODIN_SCENE_5_CUBES,
        [ODIN_SCENE_6_KEY]: ODIN_SCENE_6_CUBES,
        [ODIN_SCENE_7_KEY]: ODIN_SCENE_7_CUBES,
        [ODIN_SCENE_8_KEY]: ODIN_SCENE_8_CUBES,
        [SNOW_GLOBES_1_KEY]: SNOW_GLOBES_1_CUBES,
        [SNOW_GLOBES_2_KEY]: SNOW_GLOBES_2_CUBES,
        [SNOW_GLOBES_3_KEY]: SNOW_GLOBES_3_CUBES,
        [EL_TORITO_KEY]: EL_TORITO_CUBES,
        [PAMPAS_KEY]: PAMPAS_CUBES,
        [OUTDOOR_WEDDING_KEY]: OUTDOOR_WEDDING_CUBES,
        [DREAM_CLIFF_KEY]: DREAM_CLIFF_CUBES,
        [DREAM_DEATHBED_KEY]: DREAM_DEATHBED_CUBES
    }

export {
    CUBES_OTHER
}
