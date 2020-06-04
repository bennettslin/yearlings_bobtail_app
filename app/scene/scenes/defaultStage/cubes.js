import { DEFAULT_STAGE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G
} from '../../../constants/scene/cubes/colours'

import { k } from '../../../constants/scene/cubes/zIndices'

export default {
    [DEFAULT_STAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}
