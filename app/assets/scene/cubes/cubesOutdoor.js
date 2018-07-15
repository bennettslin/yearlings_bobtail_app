// Separating outdoor cubes purely for purpose of keeping file smaller.

// TODO: In case I want to make cube and key constants different.
import {
    CHILDHOOD_NEIGHBOURHOOD_KEY,
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
} from './cubesKeys'

import {
    TEST_KEY
} from '../bitmaps/bitmapsKeys'

import {
    a,
    // b,
    // c,
    // d,
    // e,
    f,
    g,
    h,
    i,
    j,
    k,
    // n,
    // LEFT,
    RIGHT
} from './cubesConstants'

const

    CHILDHOOD_NEIGHBOURHOOD_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    FREEWAY_CUBES = {
        // Solid overpass wall is 1.5'. Fence will extend higher.
        floor: {
            zIndices: [
                [0],
                [8],
                [5],
                [5],
                [0],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    PORCH_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [h, h, h, j, j, j, j, j, j, h],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    CHANGELING_CAVE_CUBES = {
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    JUNIOR_HIGH_LOCKERS_CUBES = {
        // Overall height of lockers is 6.5'.
        ceiling: {
            zIndices: [
                [k],
                [k],
                [k, k, j, j, j, j, j, j, j, j, k]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, f, f, f, f, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    JUNIOR_HIGH_QUAD_CUBES = {
        ceiling: {
            zIndices: [
                [k, k, j, j, j, j, j, j, j, j, k],
                [k, k, j, j, j, j, j, j, j, j, k],
                [k, k, j, j, j, j, j, j, j, j, k],
                [k, k, j, j, j, j, j, j, j, j, k],
                [k]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        },
        floor: {
            zIndices: [
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, f, f, f, f, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    BENNETT_APARTMENT_COURTYARD_CUBES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        floor: {
            zIndices: [
                [1, h],
                [1, h, 1],
                [1, h, 7, 7, 7, 7, h, 1, 1, 1, h],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    BENNETT_APARTMENT_GATE_CUBES = {
        floor: {
            zIndices: [
                [h],
                [h, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
                [h, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
                [1],
                [1],
                [0],
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    SPROUL_PLAZA_CUBES = {
        // Outdoor wall is 8'. Platform is 1'.
        floor: {
            zIndices: [
                [1, 9, 3, j],
                [1, 9, 3],
                [1, 9, 9, 9, 9, 9, 9, 9, 3, 3, 3, 9],
                [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    BERKELEY_WALKWAY_CUBES = {
        floor: {
            zIndices: [
                [j, j, j, 3, 9, 1],
                [3, 3, 3, 3, 9, 1],
                [9, 9, 9, 9, 9, 1],
                [1],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    MOVIE_THEATRE_1_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [h],
                [h, h, h, 1, 1, 1, 1, 1, 1, h],
                [h, h, h, 1, 1, 1, 1, 1, 1, h],
                [1],
                [1],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    MOVIE_THEATRE_2_CUBES = {
        floor: {
            zIndices: [
                [h, h, h, 1, 1, 0],
                [h, h, h, 1, 1, 0],
                [h, h, h, 1, 1, 0],
                [1],
                [1],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    UCLA_CAMPUS_CUBES = {
        floor: {
            zIndices: [
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    CEMETERY_CUBES = {
        // TODO: Make more natural.
        // Hill.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },

    SHOW_UNLOADING_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [1, 1, i],
                [1, 1, i, 1],
                [1, 1, i, 1, 1, 1, i],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },

    SITA_APARTMENT_GATE_1_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [h, h, h, h, h, h, h, h, h, h, 1, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7],
                [1],
                [1],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    SITA_APARTMENT_GATE_2_CUBES = {
        floor: {
            zIndices: [
                [h, h, h, h, h, 1, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 1, 1, 1, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    OAKLAND_STREET_FRONT_1_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    OAKLAND_STREET_FRONT_2_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    OAKLAND_STREET_FRONT_3_CUBES = {
        floor: {
            zIndices: [
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    CREMATED_CLIFF_CONVERTIBLE_CUBES = {
        slantDirection: RIGHT,
        ceiling: {
            zIndices: [
                [g, k, k, k, k, k, k, k, k, k, k, g]
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
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
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },
    ALLEY_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [h],
                [1]
            ],
            bitmapKeys: [
                [TEST_KEY]
            ]
        }
    },

    CUBES_OUTDOOR = {
        [CHILDHOOD_NEIGHBOURHOOD_KEY]: CHILDHOOD_NEIGHBOURHOOD_CUBES,
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
