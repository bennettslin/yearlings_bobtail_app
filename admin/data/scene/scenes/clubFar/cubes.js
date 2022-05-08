import { CLUB_FAR_DARK_KEY } from '../../../../../src/constants/scene/scenes'
import {
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'
import { g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CLUB_FAR_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [Z],
            ],
            zIndices: [
                [1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1],
            ],
        },
    },
}
