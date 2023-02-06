import { CAPTAIN_BED_KEY } from '../../../../../src/constants/scene/scenes'
import {
    BENNETT_WALL_COLOUR as W,
    BENNETT_CARPET_COLOUR as F,
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'
import { g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CAPTAIN_BED_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W],
                [Z],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F],
                [Z],
            ],
            zIndices: [
                [0],
                [1],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
}
