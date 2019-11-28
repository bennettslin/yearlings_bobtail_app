import { DISHROOM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR,
    FURNITURE_COLOUR
} from '../../cubes/keys/hsla'

import {
    b,
    f,
    g
} from '../../cubes/keys/zIndex'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,
    R = FURNITURE_COLOUR,

    DISHROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, W, W, W, W, W, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g, g, f, f, f, f, f, g, f, f, f, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, E, E, E, W],
                [W, F, R, R, R, R, R, F, P, P, P, W],
                [W, F, R, R, R, R, R, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g, g, b, b, b, b, b, g, f, f, f, g],
                [g, 1, 7, 7, 7, 7, 7, 1, 5, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [DISHROOM_KEY]: DISHROOM_CUBES
    }

export default CUBES
