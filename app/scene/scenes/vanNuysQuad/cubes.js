import { VAN_NUYS_QUAD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    VAN_NUYS_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { f, k } from '../../cubes/zIndices'

const CUBES = {
    [VAN_NUYS_QUAD_KEY]: {
        ceiling: {
            hslaColours: [
                [D, D, C],
                [D, D, C],
                [D, D, C, C, C, X, X, X, X, X, X, C],
                [D, D, C],
                [D]
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f, f, f, 2, 2, 2, 2, 2, 2, f],
                [k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [H, H, P, P, P, P, P, P, P, P, P, P],
                [H, H, P, P, P, P, P, P, P, P, P, P],
                [H, H, P, P, P, P, P, P, P, P, P, P],
                [H]
            ],
            zIndices: [
                [0],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    }
}

export default CUBES
