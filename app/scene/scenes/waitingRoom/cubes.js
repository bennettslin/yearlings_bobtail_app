import {
    WAITING_ROOM_KEY,
    WAITING_ROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/colours'

import {
    d,
    g
} from '../../cubes/zIndices'

const
    G = GROUND_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    U = UPHOLSTERY_COLOUR,

    ceiling = {
        hslaColours: [
            [C],
            [C],
            [C],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C]
        ],
        zIndices: [
            [g],
            [g],
            [g],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g]
        ]
    },
    WAITING_ROOM_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [G],
                [W, W, W, W, W, W, W, W, W, W, W, W],
                [W, F, U, U, F, U, U, F, F, F, F, W],
                [W, F, U, U, F, U, U, F, F, F, F, E],
                [W, F, U, U, F, U, U, F, F, F, F, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, g],
                [g, 1, 7, 7, 1, 7, 7, 1, 1, 1, 1, g],
                [g, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, d],
                [g, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, d],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    WAITING_ROOM_OPEN_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [G],
                [W, W, W, W, W, W, W, W, W, W, W, W],
                [W, F, U, U, F, U, U, F, F, F, F, W],
                [W, F, U, U, F, U, U, F, F, F, F, F],
                [W, F, U, U, F, U, U, F, F, F, F, F],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, g],
                [g, 1, 7, 7, 1, 7, 7, 1, 1, 1, 1, g],
                [g, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1],
                [g, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES,
        [WAITING_ROOM_OPEN_KEY]: WAITING_ROOM_OPEN_CUBES
    }

export default CUBES
