import { DEFAULT_STAGE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR
} from '../../cubes/colours'

import {
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,

    DEFAULT_STAGE = {
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
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [DEFAULT_STAGE_KEY]: DEFAULT_STAGE
    }

export default CUBES
