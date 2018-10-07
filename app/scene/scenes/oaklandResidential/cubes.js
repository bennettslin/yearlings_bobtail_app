import { OAKLAND_RESIDENTIAL_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,

    OAKLAND_RESIDENTIAL_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, V, V, V, T, V, V, T, V],
                [V, V, V, T, T, V, V, T, T, V],
                [T]
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_RESIDENTIAL_KEY]: OAKLAND_RESIDENTIAL_CUBES
    }

export default CUBES
