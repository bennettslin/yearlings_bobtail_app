import { CATHOLIC_CHURCH_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V
} from '../../../constants/scene/cubes/colours'

export default {
    [CATHOLIC_CHURCH_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T],
                [T],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [0],
                [0],
                [1]
            ]
        }
    }
}
