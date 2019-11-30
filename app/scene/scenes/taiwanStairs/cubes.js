import { TAIWAN_STAIRS_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    TAIWAN_GATE_COLOUR as A,
    DARK_FLOOR_COLOUR as Y,
    DARK_WALL_COLOUR as Z
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
                [Z]
            ],
            zIndices: [
                [k],
                [k],
                [k],
                [0, 0, 0, e, e, e, e, 0],
                [0, 0, g, g, g, g, g, g, g, g, 5],
                [0, 0, g, g, g, g, g, g, g, g, 5]
            ]
        },
        floor: {
            hslaColours: [
                [A],
                [A, A, A, V, V, V, A],
                [A, V, V, V, V, V, V, V, V, V, A],
                [Y, Y, Y, Z, Z, Z, Z, Y],
                [Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y]
            ],
            zIndices: [
                [0],
                [6, 6, 6, 1, 1, 1, 6],
                [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                [0, 0, 0, 5, 5, 5, 5, 0],
                [0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5],
                [0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5]
            ]
        }
    }
}

export default CUBES
