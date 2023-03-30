import { NOHO_HOUSES_KEY, NOHO_HOUSES_NIGHT_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    GRASS_NIGHT_COLOUR as I,
    PAVEMENT_COLOUR as V,
    PAVEMENT_NIGHT_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [NOHO_HOUSES_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [H],
                [H],
                [H],
                [V],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
    [NOHO_HOUSES_NIGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [I],
                [I],
                [I],
                [X],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
}
