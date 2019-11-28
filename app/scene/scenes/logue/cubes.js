import { LOGUE_KEY } from '../../../constants/scene/scenes'

import {
    STAGE_FLOOR_COLOUR,
    STAGE_PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

const
    G = STAGE_FLOOR_COLOUR,
    P = STAGE_PLATFORM_COLOUR,

    LOGUE = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [LOGUE_KEY]: LOGUE
    }

export default CUBES
