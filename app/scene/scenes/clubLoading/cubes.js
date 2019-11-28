import { CLUB_LOADING } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR
} from '../../cubes/keys/hsla'

import {
    d,
    f,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,

    CLUB_LOADING_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, C, W, W, W, C],
                [C],
                [D]
            ],
            zIndices: [
                [f],
                [f],
                [f, f, f, f, d, d, d, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V, W],
                [V, W, F],
                [V, W, W, W, F, F, F, W],
                [V]
            ],
            zIndices: [
                [1, f],
                [1, f, 1],
                [1, f, f, f, 1, 1, 1, f],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_LOADING]: CLUB_LOADING_CUBES
    }

export default CUBES
