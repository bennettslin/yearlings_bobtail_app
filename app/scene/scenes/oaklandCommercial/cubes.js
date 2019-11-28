import { OAKLAND_COMMERCIAL_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    D = DEFAULT_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,

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
