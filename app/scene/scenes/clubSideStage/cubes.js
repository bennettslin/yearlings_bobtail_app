import { CLUB_SIDE_STAGE_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { e, g } from '../../cubes/zIndices'

const CUBES = {
    [CLUB_SIDE_STAGE_KEY]: {
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
    }
}

export default CUBES
