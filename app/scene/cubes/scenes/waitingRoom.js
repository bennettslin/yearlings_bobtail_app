import {
    WAITING_ROOM_KEY,
    WAITING_ROOM_OPEN_KEY
} from '../../cubesKeys'

import {
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    UPHOLSTERY_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from '../../zIndexKeys'

const
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    U = UPHOLSTERY_HSLA,

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
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, d],
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, d],
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
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1],
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES,
        [WAITING_ROOM_OPEN_KEY]: WAITING_ROOM_OPEN_CUBES
    }

export default CUBES
