// Check out Peoria Symphony Orchestra.

// TODO: Tweak colours.
const BATHROOM_COLOUR = 'purple',
    CAMPUS_COLOUR = 'gray',
    LAWN_COLOUR = 'green',
    STAGE_COLOUR = 'brown',
    STREET_COLOUR = 'black',
    SIDEWALK_COLOUR = 'gray',
    FURNITURE_COLOUR = '#bbb',
    DEFAULT_STAGE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CHILDHOOD_NEIGHBOURHOOD_FLOOR_PANELS = {
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
    PLAYGROUND_FLOOR_PANELS = {
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
    CHILDHOOD_BATHROOM_FLOOR_PANELS = {
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
    FREEWAY_FLOOR_PANELS = {
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
    PORCH_FLOOR_PANELS = {
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
    PRETEEN_BENNETT_ROOM_FLOOR_PANELS = {
        zIndices: [
            [1]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CHANGELING_CAVE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    TAIWAN_PUPPET_SHOW_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SCHOOLBUS_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    TETHERBALL_SCENE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_3_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_4_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_5_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_6_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_7_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ODIN_SCENE_8_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_LOCKERS_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_QUAD_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JUNIOR_HIGH_HALLWAY_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COURTYARD_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_COUCH_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CATHOLIC_CHURCH_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BERKELEY_CAMPUS_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_FRONT_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    JACOB_APARTMENT_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MOVIE_THEATRE_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_GATE_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    MUSEUM_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BACKSTAGE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    GO_KART_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DISHROOM_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_GATE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    BENNETT_APARTMENT_BED_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    WAITING_ROOM_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_BED_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    UCLA_CAMPUS_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    WALGREENS_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    STEAM_TUNNEL_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CEMETERY_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    STATION_WAGON_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    HOWIE_ATTIC_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_SIDE_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_STAGE_SIDE_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SHOW_UNLOADING_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SITA_APARTMENT_COUCH_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    VOLKSWAGEN_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_SIDE_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OAKLAND_STREET_FRONT_3_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_1_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_2_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    SNOW_GLOBES_3_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    CLIFF_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PARK_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    ALLEY_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DEMONSTRATION_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    EL_TORITO_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PAMPAS_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    OUTDOOR_WEDDING_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    DEATHBED_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    }

module.exports = {
    DEFAULT_STAGE_FLOOR_PANELS,
    CHILDHOOD_NEIGHBOURHOOD_FLOOR_PANELS,
    PLAYGROUND_FLOOR_PANELS,
    CHILDHOOD_BATHROOM_FLOOR_PANELS,
    FREEWAY_FLOOR_PANELS,
    PORCH_FLOOR_PANELS,
    PRETEEN_BENNETT_ROOM_FLOOR_PANELS,
    CHANGELING_CAVE_FLOOR_PANELS,
    TAIWAN_PUPPET_SHOW_FLOOR_PANELS,
    SCHOOLBUS_FLOOR_PANELS,
    TETHERBALL_SCENE_FLOOR_PANELS,
    ODIN_SCENE_1_FLOOR_PANELS,
    ODIN_SCENE_2_FLOOR_PANELS,
    ODIN_SCENE_3_FLOOR_PANELS,
    ODIN_SCENE_4_FLOOR_PANELS,
    ODIN_SCENE_5_FLOOR_PANELS,
    ODIN_SCENE_6_FLOOR_PANELS,
    ODIN_SCENE_7_FLOOR_PANELS,
    ODIN_SCENE_8_FLOOR_PANELS,
    JUNIOR_HIGH_LOCKERS_FLOOR_PANELS,
    JUNIOR_HIGH_QUAD_FLOOR_PANELS,
    JUNIOR_HIGH_HALLWAY_FLOOR_PANELS,
    BENNETT_APARTMENT_COURTYARD_FLOOR_PANELS,
    BENNETT_APARTMENT_COUCH_FLOOR_PANELS,
    CATHOLIC_CHURCH_FLOOR_PANELS,
    BERKELEY_CAMPUS_1_FLOOR_PANELS,
    BERKELEY_CAMPUS_2_FLOOR_PANELS,
    SHOW_STAGE_FRONT_FLOOR_PANELS,
    JACOB_APARTMENT_FLOOR_PANELS,
    MOVIE_THEATRE_1_FLOOR_PANELS,
    MOVIE_THEATRE_2_FLOOR_PANELS,
    SITA_APARTMENT_GATE_1_FLOOR_PANELS,
    SITA_APARTMENT_GATE_2_FLOOR_PANELS,
    MUSEUM_FLOOR_PANELS,
    BACKSTAGE_FLOOR_PANELS,
    GO_KART_FLOOR_PANELS,
    DISHROOM_FLOOR_PANELS,
    BENNETT_APARTMENT_GATE_FLOOR_PANELS,
    BENNETT_APARTMENT_BED_FLOOR_PANELS,
    WAITING_ROOM_FLOOR_PANELS,
    SITA_APARTMENT_BED_FLOOR_PANELS,
    UCLA_CAMPUS_FLOOR_PANELS,
    WALGREENS_FLOOR_PANELS,
    STEAM_TUNNEL_FLOOR_PANELS,
    CEMETERY_FLOOR_PANELS,
    STATION_WAGON_FLOOR_PANELS,
    HOWIE_ATTIC_FLOOR_PANELS,
    SHOW_STAGE_SIDE_1_FLOOR_PANELS,
    SHOW_STAGE_SIDE_2_FLOOR_PANELS,
    SHOW_UNLOADING_FLOOR_PANELS,
    SITA_APARTMENT_COUCH_FLOOR_PANELS,
    VOLKSWAGEN_FLOOR_PANELS,
    OAKLAND_STREET_SIDE_FLOOR_PANELS,
    OAKLAND_STREET_FRONT_1_FLOOR_PANELS,
    OAKLAND_STREET_FRONT_2_FLOOR_PANELS,
    OAKLAND_STREET_FRONT_3_FLOOR_PANELS,
    SNOW_GLOBES_1_FLOOR_PANELS,
    SNOW_GLOBES_2_FLOOR_PANELS,
    SNOW_GLOBES_3_FLOOR_PANELS,
    CLIFF_FLOOR_PANELS,
    PARK_FLOOR_PANELS,
    ALLEY_FLOOR_PANELS,
    DEMONSTRATION_FLOOR_PANELS,
    EL_TORITO_FLOOR_PANELS,
    PAMPAS_FLOOR_PANELS,
    OUTDOOR_WEDDING_FLOOR_PANELS,
    DEATHBED_FLOOR_PANELS
}
