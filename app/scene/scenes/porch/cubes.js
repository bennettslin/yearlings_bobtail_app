import { PORCH_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    FAMILY_EXTERIOR_COLOUR as W
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, k } from '../../cubes/zIndices'

const CUBES = {
    [PORCH_KEY]: {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, W, C],
                [C],
                [D, D, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f],
                [f],
                [k, k, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, V, V, V, W],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, W, V, V, V, V, V, W, H],
                [H]
            ],
            zIndices: [
                [f, f, f, f, f, 3, 3, 3, f],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, f, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    }
}

export default CUBES
