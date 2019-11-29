import { NOHO_HOUSES_KEY } from '../../../constants/scene/scenes'

import {
    GRASS_COLOUR as H,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [NOHO_HOUSES_KEY]: {
        floor: {
            hslaColours: [
                [H],
                [H],
                [H],
                [H],
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
