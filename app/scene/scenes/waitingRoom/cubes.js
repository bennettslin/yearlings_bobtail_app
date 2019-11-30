import { WAITING_ROOM_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    WOOD_FLOOR_COLOUR as F,
    WAITING_ROOM_WALL_COLOUR as W,
    WAITING_ARMCHAIR_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../cubes/zIndices'

const CUBES = {
    [WAITING_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [k],
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, d],
                [1, g, g, g, g, g, g, g, g, g, g, d],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [F],
                [F, F, U, U, F, U, U, F, F, F, F, F],
                [F, F, U, U, F, U, U, F, F, F, F, F],
                [F, F, U, U, F, U, U, F, F, F, F, F],
                [F]
            ],
            zIndices: [
                [1],
                [1],
                [1, 1, 7, 7, 1, 7, 7, 1, 1, 1, 1, 1],
                [1, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1],
                [1, 1, 4, 4, 1, 4, 4, 1, 1, 1, 1, 1],
                [1]
            ]
        }
    }
}

export default CUBES
