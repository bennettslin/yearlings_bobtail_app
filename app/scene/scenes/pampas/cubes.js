import { PAMPAS_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    HILL_COLOUR as H,
    HILL_DARKER_COLOUR as I
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [PAMPAS_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [H, H, I, I, H, H, I, I, H, H, I],
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
