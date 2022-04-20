import { FREEWAY_KEY, FREEWAY_NIGHT_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    PAVEMENT_NIGHT_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
    CONCRETE_PLATFORM_NIGHT_COLOUR as Q,
} from '../../../../../src/constants/scene/cubes/colours'

const DEFAULT_FLOOR = {
    zIndices: [
        [0],
        [0],
        [0],
        [4],
        [2],
    ],
}

export default {
    [FREEWAY_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G],
                [P],
                [V],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [FREEWAY_NIGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G],
                [Q],
                [X],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
}
