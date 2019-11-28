import { BASEMENT_COUCH_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR,
    FURNITURE_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/keys/hsla'

import {
    c,
    d
} from '../../cubes/keys/zIndex'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,
    R = FURNITURE_COLOUR,
    U = UPHOLSTERY_COLOUR,

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
