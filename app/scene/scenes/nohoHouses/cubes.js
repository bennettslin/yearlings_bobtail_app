import { NOHO_HOUSES_KEY } from '../../../constants/scene/scenes'

import {
    LAWN_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    V = PAVEMENT_COLOUR,
    L = LAWN_COLOUR,

    NOHO_HOUSES = {
        floor: {
            hslaColours: [
                [L],
                [L],
                [L],
                [L],
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_HOUSES_KEY]: NOHO_HOUSES
    }

export default CUBES
