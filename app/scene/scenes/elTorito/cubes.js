import { EL_TORITO_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    FANCY_FLOOR_COLOUR as F,
    EXTERIOR_COLOUR as W,
    DOOR_COLOUR as E,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, g, k } from '../../cubes/zIndices'

const CUBES = {
    [EL_TORITO_KEY]: {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, W, W, W, W, W, W, C],
                [C],
                [C],
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [f, f, f, e, e, e, e, e, e, f],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [F],
                [W, W, W, E, E, E, F, F, F, W],
                [V, V, V, P, P, P, P, P, P, V],
                [V, W, V, V, V, V, V, V, V, V, W, V],
                [V]
            ],
            zIndices: [
                [g],
                [2],
                [f, f, f, e, e, e, 2, 2, 2, f],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, f, 1, 1, 1, 1, 1, 1, 1, 1, f, 1],
                [1]
            ]
        }
    }
}

export default CUBES
