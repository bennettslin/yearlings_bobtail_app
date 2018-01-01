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

    LEFT = 'left',
    RIGHT = 'right',

    DEFAULT_STAGE_TILES = {
        ceilingZIndices: [
            [20]
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
        floorZIndices: [
            [0, 0, 16, 16, 16, 16, 16, 16, 16, 16, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
            [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
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
            [17, 17, 17, 19, 19, 19, 19, 19, 19, 17],
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
            [0, 18, 9, 9, 9, 9, 9, 9, 18, 18, 9, 0],
            [0, 18, 6, 6, 3, 6, 6, 3, 18, 18, 9, 0],
            [0, 18, 6, 6, 3, 6, 6, 3, 18, 18, 9, 0],
            [0, 18, 3, 3, 3, 3, 3, 3, 18, 18, 9, 0],
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
            [20, 20, 20, 20, 20, 20, 5, 5, 5, 20],
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
            [20, 20, 20, 11, 11, 11, 11, 11, 11, 20],
            [20, 5, 5, 4, 3, 2, 1, 0],
            [20, 5, 5, 4, 3, 2, 1, 0],
            [20, 5, 5, 4, 3, 2, 1, 0],
            [20, 5, 5]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_3_TILES = {
        // House wall is 6'.
        floorZIndices: [
            [1, 1, 13, 1, 1, 1, 0],
            [1, 1, 13, 1, 1, 1, 0],
            [1, 1, 13, 1, 1, 1, 0],
            [1, 1, 13, 1, 1, 1, 0],
            [1, 1, 13, 1, 1, 1, 0],
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
    PRETEEN_BENNETT_ROOM_TILES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        floorZIndices: [
            [1],
            [1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
            [1, 1, 5, 5, 1, 1, 1, 8, 8, 8, 1],
            [1, 5, 5, 1, 1, 1, 1, 1, 8, 8, 8, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES = {
        slantDirection: LEFT,
        floorZIndices: [
            [1],
            [1],
            [1, 1, 5, 5, 1],
            [1, 5, 5, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES = {
        slantDirection: LEFT,
        // TODO: Figure out.
        floorZIndices: [
            [1],
            [1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
            [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES = {
        slantDirection: LEFT,
        // TODO: Figure out.
        floorZIndices: [
            [1],
            [1],
            [1, 1, 5, 5, 1],
            [1, 5, 5, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_LOCKERS_TILES = {
        // Overall height of lockers is 6.5'.
        floorZIndices: [
            [1],
            [1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 15, 15, 15, 15, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_QUAD_TILES = {
        floorZIndices: [
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 15, 15, 15, 15, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_HALLWAY_TILES = {
        // Indoor wall is 7.5'.
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 16, 1, 1, 1, 16, 16, 16, 16, 16, 1, 0],
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
            [17],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17],
            [16, 16, 1, 1, 1, 16, 7, 7, 7, 7, 16],
            [16, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 16],
            [16, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 16],
            [16, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 16]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COURTYARD_TILES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        floorZIndices: [
            [1, 17],
            [1, 17, 1],
            [1, 17, 7, 7, 7, 7, 17, 1, 1, 1, 17],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COUCH_TILES = {
        // Indoor wall is 7.5'. Couch seat cushions add extra 0.5'.
        floorZIndices: [
            [16],
            [16, 1, 4, 7, 7, 7, 7, 7, 1, 1, 1, 16],
            [16, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 16],
            [16, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 16],
            [16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16]
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
            [17],
            [17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17],
            [17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17],
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
            [1, 9, 3, 19],
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
            [19, 19, 19, 3, 9, 1],
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
        floorZIndices: [
            [17, 17, 17, 17, 17, 17, 17, 17, 17, 5, 5, 17],
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
            [17],
            [17, 17, 17, 1, 1, 1, 1, 1, 1, 17],
            [17, 17, 17, 1, 1, 1, 1, 1, 1, 17],
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
            [17, 17, 17, 1, 1, 0],
            [17, 17, 17, 1, 1, 0],
            [17, 17, 17, 1, 1, 0],
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
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 6],
            [1, 1, 12, 12, 12, 12, 12, 12, 1, 16, 5],
            [1, 1, 7, 7, 7, 7, 7, 7, 1, 16, 4],
            [1, 1, 7, 7, 7, 7, 7, 7, 1, 16, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 2],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    WAITING_ROOM_TILES = {
        floorZIndices: [
            [0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0],
            [0, 1, 7, 7, 1, 7, 7, 1, 1, 1, 16, 0],
            [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
            [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 0]
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
            [17],
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
            [0, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 0],
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
            [20],
            [9, 16, 16, 16, 16, 16, 9, 8, 7, 7, 1],
            [9, 12, 12, 12, 12, 12, 9, 15, 6, 6, 1],
            [9, 12, 12, 12, 12, 12, 9, 15, 5, 5, 1],
            [9, 9, 9, 9, 9, 9, 9, 15, 4, 4, 1],
            [9, 9, 12, 12, 9, 9, 9, 15, 3, 3, 2, 1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_FRONT_TILES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        floorZIndices: [
            [19],
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
        floorZIndices: [
            [19],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_SIDE_1_TILES = {
        floorZIndices: [
            [19],
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
        floorZIndices: [
            [19],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [19, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_UNLOADING_TILES = {
        // Outdoor wall is 8'.
        floorZIndices: [
            [1, 1, 18],
            [1, 1, 18, 1],
            [1, 1, 18, 1, 1, 1, 18],
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
            [1, 7, 7, 10, 9, 9, 9, 9, 7, 7, 7, 1],
            [1, 7, 7, 10, 9, 9, 9, 9, 7, 7, 7, 1],
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
            [16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 16, 16],
            [16, 7, 3, 3, 1],
            [16, 7, 3, 3, 1],
            [16, 7, 3, 3, 1],
            [16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16]
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
            [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 1, 7],
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
            [17, 17, 17, 17, 17, 1, 7, 1, 1, 0],
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
            [20],
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
            [20],
            [20, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
            [20, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
            [20, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
            [20, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
            [0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_3_TILES = {
        floorZIndices: [
            [20],
            [20, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
            [20, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [20, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [20, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
            [0]
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
            [17],
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
            [17, 17, 17, 17, 1, 1, 1, 1, 17],
            [1],
            [1, 17, 1, 1, 1, 1, 1, 1, 1, 1, 17, 1],
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
        floorZIndices: [
            [4]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CLIFF_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    CLIFF_CONVERTIBLE_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [4, 4, 6, 4, 4, 4, 4, 4, 4, 0],
            [4, 6, 6, 6, 4, 4, 4, 4, 4, 0],
            [4, 4, 6, 6, 8, 4, 4, 4, 4, 0],
            [4, 4, 4, 8, 6, 6, 4, 4, 4, 0],
            [4, 4, 4, 4, 6, 4, 4, 4, 4, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DEATHBED_TILES = {
        // Only in Cremated.
        slantDirection: RIGHT,
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 7, 1, 1, 1, 0],
            [0, 1, 7, 7, 7, 1, 1, 0],
            [0, 1, 1, 7, 7, 7, 1, 0],
            [0, 1, 1, 1, 7, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DEATHBED_CLIFF_THOUGHT_TILES = {
        // Only in 100,000th Dream.
        slantDirection: RIGHT,
        floorZIndices: [
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 7, 1, 1, 1, 0],
            [0, 1, 7, 7, 7, 1, 1, 0, 4, 4, 4, 0],
            [0, 1, 1, 7, 7, 7, 1, 0, 4, 4, 4, 0],
            [0, 1, 1, 1, 7, 1, 1, 0, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 1, 0]
        ],
        floorColours: [
            [STAGE_COLOUR]
        ]
    },
    DEATHBED_TENNIS_THOUGHT_TILES = {
        slantDirection: RIGHT,
        floorZIndices: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    CLIFF_TILES,
    CLIFF_CONVERTIBLE_TILES,
    PARK_TILES,
    ALLEY_TILES,
    DEMONSTRATION_TILES,
    EL_TORITO_TILES,
    PAMPAS_TILES,
    OUTDOOR_WEDDING_TILES,
    DEATHBED_TILES,
    DEATHBED_CLIFF_THOUGHT_TILES,
    DEATHBED_TENNIS_THOUGHT_TILES
}
