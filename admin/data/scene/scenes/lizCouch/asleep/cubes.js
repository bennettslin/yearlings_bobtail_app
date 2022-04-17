import { LIZ_COUCH_FUTURE_KEY } from '../../../../../../src/constants/scene/scenes'
import {
    NIGHT_FUTURE_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../../src/constants/scene/cubes/colours'

export const LIZ_COUCH_FUTURE_CUBES = {
    [LIZ_COUCH_FUTURE_KEY]: {
        floor: {
            hslaColours: [
                [Z],
                [Z, Z, Z, Z, Z, Z, L, M, M, L, Z],
                [Z, Z, Z, Z, Z, L, M, N, N, M, L, Z],
                [Z, Z, Z, Z, Z, M, N, O, O, N, M, Z],
                [Z, Z, Z, Z, Z, M, N, O, O, N, M, Z],
                [Z, Z, Z, Z, Z, L, M, N, N, M, L, Z],
            ],
            zIndices: [
                [6, 6, 6, 6, 6, 1, 1, 1, 6],
                [1],
                [1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1],
                [1],
            ],
        },
    },
}
