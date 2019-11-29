import { VAN_NUYS_QUAD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    VAN_NUYS_EXTERIOR_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { f, k } from '../../cubes/zIndices'

const CUBES = {
    [VAN_NUYS_QUAD_KEY]: {
        ceiling: {
            hslaColours: [
                [D, D, C],
                [D, D, C],
                [D, D, C],
                [D, D, C],
                [D]
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V, V, P, P, P, P, P, P, P, P, P, P],
                [V, V, P, P, P, W, W, W, W, W, W, P],
                [V, V, P, P, P, P, P, P, P, P, P, P],
                [V]
            ],
            zIndices: [
                [0],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 2, 2, 2, f, f, f, f, f, f, 2],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    }
}

export default CUBES
