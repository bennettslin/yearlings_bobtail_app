import { OAKLAND_PUBLIC_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as K,
    PAVEMENT_COLOUR as V
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [OAKLAND_PUBLIC_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V, V, V, K, T, K, T, K, T, K, V],
                [V, V, V, K, T, K, T, K, T, K, V],
                [V, V, T, K, T, K, T, K, T, K, T, V],
                [V, V, T, K, T, K, T, K, T, K, T, V],
                [T]
            ],
            zIndices: [
                [0],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    }
}
