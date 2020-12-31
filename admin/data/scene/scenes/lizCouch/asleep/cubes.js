import { LIZ_COUCH_PEAFOWL_KEY } from '../../../../../../app/constants/scene/scenes'
import {
    PAVEMENT_COLOUR as V,
    GRASS_COLOUR as H,
    LIZ_GATE_COLOUR as A,
    NIGHT_FUTURE_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../../app/constants/scene/cubes/colours'

export const LIZ_COUCH_PEAFOWL_CUBES = {
    [LIZ_COUCH_PEAFOWL_KEY]: {
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [H],
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
