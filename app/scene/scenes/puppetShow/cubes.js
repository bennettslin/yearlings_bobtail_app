import { PUPPET_SHOW_KEY } from '../../../constants/scene/scenes'

import { GROUND_HSLA } from '../../cubes/keys/hsla'

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
