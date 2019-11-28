import { PORCH_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    LAWN_COLOUR as L,
    CEILING_COLOUR as C,
    PLATFORM_COLOUR as P,
    WALL_COLOUR as W,
    DOOR_COLOUR as E
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, k } from '../../cubes/zIndices'

const CUBES = {
    [PORCH_KEY]: {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, W, C],
                [C],
                [D, D, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f],
                [f],
                [k, k, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, E, E, E, W],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, W, P, P, P, P, P, W, L],
                [L]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f, f],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, f, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    }
}

export default CUBES
