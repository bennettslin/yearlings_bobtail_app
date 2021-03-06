import { STEAM_TUNNEL_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
} from '../../../../../app/constants/scene/cubes/colours'

import { d } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [STEAM_TUNNEL_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
            ],
            zIndices: [
                [0],
                [0, d, d, d, d, d, d, d, d, d, d, 0],
                [d],
                [d],
                [d],
                [0, d, d, d, d, d, d, d, d, d, d, 0],
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
