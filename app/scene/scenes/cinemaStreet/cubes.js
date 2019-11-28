import { CINEMA_STREET_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    WALL_COLOUR
} from '../../cubes/keys/hsla'

import {
    f,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    W = WALL_COLOUR,

    CINEMA_STREET_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, V],
                [W, W, W, V, T, T, T, T, V],
                [W, W, W, V, T, T, T, T, T, V],
                [V, V, V, V, T, T, T, T, T, T, V],
                [V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [f, f, f, 1],
                [f, f, f, 1, 0, 0, 0, 0, 1],
                [f, f, f, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES
    }

export default CUBES
