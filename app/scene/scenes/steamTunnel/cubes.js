import { STEAM_TUNNEL_KEY } from '../../../constants/scene/scenes'

import {
    FLOOR_COLOUR as F,
    CEILING_COLOUR as C,
    WALL_COLOUR as W
} from '../../cubes/colours'

import { b, d } from '../../cubes/zIndices'

const CUBES = {
    [STEAM_TUNNEL_KEY]: {
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
    }
}

export default CUBES
