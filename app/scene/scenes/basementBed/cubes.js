import {
    BASEMENT_BED_KEY,
    BASEMENT_BED_MAGIC_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    BENNETT_BED_COLOUR as U
} from '../../cubes/colours'

import { DEFAULT_CEILING } from '../basement/cubes'

const CUBES = {
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
            zIndices: [
                [0],
                [2],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            ]
        }
    },
    [BASEMENT_BED_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, F, F, F, U, U, U, U, U, U, V],
                [V, F, F, F, F, F, F, F, F, F, F, V]
            ],
            zIndices: [
                [0],
                [2],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            ]
        }
    }
}

export default CUBES
