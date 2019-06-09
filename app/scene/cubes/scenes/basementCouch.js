import { BASEMENT_COUCH_KEY } from '../../scenes/keys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA
} from '../keys/hsla'

import {
    c,
    d
} from '../keys/zIndex'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,
    R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,

    BASEMENT_SOFA_CUBES = {
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
    },

    CUBES = {
        [BASEMENT_COUCH_KEY]: BASEMENT_SOFA_CUBES
    }

export default CUBES
