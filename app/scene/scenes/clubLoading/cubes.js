import { CLUB_LOADING } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    FLOOR_COLOUR as F,
    EXTERIOR_COLOUR as W
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, k } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_LOADING]: {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, C, W, W, W, C],
                [C],
                [D]
            ],
            zIndices: [
                [f],
                [f],
                [f, f, f, f, d, d, d, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V, W],
                [V, W, F],
                [V, W, W, W, F, F, F, W],
                [V]
            ],
            zIndices: [
                [1, f],
                [1, f, 1],
                [1, f, f, f, 1, 1, 1, f],
                [1]
            ]
        }
    }
}

export default CUBES
