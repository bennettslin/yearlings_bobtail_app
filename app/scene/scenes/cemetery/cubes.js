import { CEMETERY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    GRASS_DARKER_COLOUR as I
} from '../../cubes/colours'

import { LEFT } from '../../cubes/zIndices'

const CUBES = {
    [CEMETERY_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [H, H, I, I, H, H, I, I, H, H, I, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, I, H, H, I, I, H, H, I, I, H]
            ],
            zIndices: [
                [0],
                [3]
            ]
        }
    }
}

export default CUBES
