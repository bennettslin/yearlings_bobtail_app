import { PUPPET_SHOW_KEY } from '../../../constants/scene/scenes'

import { GROUND_COLOUR as G } from '../../cubes/colours'

const PUPPET_SHOW_CUBES = {
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
