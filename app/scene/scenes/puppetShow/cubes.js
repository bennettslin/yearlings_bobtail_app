import { PUPPET_SHOW_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,

    PUPPET_SHOW_CUBES = {
        floor: {
            hslaColours: [
                [G]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [PUPPET_SHOW_KEY]: PUPPET_SHOW_CUBES
    }

export default CUBES
