import { CHANGELING_CAVE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    NIGHT_MAGIC_COLOUR as Z,
    SPOTLIGHT_LIGHT_COLOUR as L,
    SPOTLIGHT_LIGHTER_COLOUR as M,
    SPOTLIGHT_LIGHTEST_COLOUR as N,
    PAVEMENT_COLOUR as V
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [CHANGELING_CAVE_KEY]: {
        floor: {
            hslaColours: [
                [V],
                [Z, L, L, L, Z],
                [L, M, M, M, L, Z],
                [M, N, N, N, M, L, Z],
                [M, N, N, N, M, L, Z],
                [M, N, N, N, M, L, Z]
            ],
            zIndices: [
                [1],
                [0]
            ]
        }
    }
}
