import { CLUB_LOADING } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    GENERIC_EXTERIOR_COLOUR as X
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, k } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_LOADING]: {
        ceiling: {
            hslaColours: [
                [C, W],
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
                [V, F],
                [V, F],
                [V]
            ],
            zIndices: [
                [1]
            ]
        }
    }
}

export default CUBES
