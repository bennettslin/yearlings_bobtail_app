import { CATHOLIC_CHURCH_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/keys/hsla'

const
    G = GROUND_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,

    CATHOLIC_CHURCH_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T],
                [T],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [0],
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [CATHOLIC_CHURCH_KEY]: CATHOLIC_CHURCH_CUBES
    }

export default CUBES
