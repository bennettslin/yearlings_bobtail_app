import { SCHOOLBUS_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_COLOUR as V,
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as K,
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [SCHOOLBUS_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [V],
                [T, D, D, D, D, D, D, D, D, D, D, T],
                [T, D, D, D, D, D, D, D, D, D, D, T],
                [T],
                [K],
            ],
            zIndices: [
                [0],
                [1],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0],
            ],
        },
    },
}
