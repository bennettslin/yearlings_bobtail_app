import { LEFT } from '../../../../../../app/constants/scene/cubes'
import { BEDROOM_SPACE_KEY } from '../../../../../../app/constants/scene/scenes'

import {
    GRASS_COLOUR as H,
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
                [H, H, H, H, H, Z, Z, Z, Z, Z, H],
                [H, H, H, Z, Z, Z, Z, M, M, Z, H],
                [H, H, Z, Z, Z, Z, Z, L, N, N, Z, H],
                [Z, Z, Z, Z, Z, Z, L, M, O, O, Z, H],
                [Z, Z, Z, Z, Z, Z, M, N, O, O, Z, H],
                [Z, Z, Z, Z, Z, Z, Z, M, N, N, N, Z]
            ],
            zIndices: [
                [1],
                [1],
                [1, 1, 1, 1, 5, 1],
                [1, 1, 5, 5, 1],
                [1, 1, 1, 1, 3, 1],
                [1]
            ]
        }
    }
}
