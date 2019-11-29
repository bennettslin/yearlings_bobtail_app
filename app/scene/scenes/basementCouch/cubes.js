import { BASEMENT_COUCH_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    BASEMENT_WALL_COLOUR as W,
    DOOR_COLOUR as E,
    PLATFORM_COLOUR as P,
    FURNITURE_COLOUR as R,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

import { c, d } from '../../cubes/zIndices'

const CUBES = {
    [BASEMENT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C]
            ],
            zIndices: [
                [d],
                [d],
                [d, d, d, d, d, d, d, d, d, d, d, c],
                [d, d, d, d, d, d, d, d, d, d, d, c],
                [d]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, R, U, U, U, U, U, U, R, R, F, W],
                [W, R, U, U, U, U, U, U, F, P, P, E],
                [W, F, U, U, U, U, U, U, F, P, P, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [d],
                [d, 4, 6, 6, 6, 6, 6, 6, 3, 3, 0, d],
                [d, 4, 3, 3, 3, 3, 3, 3, 0, 1, 2, c],
                [d, 0, 3, 3, 3, 3, 3, 3, 0, 1, 2, c],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d]
            ]
        }
    }
}

export default CUBES
