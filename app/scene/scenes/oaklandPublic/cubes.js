import { OAKLAND_PUBLIC_KEY } from '../../cubesKeys'

import {
    STREET_HSLA,
    CROSSWALK_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    T = STREET_HSLA,
    X = CROSSWALK_HSLA,
    V = PAVEMENT_HSLA,

    OAKLAND_PUBLIC_CUBES = {
        floor: {
            hslaColours: [
                [V, V, V, X, T, X, T, X, T, X, V],
                [V, V, V, X, T, X, T, X, T, X, V],
                [V, V, T, X, T, X, T, X, T, X, T, V],
                [V, V, T, X, T, X, T, X, T, X, T, V],
                [T]
            ],
            zIndices: [
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_PUBLIC_KEY]: OAKLAND_PUBLIC_CUBES
    }

export default CUBES
