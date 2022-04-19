import { ATTIC_KEY } from '../../../../../src/constants/scene/scenes'

import { DARK_ROOM_COLOUR as Z } from '../../../../../src/constants/scene/cubes/colours'

import { c, f, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [0],
                [0, f, g, f, g, f, g, f, f, f, f, 0],
                [0, f, g, f, g, f, g, f, f, f, f, 0],
                [0, f, g, f, g, f, g, f, f, f, f, 0],
                [0, f, g, f, g, f, g, f, f, f, f, 0],
                [0, f, g, f, g, f, g, f, f, f, f, 0],
            ],
        },
        floor: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [0],
                [0, 7, c, c, c, c, 7, 7, 1, 1, 1, 0],
                [0, 7, 9, 9, 9, 9, 7, 7, 1, 1, 1, 0],
                [0, 7, 7, 7, 7, 7, 6, 6, 1, 1, 1, 0],
                [0, 7, 7, 7, 7, 7, 5, 5, 1, 1, 1, 0],
                [0, 7, 7, 7, 7, 7, 4, 4, 3, 2, 1, 0],
            ],
        },
    },
}
