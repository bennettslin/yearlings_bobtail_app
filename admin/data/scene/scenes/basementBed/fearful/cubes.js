import { BASEMENT_BED_MAGIC_KEY } from '../../../../../../src/constants/scene/scenes'
import { NIGHT_MAGIC_COLOUR as Z } from '../../../../../../src/constants/scene/cubes/colours'

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

export const BASEMENT_BED_MAGIC_CUBES = {
    [BASEMENT_BED_MAGIC_KEY]: {
        floor: {
            hslaColours: [
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
}
