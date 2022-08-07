import { TAIWAN_ROOM_KEY } from '../../../../../src/constants/scene/scenes'
import {
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'
import { e, f, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [TAIWAN_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [5],
                [5, g, g, g, g, g, g, g, g, g, g, 5],
                [4, g, g, g, g, g, g, g, g, g, g, 5],
                [f, g, g, g, 5, 5, 5, 5, 5, e, e, 5],
                [f, g, g, g, g, g, g, g, g, g, g, 5],
                [1, g, g, g, g, g, g, g, g, g, g, 5],
            ],
        },
        floor: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [5],
                [5, 5],
                [4, 4, 4, 4, 5],
                [6, 3, 3, 3, 5],
                [6, 2, 2, 2, 5, 8, 8, 5],
                [1, 1, 1, 1, 5],
            ],
        },
    },
}
