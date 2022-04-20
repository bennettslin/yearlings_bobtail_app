import { STEAM_TUNNEL_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
} from '../../../../../src/constants/scene/cubes/colours'

import { c, d, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [STEAM_TUNNEL_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W],
                [W],
                [W],
                [W],
                [D],
            ],
            zIndices: [
                [0],
                [0, d, d, d, d, d, d, d, d, d, d, 0],
                [c, d, d, d, d, d, d, d, d, d, d, c],
                [c, d, d, d, d, d, d, d, d, d, d, c],
                [0, d, d, d, d, d, d, d, d, d, d, 0],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [F],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}
