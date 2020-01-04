import { PORCH_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    FAMILY_EXTERIOR_COLOUR as X,
    UNDERGROUND_WALL_COLOUR as W
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, k } from '../../cubes/zIndices'

const CUBES = {
    [PORCH_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [X],
                [C],
                [D, D, C, C, C, C, C, C, C, C, C, D],
                [D, D, C, W, C, C, C, C, C, W, C, D],
                [D, D, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [k],
                [1, 1, 1, 2, 2, e, e, e, 2, 2, 1],
                [f],
                [k, k, f, f, f, f, f, f, f, f, f, k],
                [k, k, f, 1, f, f, f, f, f, 1, f, k],
                [k, k, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, H, V, V, V, V, V, H, H],
                [H]
            ],
            zIndices: [
                [0],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1],
                [1]
            ]
        }
    }
}

export default CUBES
