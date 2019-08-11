import { FREEWAY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_HSLA,
    PAVEMENT_HSLA,
    PLATFORM_HSLA
} from '../../cubes/keys/hsla'

const
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    P = PLATFORM_HSLA,

    FREEWAY_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G],
                [P],
                [V]
            ],
            zIndices: [
                [0],
                [0],
                [0],
                [4],
                [2]
            ]
        }
    },

    CUBES = {
        [FREEWAY_KEY]: FREEWAY_CUBES
    }

export default CUBES
