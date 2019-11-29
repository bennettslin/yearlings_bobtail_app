import { BASEMENT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    DIRT_FLOOR_COLOUR as F,
    BASEMENT_WALL_COLOUR as W,
    PLATFORM_COLOUR as P,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, k } from '../../cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [C, C, W, W, C],
        [C]
    ],
    zIndices: [
        [k],
        [c, c, a, a, c],
        [c]
    ]
}

const CUBES = {
    [BASEMENT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [W, W, G, G, W],
                [W, F, P, P, F, F, F, F, F, F, F, W],
                [W, F, P, P, F, F, F, F, S, F, F, W],
                [W, F, P, P, F, S, F, F, F, F, F, W],
                [W, F, F, F, S, F, F, F, F, S, F, W]
            ],
            zIndices: [
                [2],
                [c, c, 2, 2, c],
                [c, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, c],
                [c, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, c],
                [c, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, c],
                [c, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, c]
            ]
        }
    }
}

export default CUBES
