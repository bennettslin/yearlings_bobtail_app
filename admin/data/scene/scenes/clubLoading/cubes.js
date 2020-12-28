import { CLUB_LOADING } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    CLUB_SIDE_PRIMARY_COLOUR as B,
    CLUB_SIDE_SECONDARY_COLOUR as E,
    GENERIC_EXTERIOR_COLOUR as X
} from '../../../../../app/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [CLUB_LOADING]: {
        ceiling: {
            hslaColours: [
                [C, B, E, B, E, B, E, B, E, B, E, B],
                [C, X],
                [C],
                [D]
            ],
            zIndices: [
                [f, 1],
                [f, 1, 1, 1, d, d, d, 1],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V, F],
                [V, F],
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    }
}
