import { TAIWAN_GATE_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    WALL_COLOUR
} from '../../cubes/keys/hsla'

import {
    d,
    g
} from '../../cubes/keys/zIndex'

const
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    W = WALL_COLOUR,

    TAIWAN_GATE_CUBES = {
        floor: {
            hslaColours: [
                [T],
                [T],
                [W, W, W, V, A, V, T, T, T, T, V, V],
                [V, V, V, V, A, V, T],
                [A, V, V, V, A, V, T],
                [V, V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [0],
                [g, g, g, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, d, 1, 0],
                [d, 1, 1, 1, d, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES
    }

export default CUBES
