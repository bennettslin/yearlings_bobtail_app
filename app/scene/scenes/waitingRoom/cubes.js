import {
    WAITING_ROOM_KEY,
    WAITING_ROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WAITING_ROOM_WALL_COLOUR as W,
    DOOR_COLOUR as E,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const DEFAULT_CEILING = {
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
}

const CUBES = {
    [WAITING_ROOM_KEY]: {
        ceiling: DEFAULT_CEILING,
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
    [WAITING_ROOM_OPEN_KEY]: {
        ceiling: DEFAULT_CEILING,
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
    }
}

export default CUBES
