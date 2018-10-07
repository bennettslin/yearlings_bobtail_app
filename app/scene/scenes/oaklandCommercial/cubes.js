import { OAKLAND_COMMERCIAL_KEY } from 'scene/cubesKeys'

import {
    STREET_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,

    OAKLAND_COMMERCIAL_CUBES = {
        floor: {
            hslaColours: [
                [V],
                [V, V, V, V, T, T, T, T, V],
                [V, V, V, T, T, T, T, T, T, V],
                [V, V, T, T, T, T, T, T, T, T, V],
                [T]
            ],
            zIndices: [
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
