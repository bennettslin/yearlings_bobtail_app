import { CLUB_SIDE_CROWD_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_SIDE_CROWD_KEY]: {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [P, P, P, P, F, F, F, F, F, F, F, W],
                [P, P, P, P, F, F, F, F, F, F, F, W],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [F, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES
