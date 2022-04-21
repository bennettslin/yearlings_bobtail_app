import { CHANGELING_MAGIC_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    MAGIC_COLOUR as Z,
    SPOTLIGHT_MEDIUM_COLOUR as L,
    SPOTLIGHT_LIGHT_COLOUR as M,
    SPOTLIGHT_LIGHTER_COLOUR as N,
    SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [CHANGELING_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [Z],
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
