import { PORCH_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    PLATFORM_COLOUR as P,
    FAMILY_EXTERIOR_COLOUR as W,
    DOOR_COLOUR as E
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
                [W, W, W, W, W, E, E, E, W],
                [H, H, H, P, P, P, P, P, P, P, H],
                [H, H, H, P, P, P, P, P, P, P, H],
                [H, H, H, P, P, P, P, P, P, P, H],
                [H, H, H, W, P, P, P, P, P, W, H],
                [H]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f, f],
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
