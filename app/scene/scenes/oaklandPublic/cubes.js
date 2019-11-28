import { OAKLAND_PUBLIC_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as X,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [OAKLAND_PUBLIC_KEY]: {
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
    }
}

export default CUBES
