import { NOHO_HOUSES_KEY } from '../../../constants/scene/scenes'

import {
    LAWN_COLOUR as L,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [NOHO_HOUSES_KEY]: {
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
    }
}

export default CUBES
