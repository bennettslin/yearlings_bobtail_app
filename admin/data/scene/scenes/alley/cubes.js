import { ALLEY_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_COLOUR as V,
    INDUSTRIAL_WALL_COLOUR as W,
    GENERIC_EXTERIOR_COLOUR as X,
    PLATFORM_COLOUR as P
} from '../../../../../app/constants/scene/cubes/colours'

import { e, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [ALLEY_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [X],
                [D]
            ],
            zIndices: [
                [4, 4, 4, 4, 4, 4, 4, 1],
                [4, e, e, e, e, e, 4, 1],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [P, P, P, P, P, P, P, V],
                [P, P, P, P, P, P, P, V],
                [P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [4, 4, 4, 4, 4, 4, 4, 1],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    }
}