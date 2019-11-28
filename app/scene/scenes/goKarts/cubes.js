import { GO_KARTS_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    LAWN_COLOUR,
    SEAT_COLOUR
} from '../../cubes/keys/hsla'

const
    T = STREET_COLOUR,
    X = CROSSWALK_COLOUR,
    L = LAWN_COLOUR,
    S = SEAT_COLOUR,

    GO_KARTS_CUBES = {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, S, S, S, S, T, T, S, S, S, S, T],
                [T],
                [X],
                [L]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [GO_KARTS_KEY]: GO_KARTS_CUBES
    }

export default CUBES
