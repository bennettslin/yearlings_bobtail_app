import { BERKELEY_CAMPANILE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    GATE_COLOUR as A,
    WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { g, k } from '../../cubes/zIndices'

const CUBES = {
    [BERKELEY_CAMPANILE_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [W, W, W, D],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [g, g, g, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [W, W, W, A, V],
                [P, A, A, A, V],
                [P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [g, g, g, 9, 1],
                [3, 9, 9, 9, 1],
                [2, 1],
                [1]
            ]
        }
    }
}

export default CUBES
