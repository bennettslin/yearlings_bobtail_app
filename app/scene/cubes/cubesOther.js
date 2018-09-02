// Separating other cubes purely for purpose of keeping file smaller.

import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY,
    TAIWAN_ROOM_KEY,
    TAIWAN_STAIRS_KEY,
    TAIWAN_GATE_KEY,
    RICKSHAW_KEY,
    SHORE_KEY,
    BUOY_KEY,
    OCEAN_DEPTHS_KEY,
    OCEAN_FLOOR_KEY,
    SNOWGLOBES_PAST_KEY,
    SNOWGLOBES_PRESENT_KEY,
    SNOWGLOBES_FUTURE_KEY,
    EL_TORITO_KEY,
    PAMPAS_KEY,
    OUTDOOR_WEDDING_KEY,
    CLIFF_KEY,
    CLIFF_DEATHBED_KEY
} from '../cubesKeys'

import {
    // a,
    b,
    // c,
    d,
    // e,
    // f,
    g,
    // k,
    // LEFT,
    RIGHT
} from './cubesConstants'

const

    PUPPET_SHOW_CUBES = {
        // Just panels.
        floor: {
            zIndices: [
                [1]
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
                [0, g, 9, 9, 9, 9, 9, 9, g, g, 9, 0],
                [0, g, 6, 6, 3, 6, 6, 3, g, g, 9, 0],
                [0, g, 6, 6, 3, 6, 6, 3, g, g, 9, 0],
                [0, g, 3, 3, 3, 3, 3, 3, g, g, 9, 0],
                [0]
            ]
        }
    },
    TETHERBALL_COURT_CUBES = {
        floor: {
            zIndices: [
                [1]
            ]
        }
    },
    TAIWAN_ROOM_CUBES = {
        // Indoor wall is 7.5'. Floor of 2' to imply second story.
        floor: {
            zIndices: [
                [5],
                [5],
                [5],
                [g, g, g, g, g, g, 5, 5, 5, g],
                [5],
                [5]
            ]
        }
    },
    TAIWAN_STAIRS_CUBES = {
        // Windowsill height of 3'.
        floor: {
            zIndices: [
                [g, g, g, b, b, b, b, b, b, g],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5]
            ]
        }
    },
    TAIWAN_GATE_CUBES = {
        // House wall is 6'.
        floor: {
            zIndices: [
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    RICKSHAW_CUBES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    SHORE_CUBES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    BUOY_CUBES = {
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
            ]
        }
    },
    OCEAN_DEPTHS_CUBES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    OCEAN_FLOOR_CUBES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    SNOWGLOBES_PAST_CUBES = {
        floor: {
            zIndices: [
                [g],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },
    SNOWGLOBES_PRESENT_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
                [g, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
                [g, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
                [g, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
                [0]
            ]
        }
    },
    SNOWGLOBES_FUTURE_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [0]
            ]
        }
    },
    EL_TORITO_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g, g, g, g, 1, 1, 1, 1, g],
                [1],
                [1, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 1],
                [1],
                [1],
                [0]
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
            ]
        }
    },
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

    CUBES_OTHER = {
        [PUPPET_SHOW_KEY]: PUPPET_SHOW_CUBES,
        [SCHOOLBUS_KEY]: SCHOOLBUS_CUBES,
        [TETHERBALL_COURT_KEY]: TETHERBALL_COURT_CUBES,
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES,
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES,
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES,
        [RICKSHAW_KEY]: RICKSHAW_CUBES,
        [SHORE_KEY]: SHORE_CUBES,
        [BUOY_KEY]: BUOY_CUBES,
        [OCEAN_DEPTHS_KEY]: OCEAN_DEPTHS_CUBES,
        [OCEAN_FLOOR_KEY]: OCEAN_FLOOR_CUBES,
        [SNOWGLOBES_PAST_KEY]: SNOWGLOBES_PAST_CUBES,
        [SNOWGLOBES_PRESENT_KEY]: SNOWGLOBES_PRESENT_CUBES,
        [SNOWGLOBES_FUTURE_KEY]: SNOWGLOBES_FUTURE_CUBES,
        [EL_TORITO_KEY]: EL_TORITO_CUBES,
        [PAMPAS_KEY]: PAMPAS_CUBES,
        [OUTDOOR_WEDDING_KEY]: OUTDOOR_WEDDING_CUBES,
        [CLIFF_KEY]: CLIFF_CUBES,
        [CLIFF_DEATHBED_KEY]: CLIFF_DEATHBED_CUBES
    }

export {
    CUBES_OTHER
}
