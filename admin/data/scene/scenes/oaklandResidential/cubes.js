import { OAKLAND_RESIDENTIAL_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [OAKLAND_RESIDENTIAL_KEY]: {
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
    }
}
