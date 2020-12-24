import {
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY
} from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GRASS_COLOUR as H,
    NIGHT_COLOUR as Y,
    NIGHT_MAGIC_COLOUR as Z
} from '../../../../../app/constants/scene/cubes/colours'

import { DEFAULT_CEILING } from '../basement/cubes'

const DEFAULT_FLOOR = {
    zIndices: [
        [3],
        [3],
        [3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
    ]
}

export default {
    [BASEMENT_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [H],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    },
    [BASEMENT_BED_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [H],
                [Z]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    }
}
