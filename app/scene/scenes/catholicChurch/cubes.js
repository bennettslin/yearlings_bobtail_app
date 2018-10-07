import { CATHOLIC_CHURCH_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,

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
