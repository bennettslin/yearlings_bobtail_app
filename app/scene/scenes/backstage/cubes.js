import { BACKSTAGE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR
} from '../../cubes/keys/hsla'

import {
    g
} from '../../cubes/keys/zIndex'

const
    G  = GROUND_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,

    BACKSTAGE_CUBES = {
        ceiling: {
            hslaColours: [
                [C]
            ],
            zIndices: [
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [g],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES
    }

export default CUBES
