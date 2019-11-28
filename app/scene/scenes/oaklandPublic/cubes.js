import { OAKLAND_PUBLIC_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    T = STREET_COLOUR,
    X = CROSSWALK_COLOUR,
    V = PAVEMENT_COLOUR,

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
