import { TETHERBALL_COURT_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [TETHERBALL_COURT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, V, V, V, V, V, V, V, V, V, V, G],
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
}
