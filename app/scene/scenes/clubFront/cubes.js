import { CLUB_FRONT_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_FRONT_KEY]: {
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
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES
