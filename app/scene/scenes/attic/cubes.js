import { ATTIC_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    // FURNITURE_HSLA,
    UPHOLSTERY_HSLA
} from '../../cubes/keys/hsla'

import {
    a,
    c,
    e,
    f,
    g
} from '../../cubes/keys/zIndex'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,
    // R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,

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
