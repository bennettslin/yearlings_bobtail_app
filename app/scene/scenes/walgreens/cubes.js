import { WALGREENS_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    FLOOR_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    F = FLOOR_HSLA,

    WALGREENS_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [WALGREENS_KEY]: WALGREENS_CUBES
    }

export default CUBES
