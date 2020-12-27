import { LEFT } from '../../../../../../app/constants/scene/cubes'
import { BEDROOM_SPACE_KEY } from '../../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    NIGHT_FUTURE_COLOUR as Z,
    FUTURE_SPOTLIGHT_MEDIUM_COLOUR as L,
    FUTURE_SPOTLIGHT_LIGHT_COLOUR as M,
    FUTURE_SPOTLIGHT_LIGHTER_COLOUR as N,
    FUTURE_SPOTLIGHT_LIGHTEST_COLOUR as O
} from '../../../../../../app/constants/scene/cubes/colours'
export const BEDROOM_SPACE_CUBES = {
    [BEDROOM_SPACE_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, Z, Z, M, M, G],
                [G, G, G, G, Z, Z, Z, L, N, N, G],
                [G, G, Z, Z, Z, Z, L, M, O, O, G],
                [Z, Z, Z, Z, Z, Z, M, N, O, O, G],
                [G, Z, Z, Z, Z, Z, Z, M, N, N, N, G]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 0],
                [0, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}
