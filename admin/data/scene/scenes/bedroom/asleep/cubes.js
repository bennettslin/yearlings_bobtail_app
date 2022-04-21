import { LEFT } from '../../../../../../src/constants/scene/cubes'
import { BEDROOM_MAGIC_KEY } from '../../../../../../src/constants/scene/scenes'
import {
    MAGIC_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../../src/constants/scene/cubes/colours'

export const BEDROOM_MAGIC_CUBES = {
    [BEDROOM_MAGIC_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
                [Z, Z, M, L, L, Z, Z, Z, Z, Z, Z, Z],
                [L, M, N, M, M, Z, Z, Z, Z, Z, Z, Z],
                [M, N, O, N, M, Z, Z, Z, Z, Z, Z, Z],
                [L, N, O, O, N, L, Z, Z, Z, Z, Z, Z],
            ],
            zIndices: [
                [1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 1],
                [1],
            ],
        },
    },
}
