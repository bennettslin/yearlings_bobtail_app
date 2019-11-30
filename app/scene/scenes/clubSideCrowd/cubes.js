import { CLUB_SIDE_CROWD_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_SIDE_CROWD_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [C, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [F]
            ],
            zIndices: [
                [1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [1]
            ]
        }
    }
}

export default CUBES
