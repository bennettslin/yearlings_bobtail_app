import { CLUB_SIDE_STAGE_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

import {
    e,
    g
} from '../../cubes/keys/zIndex'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,

    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [W, C],
                [W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [e, g],
                [e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [W, P, P, P, P, P, P, P, P, P, F],
                [W, F]
            ],
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 1]
            ]
        }
    },

    CUBES = {
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES
    }

export default CUBES
