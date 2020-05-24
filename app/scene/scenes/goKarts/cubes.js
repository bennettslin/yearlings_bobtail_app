import { GO_KARTS_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as K,
    GRASS_COLOUR as H
} from '../../cubes/colours'

export default {
    [GO_KARTS_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, D, D, D, D, T, T, D, D, D, D, T],
                [T],
                [K],
                [H]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}
