import { STEAM_TUNNEL_KEY } from '../../cubesKeys'

import {
    FLOOR_HSLA,
    CEILING_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    b,
    d
} from '../../zIndexKeys'

const
    F = FLOOR_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,

    STEAM_TUNNEL_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [C]
            ],
            zIndices: [
                [d],
                [d],
                [d],
                [b, d, d, d, d, d, d, d, d, d, d, b],
                [b, d, d, d, d, d, d, d, d, d, d, b],
                [d]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, F, F, F, F],
                [F, F, F, F, F, F, F, F, F, F, F, F],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [d],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d]
            ]
        }
    },

    CUBES = {
        [STEAM_TUNNEL_KEY]: STEAM_TUNNEL_CUBES
    }

export default CUBES
