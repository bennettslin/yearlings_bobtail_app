import { DEFAULT_STAGE_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA
} from '../hslaKeys'

import {
    k
} from '../zIndexKeys'

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
