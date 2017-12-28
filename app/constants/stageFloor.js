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

const DEFAULT_STAGE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    LOGUE_TILES = {
        zIndices: [
            [0],
            [0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
            [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0],
            [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CHILDHOOD_NEIGHBOURHOOD_TILES = {
        zIndices: [
            [1],
            [1],
            [1],
            [1],
            [1],
            [0]
        ],
        colours: [
            [LAWN_COLOUR],
            [LAWN_COLOUR],
            [LAWN_COLOUR],
            [SIDEWALK_COLOUR],
            [SIDEWALK_COLOUR],
            [STREET_COLOUR]
        ]
    },
    PLAYGROUND_TILES = {
        // Raised nurse's office bench.
        zIndices: [
            [1],
            [1],
            [1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
            [1]
        ],
        colours: [
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR],
            [CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, FURNITURE_COLOUR, CAMPUS_COLOUR],
            [CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, CAMPUS_COLOUR, FURNITURE_COLOUR, CAMPUS_COLOUR],
            [CAMPUS_COLOUR]
        ]
    },
    CHILDHOOD_BATHROOM_TILES = {
        // Raised bathtub.
        zIndices: [
            [0, 0, 16, 16, 16, 16, 16, 16, 16, 16, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
            [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        colours: [
            [STAGE_COLOUR],
            [STAGE_COLOUR],
            [STAGE_COLOUR],
            [BATHROOM_COLOUR],
            [BATHROOM_COLOUR, BATHROOM_COLOUR, BATHROOM_COLOUR, BATHROOM_COLOUR, FURNITURE_COLOUR, FURNITURE_COLOUR, FURNITURE_COLOUR, BATHROOM_COLOUR],
            [BATHROOM_COLOUR]
        ]
    },
    FREEWAY_TILES = {
        // Raised overpass.
        zIndices: [
            [0],
            [8],
            [5],
            [5],
            [0],
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PORCH_TILES = {
        zIndices: [
            [1, 1, 1, 18, 18, 18, 18, 18, 18, 1],
            [1, 1, 1, 4, 4, 4, 4, 4, 4, 1],
            [1, 1, 1, 4, 4, 4, 4, 4, 4, 1],
            [1, 1, 1, 3, 3, 3, 3, 3, 3, 1],
            [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_TILES = {
        zIndices: [
            [1],
            [1, 1, 1, 1, 1, 1, 6, 6, 6, 1],
            [1, 1, 5, 5, 1, 1, 1, 6, 6, 6, 1],
            [1, 5, 5, 1, 1, 1, 1, 1, 6],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CHANGELING_CAVE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    TAIWAN_PUPPET_SHOW_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SCHOOLBUS_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    TETHERBALL_SCENE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_1_TILES = {
        zIndices: [
            [4],
            [4],
            [4],
            [16, 16, 16, 16, 16, 16, 4, 4, 4, 16],
            [4],
            [4]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_2_TILES = {
        // Stairwell down.
        zIndices: [
            [16, 16, 16, 8, 8, 8, 8, 8, 8, 16],
            [16, 4, 4, 3, 2, 1, 0],
            [16, 4, 4, 3, 2, 1, 0],
            [16, 4, 4, 3, 2, 1, 0],
            [16, 4]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_3_TILES = {
        // House wall.
        zIndices: [
            [1, 1, 14, 1, 1, 1, 0],
            [1, 1, 14, 1, 1, 1, 0],
            [1, 1, 14, 1, 1, 1, 0],
            [1, 1, 14, 1, 1, 1, 0],
            [1, 1, 14, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_4_TILES = {
        // TODO: Make more natural.
        // Sand.
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_5_TILES = {
        // TODO: Make more natural.
        // Sand.
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_6_TILES = {
        // TODO: Make more natural.
        // Ocean wave.
        zIndices: [
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_7_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_8_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_OPEN_BED_TILES = {
        zIndices: [
            [1],
            [1],
            [1, 1, 5, 5, 1],
            [1, 5, 5, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_TILES = {
        // TODO: Figure out.
        zIndices: [
            [1],
            [1, 1, 1, 1, 1, 1, 6, 6, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 6],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_TILES = {
        // TODO: Figure out.
        zIndices: [
            [1],
            [1],
            [1, 1, 5, 5, 1],
            [1, 5, 5, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_LOCKERS_TILES = {
        // Overall height of lockers is 78".
        zIndices: [
            [1],
            [1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 15, 15, 15, 15, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_QUAD_TILES = {
        zIndices: [
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 1, 2, 2, 2, 15, 15, 15, 15, 2, 1],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_HALLWAY_TILES = {
        zIndices: [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 16, 1, 1, 1, 16, 16, 16, 16, 16, 1, 0],
            [0, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COURTYARD_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COUCH_TILES = {
        // Couch seat cushions add extra half foot.
        zIndices: [
            [16],
            [16, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 16],
            [16, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 16],
            [16, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 16],
            [16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CATHOLIC_CHURCH_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_1_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_2_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JACOB_APARTMENT_TILES = {
        zIndices: [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 6, 6, 16],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_1_TILES = {
        zIndices: [
            [18],
            [18, 18, 18, 1, 1, 1, 1, 1, 1, 18],
            [18, 18, 18, 1, 1, 1, 1, 1, 1, 18],
            [1],
            [1],
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_2_TILES = {
        zIndices: [
            [18, 18, 18, 1, 1, 1, 0],
            [18, 18, 18, 1, 1, 1, 0],
            [18, 18, 18, 1, 1, 1, 0],
            [1],
            [1],
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    MUSEUM_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BACKSTAGE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    GO_KART_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DISHROOM_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_GATE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_BED_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    WAITING_ROOM_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    UCLA_CAMPUS_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    WALGREENS_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    STEAM_TUNNEL_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CEMETERY_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    STATION_WAGON_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    HOWIE_ATTIC_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_FRONT_TILES = {
        zIndices: [
            [18],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_SIDE_1_TILES = {
        zIndices: [
            [18],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [6, 6, 6, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_SIDE_2_TILES = {
        zIndices: [
            [18],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_UNLOADING_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    SITA_APARTMENT_BED_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_COUCH_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_1_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_2_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    VOLKSWAGEN_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_SIDE_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_1_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_2_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_3_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_1_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_2_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_3_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CLIFF_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PARK_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ALLEY_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DEMONSTRATION_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    EL_TORITO_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PAMPAS_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OUTDOOR_WEDDING_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DEATHBED_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
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
    CATHOLIC_CHURCH_TILES,
    BERKELEY_CAMPUS_1_TILES,
    BERKELEY_CAMPUS_2_TILES,
    SHOW_STAGE_FRONT_TILES,
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
    VOLKSWAGEN_TILES,
    OAKLAND_STREET_SIDE_TILES,
    OAKLAND_STREET_FRONT_1_TILES,
    OAKLAND_STREET_FRONT_2_TILES,
    OAKLAND_STREET_FRONT_3_TILES,
    SNOW_GLOBES_1_TILES,
    SNOW_GLOBES_2_TILES,
    SNOW_GLOBES_3_TILES,
    CLIFF_TILES,
    PARK_TILES,
    ALLEY_TILES,
    DEMONSTRATION_TILES,
    EL_TORITO_TILES,
    PAMPAS_TILES,
    OUTDOOR_WEDDING_TILES,
    DEATHBED_TILES
}
