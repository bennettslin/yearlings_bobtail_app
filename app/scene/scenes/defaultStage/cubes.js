import { DEFAULT_STAGE_KEY } from 'constants/scene/scenes'

import {
    DEFAULT_HSLA
} from '../../cubes/keys/hsla'

import {
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_HSLA,

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
