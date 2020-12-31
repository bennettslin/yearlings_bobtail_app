import { DEFAULT_STAGE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
} from '../../../../../app/constants/scene/cubes/colours'

import { k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [DEFAULT_STAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
            ],
            zIndices: [
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}
