import { BASEMENT_BED_MAGIC_KEY } from '../../../../../../src/constants/scene/scenes'
import {
    MAGIC_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../../src/constants/scene/cubes/colours'

const DEFAULT_FLOOR = {
    zIndices: [
        [3],
        [3],
        [3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    ],
}

export const BASEMENT_BED_MAGIC_CUBES = {
    [BASEMENT_BED_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [L, M, M, L, Z],
                [M, N, N, M, L, Z],
                [N, O, O, N, M, Z],
                [N, O, O, N, M, Z],
                [M, N, N, M, L, Z],
                [L, M, M, L, Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
}
