import { ATTIC_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR,
    // FURNITURE_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/colours'

import {
    a,
    c,
    e,
    f,
    g
} from '../../cubes/zIndices'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,
    // R = FURNITURE_COLOUR,
    U = UPHOLSTERY_COLOUR,

    ATTIC_CUBES = {
        ceiling: {
            hslaColours: [
                [W, C, C, C, C, C, C, W, C, C, C, W]
            ],
            zIndices: [
                [g, e, e, f, f, g, g, g, f, f, f, g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, F, F, F, F, F, W, P, P, F, W],
                [W, F, F, F, F, F, F, W, P, P, F, W]
            ],
            zIndices: [
                [g],
                [g, 7, c, c, c, c, 7, g, 1, 1, 1, g],
                [g, 7, a, a, a, a, 7, g, 1, 1, 1, g],
                [g, 7, a, a, a, a, 7, g, 1, 1, 1, g],
                [g, 7, 7, 7, 7, 7, 7, g, 3, 2, 1, g],
                [g, 7, 7, 7, 7, 7, 7, g, 3, 2, 1, g]
            ]
        }
    },

    CUBES = {
        [ATTIC_KEY]: ATTIC_CUBES
    }

export default CUBES
