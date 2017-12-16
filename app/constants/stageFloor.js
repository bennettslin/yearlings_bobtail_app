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
            [LAWN_COLOUR],
            [SIDEWALK_COLOUR],
            [STREET_COLOUR]
        ]
    },
    PLAYGROUND_TILES = {
        zIndices: [
            [1],
            [1],
            [1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
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
        zIndices: [
            [0],
            [0],
            [0],
            [1],
            [1, 1, 1, 1, 2, 2, 2, 1],
            [1]
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

    // TODO...
    FREEWAY_TILES = {
        zIndices: [
            [5],
            [5],
            [5],
            [0],
            [0],
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PORCH_TILES = {
        zIndices: [
            [1],
            [1],
            [1, 1, 1, 3, 3, 3, 3, 3, 3, 1],
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
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_2_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_3_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_4_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_5_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_6_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_7_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_8_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_LOCKERS_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_QUAD_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_HALLWAY_TILES = {
        zIndices: [
            [0]
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
        zIndices: [
            [0]
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
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_1_TILES = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_2_TILES = {
        zIndices: [
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
            [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },

    SHOW_STAGE_SIDE_1_TILES = {
        zIndices: [
            [4, 4, 4, 1],
            [4, 4, 4, 1],
            [4, 4, 4, 1],
            [4, 4, 4, 1],
            [4, 4, 4, 1],
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_SIDE_2_TILES = {
        zIndices: [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
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
    CHILDHOOD_NEIGHBOURHOOD_TILES,
    PLAYGROUND_TILES,
    CHILDHOOD_BATHROOM_TILES,
    FREEWAY_TILES,
    PORCH_TILES,
    PRETEEN_BENNETT_ROOM_TILES,
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
