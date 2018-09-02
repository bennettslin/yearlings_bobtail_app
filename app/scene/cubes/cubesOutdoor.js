// Separating outdoor cubes purely for purpose of keeping file smaller.

import {
    FREEWAY_KEY,
    PORCH_KEY,
    CHANGELING_CAVE_KEY,
    VAN_NUYS_LOCKERS_KEY,
    VAN_NUYS_QUAD_KEY,
    BENNETT_COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY,
    CINEMA_KEY,
    CINEMA_STREET_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    GO_KARTS_KEY,
    BENNETT_GATE_KEY,
    ROYCE_HALL_KEY,
    CEMETERY_KEY,
    STATION_WAGON_KEY,
    CLUB_LOADING,
    OAKLAND_HOUSES_KEY,
    OAKLAND_RESIDENTIAL_KEY,
    OAKLAND_COMMERCIAL_KEY,
    OAKLAND_PUBLIC_KEY,
    EL_CERRITO_KEY,
    EL_CERRITO_CAR_KEY,
    EL_CERRITO_DEATHBED_KEY,
    EL_CERRITO_TENNIS_KEY,
    ALLEY_KEY
} from '../cubesKeys'

import {
    a,
    // b,
    // c,
    // d,
    e,
    f,
    g,
    k,
    // LEFT,
    RIGHT
} from './cubesConstants'

const

    FREEWAY_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0],
                [4],
                [2],
                [4],
                [0]
            ]
        }
    },
    PORCH_CUBES = {
        ceiling: {
            zIndices: [
                [f, f, f, f, f, e, e, f],
                [f],
                [k, f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            zIndices: [
                [f, f, f, f, f, 3, 3, f, f, f],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, f, 2, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },
    CHANGELING_CAVE_CUBES = {
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    VAN_NUYS_LOCKERS_CUBES = {
        // Overall height of lockers is 6.5'.
        ceiling: {
            zIndices: [
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, f, f, f, f, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
            ]
        }
    },
    VAN_NUYS_QUAD_CUBES = {
        ceiling: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, g],
                [g, g, g, g, g, g, g, g, g, g, g],
                [g, g, g, g, g, g, g, g, g, g, g],
                [g, g, g, g, g, g, g, g, g, g, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, f, f, f, f, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    },
    BENNETT_COURTYARD_CUBES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        floor: {
            zIndices: [
                [1, g],
                [1, g, 1],
                [1, g, 7, 7, 7, 7, g, 1, 1, 1, g],
                [1]
            ]
        }
    },
    BENNETT_GATE_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1],
                [1],
                [0]
            ]
        }
    },
    CATHOLIC_CHURCH_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0],
                [0],
                [0],
                [1],
                [1]
            ]
        }
    },
    BANCROFT_LIBRARY_CUBES = {
        // Outdoor wall is 8'. Platform is 1'.
        floor: {
            zIndices: [
                [1, 9, 3, g],
                [1, 9, 3],
                [1, 9, 9, 9, 9, 9, 9, 9, 3, 3, 3, 9],
                [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
                [1]
            ]
        }
    },
    CAMPANILE_CUBES = {
        floor: {
            zIndices: [
                [g, g, 3, 9, 1],
                [3, 3, 3, 9, 1],
                [9, 9, 9, 9, 1],
                [1],
                [1]
            ]
        }
    },
    CINEMA_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g],
                [g, g, g, 1, 1, 1, 1, 1, 1, g],
                [g, g, g, 1, 1, 1, 1, 1, 1, g],
                [1],
                [1],
                [0]
            ]
        }
    },
    CINEMA_STREET_CUBES = {
        floor: {
            zIndices: [
                [g, g, g, 1, 1, 0],
                [g, g, g, 1, 1, 0],
                [g, g, g, 1, 1, 0],
                [1],
                [1],
                [0]
            ]
        }
    },
    GO_KARTS_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0],
                [0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
                [0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
                [0]
            ]
        }
    },
    ROYCE_HALL_CUBES = {
        floor: {
            zIndices: [
                [1]
            ]
        }
    },
    CEMETERY_CUBES = {
        // TODO: Make more natural.
        // Hill.
        floor: {
            zIndices: [
                [0]
            ]
        }
    },
    STATION_WAGON_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, a, a, a, a, a, a, a, a, 6, 6, 0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 0],
                [0]
            ]
        }
    },

    SHOW_UNLOADING_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [1, 1, g],
                [1, 1, g, 1],
                [1, 1, g, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1]
            ]
        }
    },

    LIZ_GATE_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, 1, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7],
                [1],
                [1],
                [0]
            ]
        }
    },
    LIZ_GATE_STREET_CUBES = {
        floor: {
            zIndices: [
                [g, g, g, g, g, 1, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 1, 1, 1, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    OAKLAND_HOUSES_CUBES = {
        floor: {
            zIndices: [
                [1],
                [0],
                [0],
                [0],
                [0],
                [1]
            ]
        }
    },
    OAKLAND_RESIDENTIAL_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ]
        }
    },
    OAKLAND_COMMERCIAL_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ]
        }
    },
    OAKLAND_PUBLIC_CUBES = {
        floor: {
            zIndices: [
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
            ]
        }
    },
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
    ALLEY_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g],
                [1]
            ]
        }
    },

    CUBES_OUTDOOR = {
        [FREEWAY_KEY]: FREEWAY_CUBES,
        [PORCH_KEY]: PORCH_CUBES,
        [CHANGELING_CAVE_KEY]: CHANGELING_CAVE_CUBES,
        [VAN_NUYS_LOCKERS_KEY]: VAN_NUYS_LOCKERS_CUBES,
        [VAN_NUYS_QUAD_KEY]: VAN_NUYS_QUAD_CUBES,
        [BENNETT_COURTYARD_KEY]: BENNETT_COURTYARD_CUBES,
        [CATHOLIC_CHURCH_KEY]: CATHOLIC_CHURCH_CUBES,
        [BANCROFT_LIBRARY_KEY]: BANCROFT_LIBRARY_CUBES,
        [CAMPANILE_KEY]: CAMPANILE_CUBES,
        [CINEMA_KEY]: CINEMA_CUBES,
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES,
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES,
        [GO_KARTS_KEY]: GO_KARTS_CUBES,
        [BENNETT_GATE_KEY]: BENNETT_GATE_CUBES,
        [ROYCE_HALL_KEY]: ROYCE_HALL_CUBES,
        [CEMETERY_KEY]: CEMETERY_CUBES,
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES,
        [CLUB_LOADING]: SHOW_UNLOADING_CUBES,
        [OAKLAND_HOUSES_KEY]: OAKLAND_HOUSES_CUBES,
        [OAKLAND_RESIDENTIAL_KEY]: OAKLAND_RESIDENTIAL_CUBES,
        [OAKLAND_COMMERCIAL_KEY]: OAKLAND_COMMERCIAL_CUBES,
        [OAKLAND_PUBLIC_KEY]: OAKLAND_PUBLIC_CUBES,
        [EL_CERRITO_KEY]: EL_CERRITO_CUBES,
        [EL_CERRITO_CAR_KEY]: EL_CERRITO_CAR_CUBES,
        [EL_CERRITO_DEATHBED_KEY]: EL_CERRITO_DEATHBED_CUBES,
        [EL_CERRITO_TENNIS_KEY]: EL_CERRITO_TENNIS_CUBES,
        [ALLEY_KEY]: ALLEY_CUBES
    }

export {
    CUBES_OUTDOOR
}
