import { FREEWAY_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    PAVEMENT_HSLA,
    PLATFORM_HSLA
} from '../../hsla/keys'

const
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    P = PLATFORM_HSLA,

    FREEWAY_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [P],
                [V],
                [P],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [4],
                [2],
                [4],
                [0]
            ]
        }
    },

    CUBES = {
        [FREEWAY_KEY]: FREEWAY_CUBES
    }

export default CUBES
