import { BASEMENT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    BASEMENT_WALL_COLOUR as W,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, k } from '../../cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [W, W, W, W, W],
        [W]
    ],
    zIndices: [
        [k],
        [2, 2, a, a, 2],
        [2, c, c, c, c, c, c, c, c, c, c, 2]
    ]
}

const CUBES = {
    [BASEMENT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, V, V, F, F, F, F, S, F, F, V],
                [V, F, F, F, F, S, F, F, F, F, F, V],
                [V, F, F, F, S, F, F, F, F, S, F, V]
            ],
            zIndices: [
                [0],
                [2],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 2],
                [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
                [2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2]
            ]
        }
    }
}

export default CUBES
