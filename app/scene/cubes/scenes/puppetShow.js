import { PUPPET_SHOW_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    P = PLATFORM_HSLA,

    PUPPET_SHOW_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [P],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [4],
                [0]
            ]
        }
    },

    CUBES = {
        [PUPPET_SHOW_KEY]: PUPPET_SHOW_CUBES
    }

export default CUBES
