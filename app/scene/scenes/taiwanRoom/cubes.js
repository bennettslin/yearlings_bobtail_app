import { TAIWAN_ROOM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR,
    FURNITURE_COLOUR
} from '../../cubes/colours'

import {
    e,
    f,
    g
} from '../../cubes/zIndices'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,
    R = FURNITURE_COLOUR,

    TAIWAN_ROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [W, C, C, W],
                [W, C, C, W, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [e, g, g, g, g, g, g, g, f, f, g, g],
                [e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, W, F, F, F, F, F, F, F, W],
                [W, P, P, W, F, F, F, F, F, F, F, W],
                [W, P, P, W, W, W, W, W, F, F, W, W],
                [W, P, P, W, F, R, R, F, F, F, F, W],
                [W, P, P, W, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 5, 5, g, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 4, 4, g, 5, 5, 5, 5, 5, 5, 5, g],
                [5, 3, 3, g, g, g, g, g, 5, 5, g, g],
                [5, 2, 2, g, 5, 8, 8, 5, 5, 5, 5, g],
                [g, 1, 1, g, 5, 5, 5, 5, 5, 5, 5, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES
    }

export default CUBES
