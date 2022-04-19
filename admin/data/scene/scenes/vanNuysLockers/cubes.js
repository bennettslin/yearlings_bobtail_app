import { VAN_NUYS_LOCKERS_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_AUTUMN_COLOUR as H,
    ROOF_COLOUR as C,
    VAN_NUYS_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [VAN_NUYS_LOCKERS_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, C, C, C, C, C, C, D],
                [C, X, X, X, X, X, X, C, C, P, C, D],
                [C, C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, C, D],
                [D],
            ],
            zIndices: [
                [k],
                [f, f, f, f, f, f, f, f, f, f, f, k],
                [f, 2, 2, 2, 2, 2, 2, f, f, 2, f, k],
                [f, f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, f, k],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [H],
                [P, P, P, P, P, P, P, P, P, P, P, H],
                [P, P, P, P, P, P, P, P, P, P, P, H],
                [P, P, P, P, P, P, P, P, P, P, P, H],
                [H],
            ],
            zIndices: [
                [0],
                [1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1],
            ],
        },
    },
}
