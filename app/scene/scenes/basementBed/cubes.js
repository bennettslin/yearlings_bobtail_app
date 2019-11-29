import {
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    DIRT_FLOOR_COLOUR as F,
    BASEMENT_WALL_COLOUR as W,
    PLATFORM_COLOUR as P,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { c } from '../../cubes/zIndices'

import { DEFAULT_CEILING } from '../basement/cubes'

const CUBES = {
    [BASEMENT_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [W, W, G, G, W],
                [W, F, P, P, F, F, F, F, F, F, F, W],
                [W, F, P, P, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [2],
                [c, c, 2, 2, c],
                [c, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, c],
                [c, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, c],
                [c, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, c],
                [c, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c]
            ]
        }
    },
    [BASEMENT_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, F, P, P, F, F, F, F, F, F, F, G],
                [G, F, P, P, F, F, F, F, F, F, F, G],
                [G, F, P, P, F, U, U, U, U, U, U, G],
                [G, F, F, F, F, U, U, U, U, U, U, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [2],
                [2, 0, 2, 2, 0],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            ]
        }
    }
}

export default CUBES
