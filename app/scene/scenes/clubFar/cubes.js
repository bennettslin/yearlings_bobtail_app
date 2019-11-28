import {
    CLUB_FAR_KEY
} from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

import {
    g
} from '../../cubes/keys/zIndex'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,

    CLUB_FAR_CUBES = {
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
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [CLUB_FAR_KEY]: CLUB_FAR_CUBES
    }

export default CUBES
