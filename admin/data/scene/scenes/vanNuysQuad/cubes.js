import { VAN_NUYS_QUAD_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    VAN_NUYS_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../app/constants/scene/cubes/colours'

import { f, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [VAN_NUYS_QUAD_KEY]: {
        ceiling: {
            hslaColours: [
                [D, D, C],
                [D, D, C],
                [D, D, C, C, C, X, X, X, X, X, X, C],
                [D, D, C],
                [D],
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f, f, f, 2, 2, 2, 2, 2, 2, f],
                [k, k, f],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [H, H, P],
                [H, H, P],
                [H, H, P],
                [H],
            ],
            zIndices: [
                [0],
                [1, 1, 2],
                [1, 1, 2],
                [1, 1, 2],
                [1],
            ],
        },
    },
}
