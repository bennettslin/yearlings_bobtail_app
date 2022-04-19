import { BASEMENT_BED_DARK_KEY } from '../../../../../src/constants/scene/scenes'
import { BASEMENT_BED_MAGIC_CUBES } from './fearful/cubes'
import {
    DEFAULT_CLEAR_COLOUR as D,
    GRASS_COLOUR as H,
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'
import { DEFAULT_CEILING } from '../basement/cubes'

const DEFAULT_FLOOR = {
    zIndices: [
        [3],
        [3],
        [3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
        [3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    ],
}

export default {
    [BASEMENT_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [Z],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [H],
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    ...BASEMENT_BED_MAGIC_CUBES,
}
