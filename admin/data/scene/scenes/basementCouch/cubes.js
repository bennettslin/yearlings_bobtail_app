import { BASEMENT_COUCH_KEY } from '../../../../../app/constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    BENNETT_COUCH_COLOUR as U
} from '../../../../../app/constants/scene/cubes/colours'

import { a, e } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [BASEMENT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [3],
                [3, e, e, e, e, e, e, e, e, e, e, 3],
                [3, e, e, e, e, e, e, e, e, e, e, 3],
                [3, e, e, e, e, e, e, e, e, e, e, a],
                [3, e, e, e, e, e, e, e, e, e, e, a],
                [3, e, e, e, e, e, e, e, e, e, e, 3]
            ]
        },
        floor: {
            hslaColours: [
                [V],
                [V, R, U, U, U, U, U, F, R, R, F, V],
                [V, R, U, U, U, U, U, F, F, F, F, V],
                [V, F, U, U, U, U, U, F, F, V],
                [V, F, F, F, F, F, F, F, F, V],
                [V, F, F, F, F, F, F, F, F, F, F, V]
            ],
            zIndices: [
                [3],
                [3, 4, 5, 5, 5, 5, 5, 0, 3, 3, 0, 3],
                [3, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 3],
                [3, 0, 2, 2, 2, 2, 2, 0, 0, 1, 2, 3],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
            ]
        }
    }
}
