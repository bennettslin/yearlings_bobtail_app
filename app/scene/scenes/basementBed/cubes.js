import {
    BASEMENT_BED_KEY,
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    NIGHT_COLOUR as Y,
    NIGHT_MAGIC_COLOUR as Z,
    BENNETT_BED_COLOUR as U
} from '../../cubes/colours'

import { DEFAULT_CEILING } from '../basement/cubes'

const DEFAULT_FLOOR = {
    zIndices: [
        [0],
        [2],
        [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
    ]
}

export default {
    [BASEMENT_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, F, F, F, U, U, U, U, U, U, V],
                [V, F, F, F, F, F, F, F, F, F, F, V]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    },
    [BASEMENT_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [G],
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [G],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    },
    [BASEMENT_BED_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 0, 2, 2, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0],
                [0]
            ]
        }
    }
}
