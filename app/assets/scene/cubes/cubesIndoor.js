// Separating indoor cubes purely for purpose of keeping file smaller.

import {
    CHILDHOOD_BATHROOM_KEY,
    PRETEEN_BENNETT_ROOM_KEY,
    PRETEEN_BENNETT_ROOM_OPEN_BED_KEY,
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_KEY,
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_KEY,
    JUNIOR_HIGH_HALLWAY_KEY,
    BENNETT_APARTMENT_COUCH_KEY,
    BENNETT_APARTMENT_COUCH_THOUGHT_KEY,
    BENNETT_BASEMENT_KEY,
    SHOW_STAGE_FRONT_KEY,
    SHOW_STAGE_FRONT_FAR_KEY,
    REHEARSAL_SPACE_KEY,
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    DISHROOM_KEY,
    BENNETT_APARTMENT_BED_KEY,
    WAITING_ROOM_KEY,
    SITA_APARTMENT_BED_KEY,
    WALGREENS_KEY,
    STEAM_TUNNEL_KEY,
    HOWIE_ATTIC_KEY,
    SHOW_STAGE_SIDE_1_KEY,
    SHOW_STAGE_SIDE_2_KEY,
    SITA_APARTMENT_COUCH_KEY,
    SITA_APARTMENT_COUCH_THOUGHT_KEY
} from './cubesKeys'

import {
    a,
    // b,
    c,
    // d,
    // e,
    f,
    g,
    k,
    LEFT,
    // RIGHT
} from './cubesConstants'

const

    CHILDHOOD_BATHROOM_CUBES = {
        // Indoor wall is 7.5'. Raised bathtub.
        ceiling: {
            zIndices: [
                [k, g, g, g, g, g, g, g, g, g, g, k]
            ]
        },
        floor: {
            zIndices: [
                [0, g, g, g, g, g, g, g, g, g, g, 0],
                [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
                [0, g, 1, 2, 2, 2, 2, 1, 1, 1, g, 0],
                [0, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
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
    PRETEEN_BENNETT_ROOM_CUBES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING
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
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_OPEN_BED_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, g, g, 1, g, 1, 1, g, 0],
                [0, 0, g, g, 5, 1, 1, 1, 1, 1, g, 0],
                [g, g, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        },
        presences: {
            song5_scene0: {

                cubes5: {
                    fixtures: [
                        {
                            name: 'sample fixture 4',
                            xFloat: 5,
                            xWidth: 1,
                            zHeight: 2
                        },
                        {
                            name: 'sample fixture 4',
                            xFloat: 7.5,
                            zOffset: 0.5,
                            xWidth: 2,
                            zHeight: 1
                        },
                        {
                            name: 'sample fixture 4',
                            xFloat: 11,
                            zOffset: 0.5,
                            xWidth: 1,
                            zHeight: 1
                        },
                    ]
                }
            }
        }
    },
    PRETEEN_BENNETT_ROOM_LEFT_REVEALED_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, g, g, g, 0],
                [1, 1, 1, 1, 1, 1, g, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 8, 8, 8, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, g]
            ]
        }
    },
    PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: PRETEEN_BENNETT_ROOM_CEILING
        },
        floor: {
            zIndices: [
                [0, 0, 0, 0, 0, g, 1],
                [0, 0, 0, g, g, 1],
                [0, 0, g, g, 5, 1],
                [g, g, 5, 5, 1],
                [1]
            ]
        }
    },
    JUNIOR_HIGH_HALLWAY_CUBES = {
        // Indoor wall is 7.5'.
        ceiling: {
            zIndices: [
                [k, g, g, g, g, g, g, g, g, g, g, k]
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
            ]
        }
    },
    BENNETT_APARTMENT_BED_CUBES = {
        // Outdoor wall is 8'. Indoor wall is 7.5'. Bed is 7.5 long, 1' tall.
        floor: {
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 7, 7, 7, 7, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g]
            ]
        }
    },
    BENNETT_APARTMENT_COUCH_CUBES = {
        // Indoor wall is 7.5'. Couch seat cushions add extra 0.5'.
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 1, 4, 7, 7, 7, 7, 7, 1, 1, 1, g],
                [g, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    BENNETT_APARTMENT_COUCH_THOUGHT_CUBES = {
        // Couch seat cushions add extra half foot.
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    BENNETT_BASEMENT_CUBES = {
        // Basement wall is 6', depth is 2.5'. Bed is 1'.
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, 5, 5, g, g, g, g, g, g, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 4, 4, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 2, 2, 0, 0, 0, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, g]
            ]
        }
    },
    REHEARSAL_SPACE_CUBES = {
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, 5, 5, g, g, g, g, g, g, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, g],
                [g, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, g],
                [g, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, g],
                [g, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, g]
            ]
        }
    },

    MUSEUM_CUBES = {
        floor: {
            zIndices: [
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    BACKSTAGE_CUBES = {
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    DISHROOM_CUBES = {
        // Indoor wall is 7.5'. Sink is 3'. Conveyor is 5.5'.
        floor: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, 6],
                [1, 1, c, c, c, c, c, c, 1, g, 5],
                [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 4],
                [1, 1, 7, 7, 7, 7, 7, 7, 1, g, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 2],
                [1]
            ]
        }
    },
    WAITING_ROOM_CUBES = {
        floor: {
            zIndices: [
                [0, g, g, g, g, g, g, g, g, g, g, 0],
                [0, 1, 7, 7, 1, 7, 7, 1, 1, 1, g, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
            ]
        }
    },
    WALGREENS_CUBES = {
        floor: {
            zIndices: [
                [g],
                [5],
                [0]
            ]
        }
    },
    STEAM_TUNNEL_CUBES = {
        floor: {
            zIndices: [
                [g],
                [5],
                [0]
            ]
        }
    },
    HOWIE_ATTIC_CUBES = {
        floor: {
            zIndices: [
                [k],
                [9, g, g, g, g, g, 9, 8, 7, 7, 1],
                [9, c, c, c, c, c, 9, f, 6, 6, 1],
                [9, c, c, c, c, c, 9, f, 5, 5, 1],
                [9, 9, 9, 9, 9, 9, 9, f, 4, 4, 1],
                [9, 9, c, c, 9, 9, 9, f, 3, 3, 2, 1]
            ]
        }
    },

    SHOW_STAGE_FRONT_CUBES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        floor: {
            zIndices: [
                [f],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ]
        }
    },
    SHOW_STAGE_FRONT_FAR_CUBES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ]
        }
    },

    SHOW_STAGE_SIDE_1_CUBES = {
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [6, 6, 6, 1],
                [1]
            ]
        }
    },
    SHOW_STAGE_SIDE_2_CUBES = {
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [f, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ]
        }
    },

    SITA_APARTMENT_BED_CUBES = {
        floor: {
            zIndices: [
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]
            ]
        }
    },
    SITA_APARTMENT_COUCH_CUBES = {
        // Indoor wall is 7.5'.
        ceiling: {
            zIndices: [
                [g, k, k, k, k, k, k, k, k, k, k, g]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [g, g, g, g, g, 7, 7, 7, 7, 7, g, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    SITA_APARTMENT_COUCH_THOUGHT_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 7, 3, 3, 1]
            ]
        }
    },

    CUBES_INDOOR = {
        [CHILDHOOD_BATHROOM_KEY]: CHILDHOOD_BATHROOM_CUBES,
        [PRETEEN_BENNETT_ROOM_KEY]: PRETEEN_BENNETT_ROOM_CUBES,
        [PRETEEN_BENNETT_ROOM_OPEN_BED_KEY]: PRETEEN_BENNETT_ROOM_OPEN_BED_CUBES,
        [PRETEEN_BENNETT_ROOM_LEFT_REVEALED_KEY]: [PRETEEN_BENNETT_ROOM_LEFT_REVEALED_CUBES],
        [PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_KEY]: [PRETEEN_BENNETT_ROOM_RIGHT_REVEALED_CUBES],
        [JUNIOR_HIGH_HALLWAY_KEY]: JUNIOR_HIGH_HALLWAY_CUBES,
        [BENNETT_APARTMENT_COUCH_KEY]: BENNETT_APARTMENT_COUCH_CUBES,
        [BENNETT_APARTMENT_COUCH_THOUGHT_KEY]: [BENNETT_APARTMENT_COUCH_THOUGHT_CUBES],
        [BENNETT_BASEMENT_KEY]: BENNETT_BASEMENT_CUBES,
        [SHOW_STAGE_FRONT_KEY]: SHOW_STAGE_FRONT_CUBES,
        [SHOW_STAGE_FRONT_FAR_KEY]: SHOW_STAGE_FRONT_FAR_CUBES,
        [REHEARSAL_SPACE_KEY]: REHEARSAL_SPACE_CUBES,
        [MUSEUM_KEY]: MUSEUM_CUBES,
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES,
        [DISHROOM_KEY]: DISHROOM_CUBES,
        [BENNETT_APARTMENT_BED_KEY]: BENNETT_APARTMENT_BED_CUBES,
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES,
        [SITA_APARTMENT_BED_KEY]: SITA_APARTMENT_BED_CUBES,
        [WALGREENS_KEY]: WALGREENS_CUBES,
        [STEAM_TUNNEL_KEY]: STEAM_TUNNEL_CUBES,
        [HOWIE_ATTIC_KEY]: HOWIE_ATTIC_CUBES,
        [SHOW_STAGE_SIDE_1_KEY]: SHOW_STAGE_SIDE_1_CUBES,
        [SHOW_STAGE_SIDE_2_KEY]: SHOW_STAGE_SIDE_2_CUBES,
        [SITA_APARTMENT_COUCH_KEY]: SITA_APARTMENT_COUCH_CUBES,
        [SITA_APARTMENT_COUCH_THOUGHT_KEY]: SITA_APARTMENT_COUCH_THOUGHT_CUBES
    }

export {
    CUBES_INDOOR
}
