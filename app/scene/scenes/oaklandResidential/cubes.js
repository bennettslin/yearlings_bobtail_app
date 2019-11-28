import { OAKLAND_RESIDENTIAL_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/keys/hsla'

const
    G = GROUND_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,

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
