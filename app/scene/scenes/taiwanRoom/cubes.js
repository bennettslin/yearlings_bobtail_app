import { TAIWAN_ROOM_KEY } from 'scene/cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    FURNITURE_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,
    R = FURNITURE_HSLA,

    TAIWAN_ROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [C, C, C, C, W, W, W, C, C, C, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, f, f, f, g, g, g, g, e],
                [g, g, g, g, g, g, g, g, g, g, g, e],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, W, F, F, F, F, F, F, F, W],
                [W, F, F, W, F, F, F, F, F, P, P, W],
                [W, W, W, W, F, F, F, W, W, P, P, W],
                [W, R, R, R, F, F, F, F, W, P, P, W],
                [W, F, F, F, F, F, F, F, W, P, P, W]
            ],
            zIndices: [
                [g],
                [g, 5, 5, g, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 5, 5, g, 5, 5, 5, 5, 5, 4, 4, g],
                [g, g, g, g, 5, 5, 5, g, g, 3, 3, 5],
                [g, 8, 8, 8, 5, 5, 5, 5, g, 2, 2, 5],
                [g, 5, 5, 5, 5, 5, 5, 5, g, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES
    }

export default CUBES
