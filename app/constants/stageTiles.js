// Check out Peoria Symphony Orchestra.

import {
    BATHROOM_COLOUR,
    CAMPUS_COLOUR,
    LAWN_COLOUR,
    STAGE_COLOUR,
    STREET_COLOUR,
    SIDEWALK_COLOUR,
    FURNITURE_COLOUR
} from './stageValues'

const
    a = 10,
    b = 11,
    c = 12,
    d = 13,
    // e = 14,
    f = 15,
    g = 16,
    h = 17,
    i = 18,
    j = 19,
    k = 20,
    LEFT = 'left',
    RIGHT = 'right',

    DEFAULT_STAGE_TILES = {
        ceilingZIndices: [
            [k]
        ],
        ceilingColours: [
            [STAGE_COLOUR]
        ],
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    LOGUE_TILES = {
        floorZIndices: [
            [0],
            [0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
            [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CHILDHOOD_NEIGHBOURHOOD_TILES = {
        floorZIndices: [
            [1],
            [1],
            [1],
            [1],
            [1],
            [0]
        ],
        floorColours: [
            [LAWN_COLOUR],
            [LAWN_COLOUR],
            [LAWN_COLOUR],
            [SIDEWALK_COLOUR],
            [SIDEWALK_COLOUR],
            [STREET_COLOUR]
        ]
    },
    PLAYGROUND_TILES = {
        // Raised nurse's office bench is 1.5'.
        floorZIndices: [
            [1],
            [1],
            [1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
            [1]
        ],
        floorColours: [
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, FURNITURE_COLOUR, CAMPUS_COLOUR],
            [CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, FURNITURE_COLOUR, CAMPUS_COLOUR],
            [CAMPUS_COLOUR]
        ]
    },
    CHILDHOOD_BATHROOM_TILES = {
        // Indoor wall is 7.5'. Raised bathtub.
        ceilingZIndices: [
            [k, g, g, g, g, g, g, g, g, g, g, k]
        ],
        floorZIndices: [
            [0, g, g, g, g, g, g, g, g, g, g, 0],
            [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
            [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
            [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
            [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
        ],
        floorColours: [
            [STAGE_COLOUR],
            [STAGE_COLOUR],
            [STAGE_COLOUR],
            [BATHROOM_COLOUR],
            [BATHROOM_COLOUR, BATHROOM_COLOUR, BATHROOM_COLOUR, BATHROOM_COLOUR, FURNITURE_COLOUR, FURNITURE_COLOUR, FURNITURE_COLOUR, BATHROOM_COLOUR],
            [BATHROOM_COLOUR]
        ]
    },
    FREEWAY_TILES = {
        // Solid overpass wall is 1.5'. Fence will extend higher.
        floorZIndices: [
            [0],
            [8],
            [5],
            [5],
            [0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PORCH_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [h, h, h, j, j, j, j, j, j, h],
            [1, 1, 1, 3, 3, 3, 3, 3, 3, 1],
            [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CHANGELING_CAVE_TILES = {
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    TAIWAN_PUPPET_SHOW_TILES = {
        // Just panels.
        floorZIndices: [
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SCHOOLBUS_TILES = {
        // Assume height of 9'.
        /** https://www.the-blueprints.com/blueprints/buses/international-buses/56427/view/international_school_bus_%281992%29/
         */
        floorZIndices: [
            [0],
            [0, i, 9, 9, 9, 9, 9, 9, i, i, 9, 0],
            [0, i, 6, 6, 3, 6, 6, 3, i, i, 9, 0],
            [0, i, 6, 6, 3, 6, 6, 3, i, i, 9, 0],
            [0, i, 3, 3, 3, 3, 3, 3, i, i, 9, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    TETHERBALL_SCENE_TILES = {
        floorZIndices: [
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_1_TILES = {
        // Indoor wall is 7.5'. Floor of 2' to imply second story.
        floorZIndices: [
            [5],
            [5],
            [5],
            [k, k, k, k, k, k, 5, 5, 5, k],
            [5],
            [5]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_2_TILES = {
        // Windowsill height of 3'.
        floorZIndices: [
            [k, k, k, b, b, b, b, b, b, k],
            [k, 5, 5, 4, 3, 2, 1, 0],
            [k, 5, 5, 4, 3, 2, 1, 0],
            [k, 5, 5, 4, 3, 2, 1, 0],
            [k, 5, 5]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_3_TILES = {
        // House wall is 6'.
        floorZIndices: [
            [1, 1, d, 1, 1, 1, 0],
            [1, 1, d, 1, 1, 1, 0],
            [1, 1, d, 1, 1, 1, 0],
            [1, 1, d, 1, 1, 1, 0],
            [1, 1, d, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_4_TILES = {
        // TODO: Make more natural.
        // Sand.
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_5_TILES = {
        // TODO: Make more natural.
        // Sand.
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_6_TILES = {
        // TODO: Make more natural.
        // Ocean wave.
        floorZIndices: [
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_7_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_8_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
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
        ceilingZIndices: PRETEEN_BENNETT_ROOM_CEILING,
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
        floorZIndices: [
            [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
            [0, 0, 0, g, g, 1, g, 8, 8, g, 0],
            [0, 0, g, g, 5, 1, 1, 8, 8, 8, g, 0],
            [g, g, 5, 5, 1, 1, 1, 8, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES = {
        slantDirection: LEFT,
        ceilingZIndices: PRETEEN_BENNETT_ROOM_CEILING,
        floorZIndices: [
            [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
            [0, 0, 0, g, g, 1, g, 1, 1, g, 0],
            [0, 0, g, g, 5, 1, 1, 1, 1, 1, g, 0],
            [g, g, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES = {
        slantDirection: LEFT,
        ceilingZIndices: PRETEEN_BENNETT_ROOM_CEILING,
        floorZIndices: [
            [1, 1, 1, 1, 1, 1, 1, g, g, g, 0],
            [1, 1, 1, 1, 1, 1, g, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES = {
        slantDirection: LEFT,
        ceilingZIndices: PRETEEN_BENNETT_ROOM_CEILING,
        floorZIndices: [
            [0, 0, 0, 0, 0, g, 1],
            [0, 0, 0, g, g, 1],
            [0, 0, g, g, 5, 1],
            [g, g, 5, 5, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_LOCKERS_TILES = {
        // Overall height of lockers is 6.5'.
        ceilingZIndices: [
            [k],
            [k],
            [k, k, j, j, j, j, j, j, j, j, k]
        ],
        floorZIndices: [
            [1],
            [1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, f, f, f, f, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_QUAD_TILES = {
        ceilingZIndices: [
            [k, k, j, j, j, j, j, j, j, j, k],
            [k, k, j, j, j, j, j, j, j, j, k],
            [k, k, j, j, j, j, j, j, j, j, k],
            [k, k, j, j, j, j, j, j, j, j, k],
            [k]
        ],
        floorZIndices: [
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, f, f, f, f, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_HALLWAY_TILES = {
        // Indoor wall is 7.5'.
        ceilingZIndices: [
            [k, g, g, g, g, g, g, g, g, g, g, k]
        ],
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, g, 1, 1, 1, g, g, g, g, g, g, 0],
            [0, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_BED_TILES = {
        // Outdoor wall is 8'. Indoor wall is 7.5'. Bed is 7.5 long, 1' tall.
        floorZIndices: [
            [h],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
            [g, g, 1, 1, 1, g, 7, 7, 7, 7, g],
            [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
            [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
            [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COURTYARD_TILES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        floorZIndices: [
            [1, h],
            [1, h, 1],
            [1, h, 7, 7, 7, 7, h, 1, 1, 1, h],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COUCH_TILES = {
        // Indoor wall is 7.5'. Couch seat cushions add extra 0.5'.
        ceilingZIndices: [
            [g]
        ],
        floorZIndices: [
            [g],
            [g, 1, 4, 7, 7, 7, 7, 7, 1, 1, 1, g],
            [g, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, g],
            [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
            [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COUCH_THOUGHT_TILES = {
        // Couch seat cushions add extra half foot.
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 0],
            [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
            [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_GATE_TILES = {
        floorZIndices: [
            [h],
            [h, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
            [h, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, h],
            [1],
            [1],
            [0],
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CATHOLIC_CHURCH_TILES = {
        floorZIndices: [
            [0],
            [0],
            [0],
            [0],
            [1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_1_TILES = {
        // Outdoor wall is 8'. Platform is 1'.
        floorZIndices: [
            [1, 9, 3, j],
            [1, 9, 3],
            [1, 9, 9, 9, 9, 9, 9, 9, 3, 3, 3, 9],
            [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_2_TILES = {
        floorZIndices: [
            [j, j, j, 3, 9, 1],
            [3, 3, 3, 3, 9, 1],
            [9, 9, 9, 9, 9, 1],
            [1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JACOB_APARTMENT_TILES = {
        // Basement wall is 6', depth is 2.5'. Seats are 1'.
        ceilingZIndices: [
            [h]
        ],
        floorZIndices: [
            [h, h, h, h, h, h, h, h, h, 5, 5, h],
            [5],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0],
            [0, 0, 0, 2, 0, 2, 0, 0, 0, 3, 3, 0],
            [0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_1_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [h],
            [h, h, h, 1, 1, 1, 1, 1, 1, h],
            [h, h, h, 1, 1, 1, 1, 1, 1, h],
            [1],
            [1],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_2_TILES = {
        floorZIndices: [
            [h, h, h, 1, 1, 0],
            [h, h, h, 1, 1, 0],
            [h, h, h, 1, 1, 0],
            [1],
            [1],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    MUSEUM_TILES = {
        floorZIndices: [
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BACKSTAGE_TILES = {
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    GO_KART_TILES = {
        floorZIndices: [
            [0],
            [0],
            [0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
            [0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DISHROOM_TILES = {
        // Indoor wall is 7.5'. Sink is 3'. Conveyor is 5.5'.
        floorZIndices: [
            [g, g, g, g, g, g, g, g, g, g, 6],
            [1, 1, c, c, c, c, c, c, 1, g, 5],
            [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 4],
            [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 2],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    WAITING_ROOM_TILES = {
        floorZIndices: [
            [0, g, g, g, g, g, g, g, g, g, g, 0],
            [0, 1, 7, 7, 1, 7, 7, 1, 1, 1, g, 0],
            [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
            [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    UCLA_CAMPUS_TILES = {
        floorZIndices: [
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    WALGREENS_TILES = {
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    STEAM_TUNNEL_TILES = {
        floorZIndices: [
            [h],
            [5],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CEMETERY_TILES = {
        // TODO: Make more natural.
        // Hill.
        floorZIndices: [
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    STATION_WAGON_TILES = {
        floorZIndices: [
            [0],
            [0, a, a, a, a, a, a, a, a, 6, 6, 0],
            [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
            [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    HOWIE_ATTIC_TILES = {
        floorZIndices: [
            [k],
            [9, g, g, g, g, g, 9, 8, 7, 7, 1],
            [9, c, c, c, c, c, 9, f, 6, 6, 1],
            [9, c, c, c, c, c, 9, f, 5, 5, 1],
            [9, 9, 9, 9, 9, 9, 9, f, 4, 4, 1],
            [9, 9, c, c, 9, 9, 9, f, 3, 3, 2, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_FRONT_TILES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        floorZIndices: [
            [j],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_FRONT_FAR_TILES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        ceilingZIndices: [
            [j]
        ],
        floorZIndices: [
            [j],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_SIDE_1_TILES = {
        ceilingZIndices: [
            [j]
        ],
        floorZIndices: [
            [j],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_SIDE_2_TILES = {
        ceilingZIndices: [
            [j]
        ],
        floorZIndices: [
            [j],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [j, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_UNLOADING_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [1, 1, i],
            [1, 1, i, 1],
            [1, 1, i, 1, 1, 1, i],
            [1, 1, 1, 1, 1, 1, 7, 1],
            [1, 1, 1, 1, 1, 1, 7, 1],
            [1, 1, 1, 1, 1, 1, 7, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    SITA_APARTMENT_BED_TILES = {
        floorZIndices: [
            [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_COUCH_TILES = {
        // Indoor wall is 7.5'.
        floorZIndices: [
            [1],
            [g, g, g, g, g, 7, 7, 7, 7, 7, g, g],
            [g, 7, 3, 3, 1],
            [g, 7, 3, 3, 1],
            [g, 7, 3, 3, 1],
            [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_COUCH_THOUGHT_TILES = {
        floorZIndices: [
            [1],
            [1],
            [1, 7, 3, 3, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_1_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [h, h, h, h, h, h, h, h, h, h, 1, 7],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
            [7, 7, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7],
            [1],
            [1],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_2_TILES = {
        floorZIndices: [
            [h, h, h, h, h, 1, 7, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
            [7, 1, 1, 1, 7, 7, 7, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    VOLKSWAGEN_TILES = {
        // Same as Catholic church tiles.
        floorZIndices: [
            [0],
            [0],
            [0],
            [0],
            [1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_SIDE_TILES = {
        floorZIndices: [
            [1],
            [0],
            [0],
            [0],
            [0],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_1_TILES = {
        floorZIndices: [
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_2_TILES = {
        floorZIndices: [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_3_TILES = {
        floorZIndices: [
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_1_TILES = {
        floorZIndices: [
            [k],
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_2_TILES = {
        floorZIndices: [
            [k],
            [k, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
            [k, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
            [k, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
            [k, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_3_TILES = {
        floorZIndices: [
            [k],
            [k, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
            [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CREMATED_CLIFF_TILES = {
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
        floorZIndices: [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CREMATED_CLIFF_CONVERTIBLE_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [4, 4, 4, 8, 8, 4, 4, 4, 4, 4, 0],
            [4, 4, 8, 6, 8, 8, 4, 4, 4, 4, 0],
            [4, 4, 8, 6, 6, 8, 8, 8, 4, 4, 0],
            [4, 4, 8, 6, 6, 8, 6, 6, 4, 4, 0],
            [4, 4, 4, 6, 8, 6, 6, 4, 4, 4, 0],
            [4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CREMATED_DEATHBED_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [0, 0, g, g, g, 0],
            [0, g, 7, 7, g, g, 0],
            [0, g, 7, 7, 7, 7, g, g, 0],
            [0, g, 7, 7, 7, 7, 7, 1, 0],
            [g, 1, 1, 7, 7, 7, 1, 0],
            [g, 1, 1, 1, 1, 7, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CREMATED_DEATHBED_TENNIS_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [0, 0, g, g, g, 0],
            [0, g, 7, 7, g, g, 0, 0, 0, 1],
            [0, g, 7, 7, 7, 7, g, g, 0, 1],
            [0, g, 7, 7, 7, 7, 7, 1, 0, 1],
            [g, 1, 1, 7, 7, 7, 1, 0, 0, 1, 0],
            [g, 1, 1, 1, 1, 7, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PARK_TILES = {
        floorZIndices: [
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ALLEY_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [h],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DEMONSTRATION_TILES = {
        floorZIndices: [
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    EL_TORITO_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [h, h, h, h, 1, 1, 1, 1, h],
            [1],
            [1, h, 1, 1, 1, 1, 1, 1, 1, 1, h, 1],
            [1],
            [1],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PAMPAS_TILES = {
        // TODO: Make more natural.
        // Grass.
        slantDirection: RIGHT,
        floorZIndices: [
            [4]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    OUTDOOR_WEDDING_TILES = {
        // TODO: Make more natural.
        // Grass.
        slantDirection: RIGHT,
        floorZIndices: [
            [4]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DREAM_CLIFF_TILES = {
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
        floorZIndices: [
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DREAM_DEATHBED_TILES = {
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
        floorZIndices: [
            [0, 0, g, g, g, 0, 0, 0, 0, 0, 0, 0],
            [0, g, 7, 7, g, g, 0, 0, 0, 4, 4, 4],
            [0, g, 7, 7, 7, 7, g, g, 0, 4, 4, 4],
            [0, g, 7, 7, 7, 7, 7, 1, 0, 4, 4, 4],
            [g, 1, 1, 7, 7, 7, 1, 0, 0, 4, 0, 0],
            [g, 1, 1, 1, 1, 7, 1, 0, 0, 0, 0, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    }

module.exports = {
    DEFAULT_STAGE_TILES,
    LOGUE_TILES,
    CHILDHOOD_NEIGHBOURHOOD_TILES,
    PLAYGROUND_TILES,
    CHILDHOOD_BATHROOM_TILES,
    FREEWAY_TILES,
    PORCH_TILES,
    PRETEEN_BENNETT_ROOM_TILES,
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES,
    CHANGELING_CAVE_TILES,
    TAIWAN_PUPPET_SHOW_TILES,
    SCHOOLBUS_TILES,
    TETHERBALL_SCENE_TILES,
    ODIN_SCENE_1_TILES,
    ODIN_SCENE_2_TILES,
    ODIN_SCENE_3_TILES,
    ODIN_SCENE_4_TILES,
    ODIN_SCENE_5_TILES,
    ODIN_SCENE_6_TILES,
    ODIN_SCENE_7_TILES,
    ODIN_SCENE_8_TILES,
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES,
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES,
    JUNIOR_HIGH_LOCKERS_TILES,
    JUNIOR_HIGH_QUAD_TILES,
    JUNIOR_HIGH_HALLWAY_TILES,
    BENNETT_APARTMENT_COURTYARD_TILES,
    BENNETT_APARTMENT_COUCH_TILES,
    BENNETT_APARTMENT_COUCH_THOUGHT_TILES,
    CATHOLIC_CHURCH_TILES,
    BERKELEY_CAMPUS_1_TILES,
    BERKELEY_CAMPUS_2_TILES,
    SHOW_STAGE_FRONT_TILES,
    SHOW_STAGE_FRONT_FAR_TILES,
    JACOB_APARTMENT_TILES,
    MOVIE_THEATRE_1_TILES,
    MOVIE_THEATRE_2_TILES,
    SITA_APARTMENT_GATE_1_TILES,
    SITA_APARTMENT_GATE_2_TILES,
    MUSEUM_TILES,
    BACKSTAGE_TILES,
    GO_KART_TILES,
    DISHROOM_TILES,
    BENNETT_APARTMENT_GATE_TILES,
    BENNETT_APARTMENT_BED_TILES,
    WAITING_ROOM_TILES,
    SITA_APARTMENT_BED_TILES,
    UCLA_CAMPUS_TILES,
    WALGREENS_TILES,
    STEAM_TUNNEL_TILES,
    CEMETERY_TILES,
    STATION_WAGON_TILES,
    HOWIE_ATTIC_TILES,
    SHOW_STAGE_SIDE_1_TILES,
    SHOW_STAGE_SIDE_2_TILES,
    SHOW_UNLOADING_TILES,
    SITA_APARTMENT_COUCH_TILES,
    SITA_APARTMENT_COUCH_THOUGHT_TILES,
    VOLKSWAGEN_TILES,
    OAKLAND_STREET_SIDE_TILES,
    OAKLAND_STREET_FRONT_1_TILES,
    OAKLAND_STREET_FRONT_2_TILES,
    OAKLAND_STREET_FRONT_3_TILES,
    SNOW_GLOBES_1_TILES,
    SNOW_GLOBES_2_TILES,
    SNOW_GLOBES_3_TILES,
    CREMATED_CLIFF_TILES,
    CREMATED_CLIFF_CONVERTIBLE_TILES,
    CREMATED_DEATHBED_TILES,
    CREMATED_DEATHBED_TENNIS_TILES,
    PARK_TILES,
    ALLEY_TILES,
    DEMONSTRATION_TILES,
    EL_TORITO_TILES,
    PAMPAS_TILES,
    OUTDOOR_WEDDING_TILES,
    DREAM_CLIFF_TILES,
    DREAM_DEATHBED_TILES
}
