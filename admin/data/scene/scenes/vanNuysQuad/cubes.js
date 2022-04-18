import { VAN_NUYS_QUAD_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    VAN_NUYS_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [VAN_NUYS_QUAD_KEY]: {
        ceiling: {
            hslaColours: [
                [D, C],
                [D, C],
                [D, C, P, C, C, X, X, X, X, X, X, C],
                [D, C],
                [D],
            ],
            zIndices: [
                [k, f],
                [k, f],
                [k, f, 2, f, f, 2, 2, 2, 2, 2, 2, f],
                [k, f],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [H, P],
                [H, P],
                [H, P],
                [H],
            ],
            zIndices: [
                [0],
                [1, 2],
                [1, 2],
                [1, 2],
                [1],
            ],
        },
    },
}
