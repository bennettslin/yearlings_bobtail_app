// Separating outdoor cubes purely for purpose of keeping file smaller.

import {
    PLAYGROUND_KEY,
    FREEWAY_KEY,
    PORCH_KEY,
    CHANGELING_CAVE_KEY,
    JUNIOR_HIGH_LOCKERS_KEY,
    JUNIOR_HIGH_QUAD_KEY,
    BENNETT_APARTMENT_COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    SPROUL_PLAZA_KEY,
    BERKELEY_WALKWAY_KEY,
    MOVIE_THEATRE_1_KEY,
    MOVIE_THEATRE_2_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    GO_KART_KEY,
    BENNETT_APARTMENT_GATE_KEY,
    UCLA_CAMPUS_KEY,
    CEMETERY_KEY,
    STATION_WAGON_KEY,
    SHOW_UNLOADING_KEY,
    VOLKSWAGEN_KEY,
    OAKLAND_STREET_SIDE_KEY,
    OAKLAND_STREET_FRONT_1_KEY,
    OAKLAND_STREET_FRONT_2_KEY,
    OAKLAND_STREET_FRONT_3_KEY,
    CREMATED_CLIFF_KEY,
    CREMATED_CLIFF_CONVERTIBLE_KEY,
    CREMATED_DEATHBED_KEY,
    CREMATED_DEATHBED_TENNIS_KEY,
    ALLEY_KEY
} from '../cubesKeys'

import {
    a,
    // b,
    c,
    // d,
    // e,
    f,
    g,
    // k,
    // LEFT,
    RIGHT
} from './cubesConstants'

const

    PLAYGROUND_CUBES = {
        // Raised nurse's office bench is 1.5'.
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1]
            ]
        }
    },
    FREEWAY_CUBES = {
        // Solid overpass wall is 1.5'. Fence will extend higher.
        floor: {
            zIndices: [
                [c, g],
                [8],
                [4],
                [4],
                [0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g]
            ]
        }
    },
    PORCH_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
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
    JUNIOR_HIGH_LOCKERS_CUBES = {
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
    JUNIOR_HIGH_QUAD_CUBES = {
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
    BENNETT_APARTMENT_COURTYARD_CUBES = {
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
    BENNETT_APARTMENT_GATE_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1],
                [1],
                [0],
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
    SPROUL_PLAZA_CUBES = {
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
    BERKELEY_WALKWAY_CUBES = {
        floor: {
            zIndices: [
                [g, g, g, 3, 9, 1],
                [3, 3, 3, 3, 9, 1],
                [9, 9, 9, 9, 9, 1],
                [1],
                [1]
            ]
        }
    },
    MOVIE_THEATRE_1_CUBES = {
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
    MOVIE_THEATRE_2_CUBES = {
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
    GO_KART_CUBES = {
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
    UCLA_CAMPUS_CUBES = {
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

    SITA_APARTMENT_GATE_1_CUBES = {
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
    SITA_APARTMENT_GATE_2_CUBES = {
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

    VOLKSWAGEN_CUBES = {
        // Same as Catholic church tiles.
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
    OAKLAND_STREET_SIDE_CUBES = {
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
    OAKLAND_STREET_FRONT_1_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ]
        }
    },
    OAKLAND_STREET_FRONT_2_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ]
        }
    },
    OAKLAND_STREET_FRONT_3_CUBES = {
        floor: {
            zIndices: [
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
            ]
        }
    },
    CREMATED_CLIFF_CUBES = {
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
    CREMATED_CLIFF_CONVERTIBLE_CUBES = {
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
    CREMATED_DEATHBED_CUBES = {
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
    CREMATED_DEATHBED_TENNIS_CUBES = {
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
        [PLAYGROUND_KEY]: PLAYGROUND_CUBES,
        [FREEWAY_KEY]: FREEWAY_CUBES,
        [PORCH_KEY]: PORCH_CUBES,
        [CHANGELING_CAVE_KEY]: CHANGELING_CAVE_CUBES,
        [JUNIOR_HIGH_LOCKERS_KEY]: JUNIOR_HIGH_LOCKERS_CUBES,
        [JUNIOR_HIGH_QUAD_KEY]: JUNIOR_HIGH_QUAD_CUBES,
        [BENNETT_APARTMENT_COURTYARD_KEY]: BENNETT_APARTMENT_COURTYARD_CUBES,
        [CATHOLIC_CHURCH_KEY]: CATHOLIC_CHURCH_CUBES,
        [SPROUL_PLAZA_KEY]: SPROUL_PLAZA_CUBES,
        [BERKELEY_WALKWAY_KEY]: BERKELEY_WALKWAY_CUBES,
        [MOVIE_THEATRE_1_KEY]: MOVIE_THEATRE_1_CUBES,
        [MOVIE_THEATRE_2_KEY]: MOVIE_THEATRE_2_CUBES,
        [SITA_APARTMENT_GATE_1_KEY]: SITA_APARTMENT_GATE_1_CUBES,
        [SITA_APARTMENT_GATE_2_KEY]: SITA_APARTMENT_GATE_2_CUBES,
        [GO_KART_KEY]: GO_KART_CUBES,
        [BENNETT_APARTMENT_GATE_KEY]: BENNETT_APARTMENT_GATE_CUBES,
        [UCLA_CAMPUS_KEY]: UCLA_CAMPUS_CUBES,
        [CEMETERY_KEY]: CEMETERY_CUBES,
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES,
        [SHOW_UNLOADING_KEY]: SHOW_UNLOADING_CUBES,
        [VOLKSWAGEN_KEY]: VOLKSWAGEN_CUBES,
        [OAKLAND_STREET_SIDE_KEY]: OAKLAND_STREET_SIDE_CUBES,
        [OAKLAND_STREET_FRONT_1_KEY]: OAKLAND_STREET_FRONT_1_CUBES,
        [OAKLAND_STREET_FRONT_2_KEY]: OAKLAND_STREET_FRONT_2_CUBES,
        [OAKLAND_STREET_FRONT_3_KEY]: OAKLAND_STREET_FRONT_3_CUBES,
        [CREMATED_CLIFF_KEY]: CREMATED_CLIFF_CUBES,
        [CREMATED_CLIFF_CONVERTIBLE_KEY]: CREMATED_CLIFF_CONVERTIBLE_CUBES,
        [CREMATED_DEATHBED_KEY]: CREMATED_DEATHBED_CUBES,
        [CREMATED_DEATHBED_TENNIS_KEY]: CREMATED_DEATHBED_TENNIS_CUBES,
        [ALLEY_KEY]: ALLEY_CUBES
    }

export {
    CUBES_OUTDOOR
}
