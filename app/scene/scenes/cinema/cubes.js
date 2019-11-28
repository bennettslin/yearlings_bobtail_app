import { CINEMA_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR
} from '../../cubes/colours'

import {
    e,
    f,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,

    CINEMA_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, W, W, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [k],
                [f, f, f, e, e, e, e, e, e, f],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, E, E, E, E, E, E, W],
                [W, W, W, F, F, F, F, F, F, W],
                [W, W, W, F, F, F, F, F, F, W],
                [V]
            ],
            zIndices: [
                [0],
                [f, f, f, e, e, e, e, e, e, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [1]
            ]
        }
    },

    CUBES = {
        [CINEMA_KEY]: CINEMA_CUBES
    }

export default CUBES
