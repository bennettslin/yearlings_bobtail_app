import { ALLEY_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    e,
    g,
    k
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    W = WALL_HSLA,

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
                [W],
                [V]
            ],
            zIndices: [
                [g],
                [g, 4, 4, 4, 4, 4, g],
                [1]
            ]
        }
    },

    CUBES = {
        [ALLEY_KEY]: ALLEY_CUBES
    }

export default CUBES
