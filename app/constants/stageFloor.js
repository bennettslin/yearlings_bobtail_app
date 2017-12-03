// Check out Peoria Symphony Orchestra.

// TODO: Tweak colours.
const BATHROOM_COLOUR = 'purple',
    CAMPUS_COLOUR = 'gray',
    LAWN_COLOUR = 'green',
    STAGE_COLOUR = 'brown',
    STREET_COLOUR = 'black',
    SIDEWALK_COLOUR = 'gray',
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
            [1]
        ],
        colours: [
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
            [BATHROOM_COLOUR]
        ]
    },
    FREEWAY_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PORCH_FLOOR_PANELS = {
        zIndices: [
            [0]
        ],
        colours: [
            [STAGE_COLOUR]
        ]
    },
    PRETEEN_BENNETT_ROOM_FLOOR_PANELS = {
        zIndices: [
            [0]
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
}
