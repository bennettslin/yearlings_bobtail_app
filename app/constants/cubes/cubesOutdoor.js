// Separating outdoor cubes purely for purpose of keeping file smaller.

import {
    TEST_PATTERN_BITMAP
} from '../bitmaps'

const
    a = 10,
    // b = 11,
    // c = 12,
    // d = 13,
    // e = 14,
    f = 15,
    g = 16,
    h = 17,
    i = 18,
    j = 19,
    k = 20,
    // n = 40,
    // LEFT = 'left',
    RIGHT = 'right',

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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    CHANGELING_CAVE_CUBES = {
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    UCLA_CAMPUS_CUBES = {
        floor: {
            zIndices: [
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    OAKLAND_STREET_FRONT_2_CUBES = {
        floor: {
            zIndices: [
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    OAKLAND_STREET_FRONT_3_CUBES = {
        floor: {
            zIndices: [
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
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
                [TEST_PATTERN_BITMAP]
            ]
        }
    },

    CUBES_OUTDOOR = {
        CHILDHOOD_NEIGHBOURHOOD_CUBES,
        PLAYGROUND_CUBES,
        FREEWAY_CUBES,
        PORCH_CUBES,
        CHANGELING_CAVE_CUBES,
        JUNIOR_HIGH_LOCKERS_CUBES,
        JUNIOR_HIGH_QUAD_CUBES,
        BENNETT_APARTMENT_COURTYARD_CUBES,
        CATHOLIC_CHURCH_CUBES,
        SPROUL_PLAZA_CUBES,
        BERKELEY_WALKWAY_CUBES,
        MOVIE_THEATRE_1_CUBES,
        MOVIE_THEATRE_2_CUBES,
        SITA_APARTMENT_GATE_1_CUBES,
        SITA_APARTMENT_GATE_2_CUBES,
        GO_KART_CUBES,
        BENNETT_APARTMENT_GATE_CUBES,
        UCLA_CAMPUS_CUBES,
        CEMETERY_CUBES,
        STATION_WAGON_CUBES,
        SHOW_UNLOADING_CUBES,
        VOLKSWAGEN_CUBES,
        OAKLAND_STREET_SIDE_CUBES,
        OAKLAND_STREET_FRONT_1_CUBES,
        OAKLAND_STREET_FRONT_2_CUBES,
        OAKLAND_STREET_FRONT_3_CUBES,
        CREMATED_CLIFF_CUBES,
        CREMATED_CLIFF_CONVERTIBLE_CUBES,
        CREMATED_DEATHBED_CUBES,
        CREMATED_DEATHBED_TENNIS_CUBES,
        ALLEY_CUBES
    }

export {
    CUBES_OUTDOOR
}
