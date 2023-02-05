import {
    OAKLAND_HOUSES_KEY,
    OAKLAND_VOLKSWAGEN_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    STREET_NIGHT_COLOUR as T,
    PAVEMENT_NIGHT_COLOUR as V,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [OAKLAND_HOUSES_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T],
            ],
            zIndices: [
                [0],
                [1],
                [0],
            ],
        },
    },
    [OAKLAND_VOLKSWAGEN_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T],
                [T],
                [V],
            ],
            zIndices: [
                [0],
                [1],
                [0],
                [0],
                [1],
            ],
        },
    },
}
