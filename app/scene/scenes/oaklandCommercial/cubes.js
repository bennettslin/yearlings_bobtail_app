import { OAKLAND_COMMERCIAL_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    D = DEFAULT_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,

    OAKLAND_COMMERCIAL_CUBES = {
        floor: {
            hslaColours: [
                [D],
                [V],
                [V, V, V, V, T, T, T, T, V],
                [V, V, V, T, T, T, T, T, T, V],
                [V, V, T, T, T, T, T, T, T, T, V],
                [T]
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_COMMERCIAL_KEY]: OAKLAND_COMMERCIAL_CUBES
    }

export default CUBES
