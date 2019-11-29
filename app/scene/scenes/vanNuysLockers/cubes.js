import { VAN_NUYS_LOCKERS_KEY } from '../../../constants/scene/scenes'

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
    [VAN_NUYS_LOCKERS_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [P, W, W, W, W, W, W, P, P, P, V],
                [P, P, P, P, P, P, P, P, P, P, V],
                [P, P, P, P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [2, f, f, f, f, f, f, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    }
}

export default CUBES
