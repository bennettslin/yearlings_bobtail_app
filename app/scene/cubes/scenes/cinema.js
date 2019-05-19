import { CINEMA_KEY } from '../../scenes/keys'

import {
    DEFAULT_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA
} from '../keys/hsla'

import {
    e,
    f,
    k
} from '../keys/zIndex'

const
    D = DEFAULT_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,

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
