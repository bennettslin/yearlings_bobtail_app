import { CHANGELING_CAVE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    NIGHT_MAGIC_COLOUR as Z,
    SPOTLIGHT_LIGHT_COLOUR as L,
    SPOTLIGHT_LIGHTER_COLOUR as M,
    SPOTLIGHT_LIGHTEST_COLOUR as N
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [CHANGELING_CAVE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [L, M, M, M, L, Z],
                [M, N, N, N, M, L, Z],
                [M, N, N, N, M, L, Z],
                [M, N, N, N, M, L, Z]
            ],
            zIndices: [
                [0],
                [1],
                [0]
            ]
        }
    }
}
