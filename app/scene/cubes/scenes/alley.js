import { ALLEY_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    e,
    g,
    k
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,

    ALLEY_CUBES = {
        ceiling: {
            hslaColours: [
                [W],
                [W],
                [D]
            ],
            zIndices: [
                [g],
                [g, e, e, e, e, e, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, E, E, E, E, E, W],
                [P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [g],
                [g, e, e, e, e, e, g],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [ALLEY_KEY]: ALLEY_CUBES
    }

export default CUBES
