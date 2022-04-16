import { LEFT } from '../../../../../../src/constants/scene/cubes'
import { BEDROOM_FUTURE_KEY } from '../../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GRASS_COLOUR as H,
    NIGHT_FUTURE_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O,
} from '../../../../../../src/constants/scene/cubes/colours'
export const BEDROOM_FUTURE_CUBES = {
    [BEDROOM_FUTURE_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [H, H, H, H, H, Z, Z, Z, Z, L, H],
                [H, H, H, Z, Z, Z, Z, M, M, M, H],
                [H, H, Z, Z, D, Z, Z, L, N, N, N, H],
                [Z, Z, D, D, Z, Z, L, M, O, O, N, H],
                [Z, Z, Z, Z, D, Z, M, N, O, O, M, H],
                [Z, Z, Z, Z, Z, Z, Z, M, N, N, N, L],
            ],
            zIndices: [
                [1],
                [1],
                [1, 1, 1, 1, 5, 1],
                [1, 1, 5, 5, 1],
                [1, 1, 1, 1, 3, 1],
                [1],
            ],
        },
    },
}
