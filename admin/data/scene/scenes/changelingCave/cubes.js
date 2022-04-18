import { CHANGELING_CAVE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    MAGIC_COLOUR as Z,
    SPOTLIGHT_MEDIUM_COLOUR as L,
    SPOTLIGHT_LIGHT_COLOUR as M,
    SPOTLIGHT_LIGHTER_COLOUR as N,
    SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [CHANGELING_CAVE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [Z, L, M, M, L, Z],
                [L, M, N, N, M, L, Z],
                [M, N, O, O, N, M, Z],
                [M, N, O, O, N, M, Z],
            ],
            zIndices: [
                [0],
                [1],
                [0],
            ],
        },
    },
}
