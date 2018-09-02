// Separating indoor cubes purely for purpose of keeping file smaller.

import {
    BENNETT_ROOM_KEY,
    BENNETT_ROOM_OPEN_KEY,
    BENNETT_ROOM_DOGS_KEY,
    BENNETT_ROOM_SPACE_KEY,
    VAN_NUYS_HALLWAY_KEY,
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY,
    BASEMENT_BED_KEY,
    CLUB_FRONT_KEY,
    CLUB_FRONT_FAR_KEY,
    BASEMENT_KEY,
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    DISHROOM_KEY,
    BENNETT_BED_KEY,
    WAITING_ROOM_KEY,
    LIZ_BED_KEY,
    WALGREENS_KEY,
    STEAM_TUNNEL_KEY,
    ATTIC_KEY,
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY,
    LIZ_COUCH_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from '../cubesKeys'

import {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    k,
    LEFT
    // RIGHT
} from './cubesConstants'

const

    BENNETT_ROOM_CEILING = [
        [k, k, k, k, k, g, k, g, g, g, k],
        [k, k, k, g, g, g, g, g, g, g, k],
        [k, k, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g]
    ],
    BENNETT_ROOM_CUBES = {
        slantDirection: LEFT,
        // Captain bed height is 3.5'.
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
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
    BENNETT_ROOM_OPEN_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
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
        }
    },
    BENNETT_ROOM_DOGS_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
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
    BENNETT_ROOM_SPACE_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            zIndices: BENNETT_ROOM_CEILING
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
    VAN_NUYS_HALLWAY_CUBES = {
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
    BENNETT_BED_CUBES = {
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
    BENNETT_COUCH_CUBES = {
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
    BENNETT_COUCH_THOUGHT_CUBES = {
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
    BASEMENT_BED_CUBES = {
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
    BASEMENT_CUBES = {
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
        ceiling: {
            zIndices: [
                [g, g, f, f, f, f, f, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, g, b, b, b, b, b, g, g, g, 6],
                [1, 1, 7, 7, 7, 7, 7, 1, 1, g, 5],
                [1, 1, 7, 7, 7, 7, 7, 1, 1, g, 4],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 3],
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
    ATTIC_CUBES = {
        ceiling: {
            zIndices: [
                [d, d, e, e, f, f, g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [7, 7, c, c, c, c, 7, 6, 6, 1],
                [7, 7, 9, 9, 9, 9, 7, 6, 6, 1],
                [7, 7, 9, 9, 9, 9, 7, 5, 5, 1],
                [7, 7, 7, 7, 7, 7, 7, 4, 4, 3, 2, 1],
                [7, 7, 7, 7, 7, 7, 7, 4, 4, 3, 2, 1]
            ]
        }
    },

    CLUB_FRONT_CUBES = {
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
    CLUB_FRONT_FAR_CUBES = {
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

    CLUB_SIDE_CROWD_CUBES = {
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
    CLUB_SIDE_STAGE_CUBES = {
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

    LIZ_BED_CUBES = {
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
    LIZ_COUCH_CUBES = {
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
    LIZ_COUCH_THOUGHT_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 7, 3, 3, 1]
            ]
        }
    },

    CUBES_INDOOR = {
        [BENNETT_ROOM_KEY]: BENNETT_ROOM_CUBES,
        [BENNETT_ROOM_OPEN_KEY]: BENNETT_ROOM_OPEN_CUBES,
        [BENNETT_ROOM_DOGS_KEY]: [BENNETT_ROOM_DOGS_CUBES],
        [BENNETT_ROOM_SPACE_KEY]: [BENNETT_ROOM_SPACE_CUBES],
        [VAN_NUYS_HALLWAY_KEY]: VAN_NUYS_HALLWAY_CUBES,
        [BENNETT_COUCH_KEY]: BENNETT_COUCH_CUBES,
        [BENNETT_COUCH_THOUGHT_KEY]: [BENNETT_COUCH_THOUGHT_CUBES],
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [CLUB_FRONT_KEY]: CLUB_FRONT_CUBES,
        [CLUB_FRONT_FAR_KEY]: CLUB_FRONT_FAR_CUBES,
        [BASEMENT_KEY]: BASEMENT_CUBES,
        [MUSEUM_KEY]: MUSEUM_CUBES,
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES,
        [DISHROOM_KEY]: DISHROOM_CUBES,
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES,
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES,
        [LIZ_BED_KEY]: LIZ_BED_CUBES,
        [WALGREENS_KEY]: WALGREENS_CUBES,
        [STEAM_TUNNEL_KEY]: STEAM_TUNNEL_CUBES,
        [ATTIC_KEY]: ATTIC_CUBES,
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES,
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES,
        [LIZ_COUCH_KEY]: LIZ_COUCH_CUBES,
        [LIZ_COUCH_THOUGHT_KEY]: LIZ_COUCH_THOUGHT_CUBES
    }

export {
    CUBES_INDOOR
}
