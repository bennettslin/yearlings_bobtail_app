// Separating indoor cubes purely for purpose of keeping file smaller.

import {
    TEST_PATTERN_BITMAP
} from './bitmaps'

const
    a = 10,
    // b = 11,
    c = 12,
    // d = 13,
    // e = 14,
    f = 15,
    g = 16,
    h = 17,
    // i = 18,
    j = 19,
    k = 20,
    // n = 40,
    LEFT = 'left',
    // RIGHT = 'right',

    CHILDHOOD_BATHROOM_TILES = {
        // Indoor wall is 7.5'. Raised bathtub.
        ceiling: {
            zIndices: [
                [k, g, g, g, g, g, g, g, g, g, g, k]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0, g, g, g, g, g, g, g, g, g, g, 0],
                [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
                [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
                [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    CHANGELING_CAVE_TILES = {
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_CEILING = [
        [k, k, k, k, k, g, k, g, g, g, k],
        [k, k, k, g, g, g, g, g, g, g, k],
        [k, k, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g]
    ],
    PRETEEN_BENNETT_ROOM_TILES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING,
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        /**
         * --.-----------
         * --...---------
         * -......-------
         * -########-----
         * ...xxx..###---
         * -.......xxx#.-
         * ---.x...xxx#..
         * -----...xxx#..
         * -------.xxx#.-
         * ---------..#.-
         * -----------#--
         */
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, g, g, 1, g, 8, 8, g, 0],
                [0, 0, g, g, 5, 1, 1, 8, 8, 8, g, 0],
                [g, g, 5, 5, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING,
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, g, g, 1, g, 1, 1, g, 0],
                [0, 0, g, g, 5, 1, 1, 1, 1, 1, g, 0],
                [g, g, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING,
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, g, g, g, 0],
                [1, 1, 1, 1, 1, 1, g, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING,
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 1],
                [0, 0, 0, g, g, 1],
                [0, 0, g, g, 5, 1],
                [g, g, 5, 5, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    JUNIOR_HIGH_HALLWAY_TILES = {
        // Indoor wall is 7.5'.
        ceiling: {
            zIndices: [
                [k, g, g, g, g, g, g, g, g, g, g, k]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, g, 1, 1, 1, g, g, g, g, g, g, 0],
                [0, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    BENNETT_APARTMENT_BED_TILES = {
        // Outdoor wall is 8'. Indoor wall is 7.5'. Bed is 7.5 long, 1' tall.
        floor: {
            zIndices: [
                [h],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
                [g, g, 1, 1, 1, g, 7, 7, 7, 7, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    BENNETT_APARTMENT_COUCH_TILES = {
        // Indoor wall is 7.5'. Couch seat cushions add extra 0.5'.
        ceiling: {
            zIndices: [
                [g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 1, 4, 7, 7, 7, 7, 7, 1, 1, 1, g],
                [g, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    BENNETT_APARTMENT_COUCH_THOUGHT_TILES = {
        // Couch seat cushions add extra half foot.
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    BENNETT_BASEMENT_TILES = {
        // Basement wall is 6', depth is 2.5'. Bed is 1'.
        floor: {
            zIndices: [
                [h, h, 5, 5, h, h, h, h, h, h, h, h],
                [h, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, h],
                [h, 0, 4, 4, 0, 0, 3, 3, 3, 3, 3, h],
                [h, 0, 3, 3, 0, 0, 3, 3, 3, 3, 3, h],
                [h, 0, 2, 2, 0, 0, 3, 3, 3, 3, 3, h],
                [h, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, h]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    REHEARSAL_SPACE_TILES = {
        ceiling: {
            zIndices: [
                [h]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [h, h, h, h, h, h, h, h, h, 5, 5, h],
                [h, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, h],
                [h, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, h],
                [h, 0, 0, 2, 0, 2, 0, 0, 3, 3, 0, h],
                [h, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, h],
                [h, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, h]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },

    MUSEUM_TILES = {
        floor: {
            zIndices: [
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    BACKSTAGE_TILES = {
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    DISHROOM_TILES = {
        // Indoor wall is 7.5'. Sink is 3'. Conveyor is 5.5'.
        floor: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, 6],
                [1, 1, c, c, c, c, c, c, 1, g, 5],
                [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 4],
                [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 2],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    WAITING_ROOM_TILES = {
        floor: {
            zIndices: [
                [0, g, g, g, g, g, g, g, g, g, g, 0],
                [0, 1, 7, 7, 1, 7, 7, 1, 1, 1, g, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    WALGREENS_TILES = {
        floor: {
            zIndices: [
                [h],
                [5],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    STEAM_TUNNEL_TILES = {
        floor: {
            zIndices: [
                [h],
                [5],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    HOWIE_ATTIC_TILES = {
        floor: {
            zIndices: [
                [k],
                [9, g, g, g, g, g, 9, 8, 7, 7, 1],
                [9, c, c, c, c, c, 9, f, 6, 6, 1],
                [9, c, c, c, c, c, 9, f, 5, 5, 1],
                [9, 9, 9, 9, 9, 9, 9, f, 4, 4, 1],
                [9, 9, c, c, 9, 9, 9, f, 3, 3, 2, 1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },

    SHOW_STAGE_FRONT_TILES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        floor: {
            zIndices: [
                [j],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SHOW_STAGE_FRONT_FAR_TILES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        ceiling: {
            zIndices: [
                [j]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [j],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },

    SHOW_STAGE_SIDE_1_TILES = {
        ceiling: {
            zIndices: [
                [j]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [j],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SHOW_STAGE_SIDE_2_TILES = {
        ceiling: {
            zIndices: [
                [j]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [j],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [j, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },

    SITA_APARTMENT_BED_TILES = {
        floor: {
            zIndices: [
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SITA_APARTMENT_COUCH_TILES = {
        // Indoor wall is 7.5'.
        floor: {
            zIndices: [
                [1],
                [g, g, g, g, g, 7, 7, 7, 7, 7, g, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SITA_APARTMENT_COUCH_THOUGHT_TILES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 7, 3, 3, 1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    }

module.exports = {
    CHILDHOOD_BATHROOM_TILES,
    PRETEEN_BENNETT_ROOM_TILES,
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES,
    CHANGELING_CAVE_TILES,
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES,
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES,
    JUNIOR_HIGH_HALLWAY_TILES,
    BENNETT_APARTMENT_COUCH_TILES,
    BENNETT_APARTMENT_COUCH_THOUGHT_TILES,
    BENNETT_BASEMENT_TILES,
    SHOW_STAGE_FRONT_TILES,
    SHOW_STAGE_FRONT_FAR_TILES,
    REHEARSAL_SPACE_TILES,
    MUSEUM_TILES,
    BACKSTAGE_TILES,
    DISHROOM_TILES,
    BENNETT_APARTMENT_BED_TILES,
    WAITING_ROOM_TILES,
    SITA_APARTMENT_BED_TILES,
    WALGREENS_TILES,
    STEAM_TUNNEL_TILES,
    HOWIE_ATTIC_TILES,
    SHOW_STAGE_SIDE_1_TILES,
    SHOW_STAGE_SIDE_2_TILES,
    SITA_APARTMENT_COUCH_TILES,
    SITA_APARTMENT_COUCH_THOUGHT_TILES
}
