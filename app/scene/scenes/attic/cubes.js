import { ATTIC_KEY } from '../../../constants/scene/scenes'

import { NIGHT_COLOUR as Y } from '../../../constants/scene/cubes/colours'

import { b, g } from '../../../constants/scene/cubes/zIndices'

export default {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [0],
                [0, 6, b, b, b, b, 6, 6, 1, 1, 1, 0],
                [0, 6, 8, 8, 8, 8, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 5, 5, 3, 2, 1, 0],
                [0, 6, 6, 6, 6, 6, 4, 4, 3, 2, 1, 0]
            ]
        }
    }
}
