import { TAIWAN_STAIRS_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    TAIWAN_GATE_COLOUR as A,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    TAIWANESE_WALL_COLOUR as W,
    DOOR_COLOUR as E,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g, k } from '../../cubes/zIndices'

const CUBES = {
    [TAIWAN_STAIRS_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D],
                [W],
                [W, W, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [k],
                [k],
                [k],
                [g, g, g, e, e, e, e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [A],
                [A, A, A, E, E, E, A],
                [V],
                [W],
                [W, W, P, P, P, P, P, P, F, F, W]
            ],
            zIndices: [
                [0],
                [6, 6, 6, 6, 6, 6, 6],
                [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                [g, g, g, 5, 5, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g]
            ]
        }
    }
}

export default CUBES
