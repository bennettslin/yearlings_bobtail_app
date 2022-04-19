import { TAIWAN_ROOM_KEY } from '../../../../../src/constants/scene/scenes'
import {
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'
import { e, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [TAIWAN_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [e, g, g, 5, 5, 5, 5, 5, e, e, 5, 5],
                [e, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
            ],
        },
        floor: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [g],
                [g, 5],
                [g, 4, 4, 5],
                [5, 3, 3, 5],
                [5, 2, 2, 5, 5, 8, 8, 5],
                [g, 1, 1, 5],
            ],
        },
    },
}
