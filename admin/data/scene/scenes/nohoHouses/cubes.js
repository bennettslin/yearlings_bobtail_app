import { NOHO_HOUSES_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GRASS_COLOUR as H,
    PAVEMENT_COLOUR as V
} from '../../../../../app/constants/scene/cubes/colours'

export default {
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
