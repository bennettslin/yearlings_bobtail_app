import { OCEAN_DEPTHS_KEY } from '../../cubesKeys'

import {
    OCEAN_HSLA,
    SAND_HSLA
} from '../../hslaKeys'

import {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    k,
    RIGHT
} from '../../zIndexKeys'

const
    // Default.
    O = OCEAN_HSLA,
    S = SAND_HSLA,

    OCEAN_DEPTHS_CUBES = {
        slantDirection: RIGHT,
        ceiling: {
            hslaColours: [
                [O]
            ],
            zIndices: [
                [k],
                [d, d, c, c, b, b, a, a, 9, 9, 8, 8],
                [e, e, d, d, c, c, b, b, a, a, 9, 9],
                [f, f, e, e, d, d, c, c, b, b, a, a],
                [g, f, f, e, e, d, d, c, c, b, b, a],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [S]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [OCEAN_DEPTHS_KEY]: OCEAN_DEPTHS_CUBES
    }

export default CUBES
