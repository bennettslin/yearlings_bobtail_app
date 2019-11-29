import { CINEMA_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    FLOOR_COLOUR as F,
    CINEMA_EXTERIOR_COLOUR as W,
    DOOR_COLOUR as E
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, k } from '../../cubes/zIndices'

const CUBES = {
    [CINEMA_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, W, W, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [k],
                [f, f, f, e, e, e, e, e, e, f],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, E, E, E, E, E, E, W],
                [W, W, W, F, F, F, F, F, F, W],
                [W, W, W, F, F, F, F, F, F, W],
                [V]
            ],
            zIndices: [
                [0],
                [f, f, f, e, e, e, e, e, e, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [1]
            ]
        }
    }
}

export default CUBES
